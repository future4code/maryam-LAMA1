import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { UserData } from "../data/UserData";
import { UserInput, UserLogin } from "../model/User";

export class UserBusiness {

    signUpBusiness = async(user:UserInput)=> {
        try {
            if(
                !user.name ||
                !user.email ||
                !user.password ||
                !user.role
            ){
                throw new Error("Prencha os campos corretamente!")
            }
        const id: string = generateId()

        const hashPassword = await new HashManager().hash(user.password)
        
        await new UserData().insertUser({
            id,
            name:user.name,
            email:user.email,
            password:hashPassword,
            role:user.role
        })

        const accessToken = new Authenticator().generateToken({
            id,
            role: user.role
        })
        return accessToken

        } catch (error:any) {
            throw new Error(error.message);
        }

    }

    getUserByEmail = async(login:UserLogin) => {
        try {
            if(
                !login.email ||
                !login.password
            ){
                throw new Error("Prencha os campos corretamente!")
            }
            const userData = await new UserData().getUserByEmail(login.email)
            if(!userData){
                throw new Error("E-mail não encontrado!")
            }

            const hashCompare = await new HashManager().compare(login.password, userData.getPassword())
            if(!hashCompare){
                throw new Error("Senha inválida!")
            }

            const accessToken = new Authenticator().generateToken({
                id:userData.getId(),
                role:userData.getRole()
            })
            return accessToken
        } catch (error:any) {
            throw new Error(error.message);
        }
    }
    
}