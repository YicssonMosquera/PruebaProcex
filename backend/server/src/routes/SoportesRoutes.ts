import {Router} from 'express';
import {soportesControllers} from '../controller/SoportesControllers';
import multer from '../lib/multer'

class SoportesRoutes{
    public   router:Router = Router()

    constructor(){
        this.config();
      }
      
      config():void{
        this.router.post('/',multer.single('soporte'),soportesControllers.GuardarSoporte) 
        this.router.post('/soporte',soportesControllers.Cargarsoporteporusuario)
        this.router.get('/:Documento_hemofilia',soportesControllers.getNumeroRegistro)
    }

}

const soportesRoutes =  new SoportesRoutes()
export default soportesRoutes.router