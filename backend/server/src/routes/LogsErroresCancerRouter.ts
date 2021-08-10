import { Router } from 'express'
import { logsErroresCancerControllers } from '../controller/LogsErroresCancerControllers'

class LogsErroresCancerRouter {
    public router: Router = Router()

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/erroresFrm/:CAMPO_6',logsErroresCancerControllers.LogsErroresFrm)
    }
}

const logsErroresCancerRouter =  new LogsErroresCancerRouter()
export default logsErroresCancerRouter.router