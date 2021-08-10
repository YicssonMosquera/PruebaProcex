import { Request, Response, json, request } from 'express'
import LogsErroresCancer from '../dao/LogsErroresCancer';

class LogsErroresCancerControllers {
    public async LogsErroresFrm(req: Request, res: Response){
        const { CAMPO_6 } = req.params;
        const LogsErrores = new LogsErroresCancer();
        const erroresFrm = await LogsErrores.LogsErroresFrm(CAMPO_6);
        res.json(erroresFrm);
    }
}

export const logsErroresCancerControllers = new LogsErroresCancerControllers();
