import { Request, Response, json, request } from 'express'
import DBProcesohemofilia from '../dao/DbProcesoHemofilia';
import LogicaDBProcesohemofilia from '../logica/LogicaDbProcesoHemofilia';
import FileZipUtil from '../utils/FileZipUtil';
var AdmZip = require('adm-zip');

class Carguehemofiliacontrollers {
    public guardarHemofilia(req: Request, res: Response) {
        LogicaDBProcesohemofilia.guardar();
        res.json({ message: 'Datos guardado con exito' });
    }

    public guardarHemofiliaFile(req: Request) {
        FileZipUtil.getFileTxt(req.file, req.body, function (txt, longitud, ruta, nombre, body, perfil) {
            LogicaDBProcesohemofilia.cargarHemofilia(txt, longitud, ruta, nombre, body, perfil);
        });

    }

    public async consultarCargue(req: Request, res: Response) {
        const obHemofilia = new DBProcesohemofilia()
        
        const { page, row } = req.body
        const pagina = row * page
        const hemofilia = await obHemofilia.consultarCargue(pagina, row);
        const data =  await obHemofilia.getNumeroRegistro();
        const respuesta = {hemofilia:hemofilia,numero_registro:data[0].numero_registro};
        res.json(respuesta);
    }


}

export const carguehemofiliacontrollers = new Carguehemofiliacontrollers();