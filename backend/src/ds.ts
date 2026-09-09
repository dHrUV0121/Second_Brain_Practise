import mongoose, { mongo, Schema } from "mongoose";
import "dotenv/config";
import { required } from "zod/mini";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UserModel = mongoose.model("user", UserSchema);

const ContentSchema= new Schema({
    title: {type: String, requied: true},
    link: {type: String},
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'user', required: true}
});

export const ContentModel= mongoose.model("content", ContentSchema);


const LinkSchema= new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: "user", required: true, unique: true}
})

export const LinkModel= mongoose.model("link", LinkSchema);

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}