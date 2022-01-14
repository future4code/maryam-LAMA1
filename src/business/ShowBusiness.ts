import { ShowsData } from "../data/ShowsData";
import { ShowInput } from "../model/shows";
import { generateId } from "../services/IdGenerator"

export class ShowBusiness{
    signUpBusiness = async (show:ShowInput): Promise<string> => {
      try {
        if (
            !show.week_day ||
            !show.start_time ||
            !show.end_time ||
            !show.band_id
            ){
                throw new Error("Prencha os campos corretamente!")
            }
            
            const id: string = generateId()
            await new ShowsData().insertShow({
                id,
                week_day: show.week_day,
                start_time: show.start_time,
                end_time:show.end_time,
                band_id: show.band_id
            })
        const message = "Show Cadastrado com Sucesso!"
            return message
      } catch (error:any) {
        throw new Error(error.message);
      }
    }
}