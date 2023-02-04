export interface UserCreate {
    username:string;
    email:string;
    password:string;
}

export type UserUpdate = Partial<UserCreate>