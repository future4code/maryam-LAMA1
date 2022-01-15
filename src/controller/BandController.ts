import { Request, Response } from "express";
import { BandBusiness} from "../business/BandBusiness"

export class BandController {
    signUpController = async (req: Request, res: Response) => {
        try {
            const {name, music_genre, responsible} = req.body

            const result = await new BandBusiness()
            .signUpBusiness({
                name,
                music_genre,
                responsible
            })
            res
            .status(201)
            .send({
                message:result
            })
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    getBandById = async(req:Request, res:Response) => {
        try {
            const {id} = req.params
            const result = await new BandBusiness()
            .getBandById(id)
            res
            .status(200)
            .send({
                result
            })
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}