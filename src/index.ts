import {app} from "./controller/app";
import { BandController } from "./controller/BandController";
import { ShowController } from "./controller/ShowController";
import { UserController } from "./controller/UserController";

const signUpBand = new BandController()
const signUpShow = new ShowController()
const signUpUser = new UserController()


app.post("/user", signUpUser.signUpController) // endpoint para fazer cadastro
app.post("/user/login",signUpUser.login) // endpoint para fazer login


app.post("/band", signUpBand.signUpController) // endpoint para cadastrar banda
app.get("/band/:id", signUpBand.getBandById)// endpoint para buscar banda por ID 


app.post("/show", signUpShow.signUpController) // endpoint para cadastrar show (precisa arrumar as validações)
app.get("/show/:day", signUpShow.getShows) // endpont para pegar shows pelo dia (está quase funcionando)
