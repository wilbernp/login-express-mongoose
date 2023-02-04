import { Request, Response } from "express"
import usersService from "../services/users.service"

export default {
    getProfile: async (req: Request, res: Response) => {
        const {password, ...restProps} = await usersService.getById(req.user.id)
        res.send(restProps)
    }
}