import { Request, Response, json, request } from 'express'
import LogsErroresArtritis from '../dao/LogsErroresArtritis';

class LogsErroresArtritisControllers {
    public async LogsErroresFrm(req: Request, res: Response){
        const { CAMPO_9 } = req.params;
        const LogsErrores = new LogsErroresArtritis();
        const erroresFrm = await LogsErrores.LogsErroresFrm(CAMPO_9);
        res.json(erroresFrm);
    }
}

export const logsErroresArtritisControllers = new LogsErroresArtritisControllers();
