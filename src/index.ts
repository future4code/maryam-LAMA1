import {app} from "./controller/app";
import { BandController } from "./controller/BandController";
import { ShowController } from "./controller/ShowController";

const signUpBand = new BandController()
const signUpShow = new ShowController()

const getBandById = new BandController()


app.post("/band", signUpBand.signUpController) // endpoint para cadastrar banda
app.post("/show", signUpShow.signUpController) // endpoint para cadastrar show (precisa arrumar as validações)

app.get("/band/:id", getBandById.getBandById)// endpoint para buscar banda por ID 