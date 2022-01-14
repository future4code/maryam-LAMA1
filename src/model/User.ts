export enum USER_ROLE{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
export interface UserInput {
    name: string,
    email: string,
    password: string,
    role: USER_ROLE 
}