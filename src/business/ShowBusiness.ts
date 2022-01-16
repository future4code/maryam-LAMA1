import { BandsData } from "../data/BandsData";
import { ShowsData } from "../data/ShowsData";
import { Show2, ShowInput, WeekDay } from "../model/shows";
import { generateId } from "../services/IdGenerator"
import { BandBusiness } from "./BandBusiness";

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

            // Validações para o cadastro dos shows -- não funcionam ;_;

            if (show.start_time < 8 || show.end_time > 23 || show.start_time >= show.end_time) {
              throw new Error("O show precisa ter um horário redondo! (ou seja, pode ser 08h - 09h ou 09h - 13h mas não pode ser 09h - 10h30 ou 10h30 - 14h)")
            }

            if (!Number.isInteger(show.start_time) || !Number.isInteger(show.end_time)) {
              throw new Error("O horário precisa ser um número inteiro!")
            }

            const chosenBand = await new BandBusiness().getBandById(show.band_id)

            if (!chosenBand) {
              throw new Error ("A banda não foi encontrada!")
            }

            const registeredShow = await new ShowsData().getShowByDay(show.week_day)

            if (!registeredShow) {
              throw new Error ("Não há shows registrados.")
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

    // Esse aqui é o que fiz ontem e estava dando erro

    // selectAllShowsByDay = async (week_day: string) => {
    //   try {
    //     const result = await new ShowsData().getShowByDay(week_day)
    //     return result

    //   } catch (error: any) {
    //     throw new Error(error.message)
    //   }
    // }



    // Fiz esse hoje seguindo o seu template e está quase funcionando
    selectAllShowsByDay = async(week_day:string):Promise<any> => {
      try {
        if(
          !week_day
        ){
          throw new Error("Prencha o dia da semana em que ocorre o evento!")
        }
        const getBand:Show2 = await new ShowsData().getShowByDay(week_day)
        return getBand
        
      } catch (error:any) {
        throw new Error(error.message);
      }
    }
}