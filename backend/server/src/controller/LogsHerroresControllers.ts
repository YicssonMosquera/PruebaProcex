import { Request, Response, json, request } from 'express'
import LogsHerrores from '../dao/LogsHerrores';
import CrearExcel from '../logica/crearExcel';

class LogsHerroresControllers {

    public async cargarHerroresTipoB(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipob = await Logsherrores.cargarHerroresTipoB(NUMERO_RADICACION);
        res.json(HerroresTipob);
    }

    public async cargarHerroresExcel(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipob = await Logsherrores.cargarHerroresLogsExcel(NUMERO_RADICACION);
        CrearExcel.generateExcel(HerroresTipob, res);
        res.json(HerroresTipob);
    }


    public async cargarHerroresTipoA(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipoA = await Logsherrores.cargarHerroresTipoA(NUMERO_RADICACION);
        res.json(HerroresTipoA);
    }

}

export const logsherrorescontrollers = new LogsHerroresControllers();