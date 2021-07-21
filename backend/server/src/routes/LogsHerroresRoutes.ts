import { Router } from 'express'
import { logsherrorescontrollers } from '../controller/LogsHerroresControllers'

class LogsHerroresRoutes {
    public router: Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',logsherrorescontrollers.aaaa)
        this.router.get('/herrorestipob/:NUMERO_RADICACION',logsherrorescontrollers.cargarHerroresTipoB)
        this.router.get('/herrorestipoa/:NUMERO_RADICACION',logsherrorescontrollers.cargarHerroresTipoA)
    }
}

const logsherrores =  new LogsHerroresRoutes()
export default logsherrores.router