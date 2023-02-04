import { Types } from "mongoose"
import { UserModel } from "../schemas/user.schema"
import { UserCreate, UserUpdate } from "../types/user"

export default {
    create: async (user:UserCreate) => {
        const userCreated = await new UserModel(user).save()
        return userCreated
    },
    getAll: async () => {
        return await UserModel.find()
    },

    getById: async (id:Types.ObjectId) => {
        const findUser = await UserModel.findById(id)
        if(!findUser) throw new Error("User is not exist")
        return findUser.toObject()
    },
    getByEmail: async (email:string) => {
        const findUser = await UserModel.findOne({email})
        if(!findUser) throw new Error("User is not exist")
        return findUser.toObject()
    },
    update: async (id:string, updateProperties:UserUpdate) => {
        return UserModel.findByIdAndUpdate(id, updateProperties,{new:true})
    },
    delete: async (id:string) => {
        return await UserModel.findByIdAndDelete(id)
    }

}