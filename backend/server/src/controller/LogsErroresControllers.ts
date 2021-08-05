import { Request, Response, json, request } from 'express'
import LogsHerrores from '../dao/LogsErrores';
import CrearExcel from '../logica/crearExcel';

class LogsHerroresControllers {

    public async cargarErroresTipoB(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipob = await Logsherrores.cargarErroresTipoB(NUMERO_RADICACION);
        res.json(HerroresTipob);
    }

    public async cargarErroresExcel(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipob = await Logsherrores.cargarErroresLogsExcel(NUMERO_RADICACION);
        CrearExcel.generateExcel(HerroresTipob, res);
        res.json(HerroresTipob);
    }


    public async cargarErroresTipoA(req: Request, res: Response) {
        const { NUMERO_RADICACION } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresTipoA = await Logsherrores.cargarErroresTipoA(NUMERO_RADICACION);
        res.json(HerroresTipoA);
    }

    public async LogsErroresFrm(req: Request, res: Response){
        const { CAMPO_6 } = req.params;
        const Logsherrores = new LogsHerrores();
        const HerroresFrm = await Logsherrores.LogsErroresFrm(CAMPO_6);
        res.json(HerroresFrm);
    }
}

export const logsherrorescontrollers = new LogsHerroresControllers();