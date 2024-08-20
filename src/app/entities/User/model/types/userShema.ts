export interface User {
    id:string;
    login: string;
    name: string;
    role: string;
}

export interface UserSchema{
    authData?:User;
}
