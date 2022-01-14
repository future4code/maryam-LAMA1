import {app} from "./controller/app";
import { BandController } from "./controller/BandController";
import { ShowController } from "./controller/ShowController";

const signUpBand = new BandController()
const signUpShow = new ShowController()


app.post("/band", signUpBand.signUpController) // endpoint para cadastrar banda
app.post("/show", signUpShow.signUpController) // endpoint para cadastrar show (precisa arrumar as validações)