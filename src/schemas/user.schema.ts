import { model, Schema } from "mongoose";
import { UserCreate } from "../types/user";

const UserSchema = new Schema<UserCreate>({
    email:String,
    password:String,
    username:String
})

export const UserModel = model<UserCreate>("User",UserSchema)