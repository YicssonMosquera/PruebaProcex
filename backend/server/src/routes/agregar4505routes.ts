import {Router} from 'express'
import {agregar4505controllers} from '../controller/agregar4505Controllers'

class Agregar4505Routes{
    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
        this.router.post('/',agregar4505controllers.Guardar4505)
        this.router.post('/prueba',agregar4505controllers.prueba)
       this.router.get('/',agregar4505controllers.cargar4505)
       
    }
}

const agregar4505Routes =  new Agregar4505Routes()
export default agregar4505Routes.router