import { Request, Response } from "express";
import authService from "../services/auth.service";
import { Login } from "../types/auth";
import { UserCreate } from "../types/user";

export default {
 register: async (req:Request, res:Response) => {
        const body = req.body as UserCreate
        try {
            const newUser = await authService.register(body)
            res.send(newUser)
        } catch (error) {
            res.status(404).json({message:"Not found"})
        }
      
    },
    login: async (req:Request, res:Response) => {
        const body = req.body as Login
        try {
            const user = await authService.login(body)
            res.send(user)
        } catch (error) {
            res.status(404).json({message:"Not found"})
        }
    }
}
