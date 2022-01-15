import { User, User_id } from "../model/User";
import { connection } from "./connection";

export class UserData{
  public insertUser = async (user:User_id) => {
    const {id, name, email, password, role} = user
    
    await connection.insert({
      id,
      name,
      email,
      password,
      role
    }).into("nome_tabela_usuarios")
  }
  public getUserByEmail = async(email:string) => {
    try {
      const result = await connection("nome_tabela_usuarios")
      .select("*")
      .where({email})
      return User.toUserModel(result[0])


    } catch (error:any) {
      throw new Error(error.slqMessage || error.message)
    }
  }
}