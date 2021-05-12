import { Request, Response, json, request } from 'express'
import pool from '../database'

class Carguehemofiliacontrollers{

    public async  GuardarSoporte(req: Request, res: Response){
        res.json({ message: 'Datos guardado con exito' });
    }


}


export const  carguehemofiliacontrollers = new Carguehemofiliacontrollers();