export interface User {
    id:number;
    email: string;
    name: string;
    roles: string;
    access_token:string;
    refresh_token:string;
    username:string;
}

export interface UserSchema{
    authData?:User;
}
