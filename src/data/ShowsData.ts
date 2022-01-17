import { Show, Show2, ShowOutputDTO, WeekDay } from "../model/shows";
import { connection } from "./connection";

export class ShowsData {

    private static TABLE_NAME = "nome_tabela_shows"

    public insertShow = async (show:Show) => {
        const {id, week_day, start_time, end_time, band_id} = show

        await connection.insert({
            id,
            week_day,
            start_time,
            end_time,
            band_id
        }).into("nome_tabela_shows")
    }

    public selectShowById = async(id:string): Promise<Show> => {
            try {
                const result = await connection("nome_tabela_shows")
                .select("*")
                .where({id})
                return result[0]
                
            } catch (error: any) {
                throw new Error(error.slqMessage || error.message)
            }
    }
    
    public getShowByDay = async(week_day:string): Promise<any> => {
        try {
            const result = await connection("nome_tabela_shows")
            .select("*")
            // .leftJoin("nome_tabela_bandas", function() {
            //     this.on("nome_tabela_bandas.id", "band_id")
            // })
            .where({week_day})
            .orderBy("start_time", "asc")
            
            console.log("console showsdata", week_day)
            return result[0]
            

        } catch (error: any) {
            throw new Error(error.slqMessage || error.message)
        }
    }

    // public async getShowByTime (
    //     week_day: WeekDay,
    //     start_time: number,
    //     end_time: number
    // ) : Promise<ShowOutputDTO> {
    //     const shows = await connection.raw(
    //         `
    //         SELECT show.id as id,
    //             show.start_time as start_time,
    //             show.end_time as end_time,
    //             show.week_day as week_day
    //         FROM ${ShowsData.TABLE_NAME} show
    //         WHERE show.week_day = "${week_day}"
    //         AND WHERE show.start_time <= "${end_time}"
    //         AND WHERE show.end_time >= "${start_time}"
    //         ORDER BY start_time ASC
    //         `
    //     )
        
    //     return shows.map((show: any) => {
    //         return {
    //             id: show.id,
    //             week_day: show.week_day,
    //             start_time: show.start_time,
    //             end_time: show.end_time,
    //             band_id: show.band_id
    //         }
    //     })
    // }

}


