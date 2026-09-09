import { NextFunction, Request, Response } from "express";
import jsonWebToken, {JwtPayload} from "jsonwebtoken";

const JWT_USER_SECRET = process.env.JWT_USER_SECRET;

export const userMiddleware= (req: Request, res: Response, next: NextFunction) => {
    const header= req.headers.authorization;
    const decode= jsonWebToken.verify(header as string, JWT_USER_SECRET!) as JwtPayload;

    if(decode){
        req.userId= decode.id;
        next();
    } else{
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}