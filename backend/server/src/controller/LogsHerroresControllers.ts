import { Request, Response, json, request } from 'express'
import LogsHerrores from '../dao/LogsHerrores';

class LogsHerroresControllers {

    public async cargarHerroresTipoB(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipob = await Logsherrores.cargarHerroresTipoB(NUMERO_RADICACION);
        res.json(HerroresTipob);
    }

    public async cargarHerroresTipoA(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipoA = await Logsherrores.cargarHerroresTipoA(NUMERO_RADICACION);
        res.json(HerroresTipoA);
    }

    public async aaaa(req: Request, res: Response) {
       
        res.json('hola');
    }



}

export const logsherrorescontrollers = new LogsHerroresControllers();