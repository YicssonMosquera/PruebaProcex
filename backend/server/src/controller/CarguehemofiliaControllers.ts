import { Request, Response, json, request } from 'express'
import LogicaDBProcesohemofilia from '../logica/LogicaDbProcesoHemofilia';
import JSZip from 'jszip';


class Carguehemofiliacontrollers {
    public guardarHemofilia(req: Request, res: Response) {
        LogicaDBProcesohemofilia.guardar(req.body);
        res.json({ message: 'Datos guardado con exito' });
    }

    public guardarHemofiliaFile(req: Request, res: Response) {
        // console.log(req.body);
        // console.log("------------------------------------------------------");
        // console.log(req.file);
        // const jszip = new JSZip();
        // jszip.loadAsync(req.file).then((zip) => {
        //     Object.keys(zip.files).forEach((filename) => {
        //         zip.files[filename].async('string').then((fileData) => {
        //             this.leertxt(fileData)
        //         })
        //     })
        // });
        

    }
    // leertxt(prueba: any) {
    //     cargahemofilia = prueba;
    //     for (const line of prueba.split(/[\r\n]+/)) {
    //       var nombre = line.split(',')[0];
    //     }
    //   }
    

}

export const carguehemofiliacontrollers = new Carguehemofiliacontrollers();