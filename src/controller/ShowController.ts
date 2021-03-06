import { Request, Response } from "express";
import { ShowBusiness} from "../business/ShowBusiness"
import { connection } from "../data/connection"
import { WeekDay } from "../model/shows";


export class ShowController {
    signUpController = async (req: Request, res: Response) => {
        try {
            const {week_day, start_time, end_time, band_id } = req.body

            const result = await new ShowBusiness()
            .signUpBusiness({
                week_day,
                start_time,
                end_time,
                band_id
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

    getShows = async (req: Request, res: Response) => {
        try {
            const {week_day} = req.params
            const result = await new ShowBusiness()
            .selectAllShowsByDay(week_day)
            res
                .status(201)
                .send({
                    result
                })
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
}