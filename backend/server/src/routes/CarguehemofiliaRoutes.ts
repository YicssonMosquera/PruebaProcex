import {Router} from 'express';
import {carguehemofiliacontrollers} from '../controller/CarguehemofiliaControllers';
import multer2 from '../lib/multer2'

class CargahemofiliaRoutes{
    public   router:Router = Router()

    constructor(){
        this.config();
      }

      config():void{
       // this.router.post('/',multer2.single('hemofilia'),carguehemofiliacontrollers.GuardarSoporte) 
       this.router.post('/',carguehemofiliacontrollers.get)
    }
}


const cargahemofiliaRoutes =  new CargahemofiliaRoutes()
export default cargahemofiliaRoutes.router