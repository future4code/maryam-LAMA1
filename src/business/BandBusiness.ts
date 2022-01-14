import { BandsData } from "../data/BandsData";
import { BandInput } from "../model/band";
import { generateId } from "../services/IdGenerator"

export class BandBusiness{
    signUpBusiness = async (band:BandInput): Promise<string> => {
      try {
        if (
            !band.name ||
            !band.music_genre ||
            !band.responsible
            ){
                throw new Error("Prencha os campos corretamente!")
            }

            const id: string = generateId()
            await new BandsData().insertBand({
                id,
                name:band.name,
                music_genre: band.music_genre,
                responsible:band.responsible
            })
        const message = "Banda Cadastrada com Sucesso!"
            return message
      } catch (error:any) {
        throw new Error(error.message);
      }
    }
}