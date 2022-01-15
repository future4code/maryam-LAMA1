import { BandsData } from "../data/BandsData";
import { Band, BandInput } from "../model/band";
import { USER_ROLE } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/IdGenerator"

export class BandBusiness{


    signUpBusiness = async (band:BandInput, token:string): Promise<string> => {
      try {

        const tokenData = new Authenticator().getData(token)
        if(tokenData.role !== USER_ROLE.ADMIN){
              throw new Error("Usuário não permitido!")
        }
        if (
            !band.name ||
            !band.music_genre ||
            !band.responsible
            ){
                throw new Error("Prencha os campos corretamente!")
            }
            const isBandExists:Band = await new BandsData().selectBandByName(band.name)

            if(isBandExists) {
              throw new Error("Nome de banda já cadastrado!")
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

    getBandById = async(id:string):Promise<Band> => {
      try {
        if(
          !id 
        ){
          throw new Error("Prencha o ID da Banda")
        }
        const getBand:Band = await new BandsData().selectBandById(id)
        return getBand
        
      } catch (error:any) {
        throw new Error(error.message);
      }
    }
}