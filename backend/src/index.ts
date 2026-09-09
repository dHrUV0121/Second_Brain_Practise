import "dotenv/config";

import express from "express"; // to make this error go away intall another dependency called "@types/express" because originally the express library is written in .js and we are making a .ts project, therefore to use express here we have to do this important step, Basically it will install an index.d.ts file which have all the types express give in .ts format
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import zod, { jwt } from 'zod';
import { ContentModel, LinkModel, UserModel } from "./ds";
import bcrypt from "bcrypt";
import { connectDB } from "./ds";
import { userMiddleware } from "./middlewares";
import crypto from "crypto";

const app= express();

const JWT_USER_SECRET = process.env.JWT_USER_SECRET;

app.use(express.json());

app.post("/api/v1/signup", async (req, res) =>{

    console.log("1. Signup route hit");

    const requiredBody= zod.object({
        username: zod.string().min(6),
        password: zod.string().min(3)
    })

    console.log("2. Zod schema created");

    const parsedWithSuccess= requiredBody.safeParse(req.body);

    console.log("3. Body parsed", parsedWithSuccess);

    if(!parsedWithSuccess.success){
        res.json({
            message: "Invalid Format",
            error: parsedWithSuccess.error
        })
        return;
    }

    const username= req.body.username;
    const password= req.body.password;

    console.log("4. Before bcrypt");

    let errorThrown= false;
    try {
        const hashedPassword= await bcrypt.hash(password, 5); 

        console.log("5. Password hashed");

        await UserModel.create({
            username: username,
            password: hashedPassword
        })

        console.log("6. User created");

        res.json({
            message: "User created"
        })

        console.log("7. Response sent");

    } catch (error) {
        console.log(error);

        res.json({
            message: "User already exists"
        })
        errorThrown= true;
    }
})

app.post("/api/v1/signin", async (req, res) =>{
    const username= req.body.username;
    const password= req.body.password;

    const response= await UserModel.findOne({
        username: username
    })

    if(!response){
        res.status(402).send({
            message: "User doesn't exist"
        })
        return;
    }

    const passwordMatch= await bcrypt.compare(password, response.password);

    if(passwordMatch){
        const token= jsonwebtoken.sign({
            id: response._id.toString()
        }, JWT_USER_SECRET!);
        res.json({
            token: token
        })
    } else{
        res.status(403).send({
            message: "Incorrect credentials"
        })
    }
})

app.post("/api/v1/content", userMiddleware, async (req, res) =>{
    const title= req.body.title;
    const link= req.body.link;
    await ContentModel.create({
        title,
        link,
        userId: new mongoose.Types.ObjectId(req.userId),
        tags: []
    })

    res.json({
        message: "Content added"
    })
})

app.get("/api/v1/content", userMiddleware, async (req, res) =>{
    const userId= new mongoose.Types.ObjectId(req.userId);
    const content= await ContentModel.find({
        userId: userId
    }).populate("userId", "username")  // used for doing references

    res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async (req, res) =>{
    const contentId= req.body.contentId;
    await  ContentModel.deleteMany({
        _id: contentId, 
        userId: new mongoose.Types.ObjectId(req.userId)
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) =>{
    const share= req.body.share;

    if(share){
        const existingLink= await LinkModel.findOne({
            userId: new mongoose.Types.ObjectId(req.userId)
        })

        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        const hash= crypto.randomBytes(10).toString("hex");

        await LinkModel.create({
            hash,
            userId: new mongoose.Types.ObjectId(req.userId)
        })

        res.json({
            hash
        })
    } else{
        await LinkModel.deleteOne({
            userId: new mongoose.Types.ObjectId(req.userId)
        })

        res.json({
            message: "Share link removed"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) =>{
    const hash= req.params.shareLink;

    const link= await LinkModel.findOne({
        hash: hash
    })

    if(!link){
        res.status(404).json({
            message: "Link not found"
        })
        return;
    }

    const content= await ContentModel.findOne({
        userId: link.userId
    })

    res.json({
        content: content
    })
})

connectDB().then(() =>{
    app.listen(3000, (req) =>{
        console.log("server running on port 3000");
    });
});
