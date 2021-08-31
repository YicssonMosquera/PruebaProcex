import { Request, Response} from 'express'
import DbProcesoCancer from '../dao/DbProcesoCancer';
import LogicaDbProcesoCancerCargue from '../logica/LogicaDbProcesoCancerCargue';
import FileZipUtil from '../utils/FileZipUtil';

class CargueCancerControllers {
    public guardarCancer(req: Request, res: Response) {
        LogicaDbProcesoCancerCargue.guardar();
        res.json({ message: 'Datos guardado con exito' });
    }

    public guardarHemofiliaFile(req: Request, res: Response) {
        FileZipUtil.getFileTxt(req.file, req.body, function (txt, longitud, ruta, nombreZip, nombreTxt, body, perfil) {
            var isValid = LogicaDbProcesoCancerCargue.validarNombresFile(nombreZip, nombreTxt);

            if (isValid) {
                LogicaDbProcesoCancerCargue.cargarCancer(txt, longitud, ruta, nombreZip, body, perfil).then(function(idProcesoCancer){
                    res.json(idProcesoCancer);
                });
             
            } else {
                res.json({ error: 'el nombre del txt no cohincide con el nombre del zip' });
            }
        });
    }

    // public async consultarCargue(req: Request, res: Response) {
    //     const obHemofilia = new DbProcesoCancer()
    //     const { page, row, radicado, nombreArchvio, vigente, estado } = req.body
    //     const pagina = row * page
    //     const hemofilia = await obHemofilia.consultarCargue(pagina, row, radicado, nombreArchvio, vigente, estado);
    //     const data = await obHemofilia.getNumeroRegistro();
    //     const respuesta = { hemofilia: hemofilia, numero_registro: data[0].numero_registro };
    //     res.json(respuesta);
    // }

    public async consultarNombreArchivo(req: Request, res: Response) {
        const obCancer = new DbProcesoCancer()
        const nombreArchivo = await obCancer.getNombreArchivo();
        res.json(nombreArchivo);
    }

    
    // public async consultarUltimoArchivoCargado(req: Request, res: Response) {
    //     const {ID_PROCESO_HEMOFILIA} = req.params;
    //    var archvioCargado = await LogicaDBProcesohemofilia.consultarArchivoCargado(ID_PROCESO_HEMOFILIA)
    //     res.json(archvioCargado);
    // }

}

export const cargueCancerControllers = new CargueCancerControllers();