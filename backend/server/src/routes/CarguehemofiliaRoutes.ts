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
       //this.router.post('/',carguehemofiliacontrollers.guardarcargahemofilia)
       this.router.post('/guardar',multer2.single('hemofilia'),carguehemofiliacontrollers.guardarHemofilia);
       this.router.post('/guardarHMFile',multer2.single('file'),carguehemofiliacontrollers.guardarHemofiliaFile)
    }
}


const cargahemofiliaRoutes =  new CargahemofiliaRoutes()
export default cargahemofiliaRoutes.router