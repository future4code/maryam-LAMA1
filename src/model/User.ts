export class User{
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLE
        ){}
    
        getId(){
            return this.id;
        }
    
        getName(){
            return this.name
        }
    
        getEmail(){
            return this.email;
        }
    
        getPassword(){
            return this.password;
        }
    
        getRole(){
            return this.role;
        }
    
        setId(id: string){
            this.id = id;
        }
    
        setName(name: string){
            this.name = name;
        }
    
        setEmail(email: string){
            this.email = email;
        }
    
        setPassword(password: string){
            this.password = password;
        }
    
        setRole(role: USER_ROLE){
            this.role = role;
        }

        static stringToUserRole(input: string): USER_ROLE{
            switch (input) {
                case "NORMAL":
                  return USER_ROLE.NORMAL;
                case "ADMIN":
                  return USER_ROLE.ADMIN;
                default:
                  throw new Error("Invalid user role");
              }
        }
    
        static toUserModel(user: any): User {
            return new User(user.id, user.name, user.email, user.password, User.stringToUserRole(user.role));
          }
    
}
export enum USER_ROLE{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
export interface UserInput {
    name: string,
    email: string,
    password: string | any,
    role: USER_ROLE 
}
export interface User_id extends UserInput {
    id: string
}

export interface UserLogin {
    email: string,
    password: string
}