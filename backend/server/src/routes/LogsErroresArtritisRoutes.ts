import { Router } from 'express'
import { logsErroresArtritisControllers } from '../controller/LogsErroresArtritisControllers'

class LogsErroresArtritisRoutes {
    public router: Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/erroresFrm/:CAMPO_9',logsErroresArtritisControllers.LogsErroresFrm)
    }
}

const logsErroresArtritisRoutes =  new LogsErroresArtritisRoutes()
export default logsErroresArtritisRoutes.router