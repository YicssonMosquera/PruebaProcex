import {Router} from 'express'
import {procesoArtritisFrmControllers} from '../controller/ProcesoArtritisFrmControllers';



class ProcesoArtritisFrmRoutes{
    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
        this.router.post('/validar',procesoArtritisFrmControllers.guardarArtritisFrm)
         this.router.put('/validar/:CAMPO_9',procesoArtritisFrmControllers.guardarArtritisUpdate)
    }
}    

const procesoArtritisFrmRoutes =  new ProcesoArtritisFrmRoutes()
export default procesoArtritisFrmRoutes.router