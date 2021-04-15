import {Router} from 'express'
import {logincontrollers} from '../controller/login'

class LoginRoutes{

    public   router:Router = Router()

    constructor(){
      this.config();
    }

    config():void{
        this.router.post('/',logincontrollers.Login)

    }
    
}

const loginRoutes =  new LoginRoutes()
export default loginRoutes.router