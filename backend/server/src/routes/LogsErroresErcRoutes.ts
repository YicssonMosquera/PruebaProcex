import { Router } from 'express'
import { logsErroresErcControllers } from '../controller/LogsErroresErcControllers'

class LogsErroresErcRoutes {
    public router: Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/erroresFrm/:CAMPO_6',logsErroresErcControllers.LogsErroresFrm)
    }
}

const logsErroresErcRoutes =  new LogsErroresErcRoutes()
export default logsErroresErcRoutes.router