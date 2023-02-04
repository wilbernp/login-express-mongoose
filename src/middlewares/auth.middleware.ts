import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import jwtHandle from "../utils/jwt.handle";

export default {
    authenticate: (req: Request, res: Response, next: NextFunction) => {
        const bearerToken = req.headers.authorization
        console.log("bearerToken",bearerToken)
        if (!bearerToken) {
            return res.status(401).json({ message: "Please authenticate" })
        }

        const token = bearerToken.split(" ")[1]

        try {
            const decoded = jwtHandle.verifyToken(token)
            req.user = decoded as JwtPayload
            next()
        } catch (error) {

            return res.status(401).json({ message: "Please authenticate" })
        }
    }
}