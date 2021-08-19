import {Router} from 'express'
import {procesoErcControllers} from '../controller/ProcesoErcControllers';



class ProcesoErcFrmRoutes{
    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
        this.router.post('/validar',procesoErcControllers.guardarErcFrm)
         this.router.put('/validar/:CAMPO_6',procesoErcControllers.guardarErcUpdate)
    }
}    

const procesoErcFrmRoutes =  new ProcesoErcFrmRoutes()
export default procesoErcFrmRoutes.router