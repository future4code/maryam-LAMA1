import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserData } from "../data/UserData";

export class UserController {
    signUpController = async(req: Request, res: Response) => {
        try {
            const {name, email, password, role} = req.body

            const result = await new UserBusiness()
            .signUpBusiness({
                name,
                email,
                password,
                role
            })
            res
            .status(201)
            .send({
                message:result
            })
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }

    login = async(req: Request, res: Response) => {
        try {
            const {email, password} = req.body

            const token = await new UserBusiness()
            .getUserByEmail({email, password})
            res
            .status(200)
            .send({token})
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }

}