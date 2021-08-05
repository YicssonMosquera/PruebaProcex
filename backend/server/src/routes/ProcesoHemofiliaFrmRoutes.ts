import {Router} from 'express'
import {procesoHemofiliaFrmControllers} from '../controller/ProcesoHemofiliaFrmControllers'
import {cac_HemofiliaControllers} from '../controller/CAC_HemofiliaControllers'



class ProcesoHemofiliaFrmRoutes{
    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
        this.router.post('/',procesoHemofiliaFrmControllers.guardarHemofiliaFrm)
        this.router.put('/update/:Campo_6',cac_HemofiliaControllers.Actualizarhemofilia)
        this.router.post('/guardar',cac_HemofiliaControllers.Guardarhemofilia)
        this.router.put('/validar/:Campo_6',procesoHemofiliaFrmControllers.guardarHemofiliaUpdate)
    }
}    

const procesoHemofiliaFrmRoutes =  new ProcesoHemofiliaFrmRoutes()
export default procesoHemofiliaFrmRoutes.router