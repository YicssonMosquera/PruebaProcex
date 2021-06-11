import { Request, Response, json, request } from 'express'
import DBProcesohemofilia from '../dao/DbProcesoHemofilia';
import LogicaDBProcesohemofilia from '../logica/LogicaDbProcesoHemofilia';
import FileZipUtil from '../utils/FileZipUtil';

class Carguehemofiliacontrollers {
    public guardarHemofilia(req: Request, res: Response) {
        LogicaDBProcesohemofilia.guardar();
        res.json({ message: 'Datos guardado con exito' });
    }

    public guardarHemofiliaFile(req: Request,res: Response) {
        FileZipUtil.getFileTxt(req.file, req.body, function (txt, longitud, ruta, nombre, body, perfil) {
            LogicaDBProcesohemofilia.cargarHemofilia(txt, longitud, ruta, nombre, body, perfil);
            var cont = LogicaDBProcesohemofilia.cont;
            res.json(cont);
        });

    }

    public async consultarCargue(req: Request, res: Response) {
        const obHemofilia = new DBProcesohemofilia()
        const { page, row,radicado,nombreArchvio,vigente,estado} = req.body
        const pagina = row * page
        const hemofilia = await obHemofilia.consultarCargue(pagina, row, radicado,nombreArchvio,vigente,estado);
        const data =  await obHemofilia.getNumeroRegistro();
        const respuesta = {hemofilia:hemofilia,numero_registro:data[0].numero_registro};
        res.json(respuesta);
    }

    public async consultarNombreArchivo(req: Request, res: Response){
        const obHemofilia = new DBProcesohemofilia()
        const nombreArchivo = await obHemofilia.getNombreArchivo();
        res.json(nombreArchivo);
    }
}

export const carguehemofiliacontrollers = new Carguehemofiliacontrollers();