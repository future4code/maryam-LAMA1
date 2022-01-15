import { Band } from "../model/band";
import { connection } from "./connection";

export class BandsData {
    public insertBand = async (band:Band) => {
        const {id, name, music_genre, responsible} = band

        await connection.insert({
            id,
            name,
            music_genre,
            responsible
        }).into("nome_tabela_bandas")
    }

    public selectBandById = async(id:string): Promise<Band> => {
            try {
                const result = await connection("nome_tabela_bandas")
                .select("*")
                .where({id})
                return result[0]
                
            } catch (error: any) {
                throw new Error(error.slqMessage || error.message)
            }
    }

    public selectBandByName = async(name:string):Promise<Band> => {
        try {
            const isBandExists = await connection("nome_tabela_bandas")
            .select("*")
            .where({name})
            return isBandExists[0]
            
        } catch (error:any) {
            throw new Error(error.slqMessage || error.message)
        }
    }
    
}