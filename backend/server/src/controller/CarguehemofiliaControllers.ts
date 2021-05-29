import { Request, Response, json, request } from 'express'
import LogicaDBProcesohemofilia from '../logica/LogicaDbProcesoHemofilia';
import FileZipUtil from '../utils/FileZipUtil';
var AdmZip = require('adm-zip');

class Carguehemofiliacontrollers {
    public guardarHemofilia(req: Request, res: Response) {
        LogicaDBProcesohemofilia.guardar();
        res.json({ message: 'Datos guardado con exito' });
    }

    public guardarHemofiliaFile(req: Request) {
        FileZipUtil.getFileTxt(req.file, req.body, function (txt, longitud , ruta, nombre, body, perfil ) {
            LogicaDBProcesohemofilia.cargarHemofilia(txt, longitud, ruta, nombre, body, perfil );
        });

    }


}

export const carguehemofiliacontrollers = new Carguehemofiliacontrollers();