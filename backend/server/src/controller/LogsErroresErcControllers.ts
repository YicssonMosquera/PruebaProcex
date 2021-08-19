import { Request, Response} from 'express'
import LogsErroresErc from '../dao/LogsErroresErc';

class LogsErroresErcControllers {
    public async LogsErroresFrm(req: Request, res: Response){
        const { CAMPO_6 } = req.params;
        const LogsErrores = new LogsErroresErc();
        const erroresFrm = await LogsErrores.LogsErroresFrm(CAMPO_6);
        res.json(erroresFrm);
    }
}

export const logsErroresErcControllers = new LogsErroresErcControllers();
