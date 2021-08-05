import { Router } from 'express'
import { logsherrorescontrollers } from '../controller/LogsErroresControllers'

class LogsErroresRoutes {
    public router: Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/herrorestipob/:NUMERO_RADICACION',logsherrorescontrollers.cargarErroresTipoB)
        this.router.get('/herrorestipoa/:NUMERO_RADICACION',logsherrorescontrollers.cargarErroresTipoA)
        this.router.get('/erroresexcel/:NUMERO_RADICACION',logsherrorescontrollers.cargarErroresExcel)
        this.router.get('/erroresFrm/:CAMPO_6',logsherrorescontrollers.LogsErroresFrm)
    }
}

const logsErrores =  new LogsErroresRoutes()
export default logsErrores.router