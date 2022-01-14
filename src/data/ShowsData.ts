import { Show } from "../model/shows";
import { connection } from "./connection";

export class ShowsData {
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
    
}