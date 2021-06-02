import {Router} from 'express';
import {carguehemofiliacontrollers} from '../controller/CarguehemofiliaControllers';
import multer2 from '../lib/multer2'

class CargahemofiliaRoutes{
    public   router:Router = Router()

    constructor(){
        this.config();
      }

      config():void{
       this.router.post('/guardarHMFile',multer2.single('file'),carguehemofiliacontrollers.guardarHemofiliaFile)
       this.router.post('/',carguehemofiliacontrollers.consultarCargue);
    }
}


const cargahemofiliaRoutes =  new CargahemofiliaRoutes()
export default cargahemofiliaRoutes.router