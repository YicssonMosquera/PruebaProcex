import { Request, Response, json, request } from 'express'
import CAC_Artritis from '../dao/CAC_Artritis'
class CAC_ArtritisControllers {

  public async guardarDatos(req: Request, res: Response) {
    console.log(req.body)
    var almacenar = await CAC_Artritis.guardarDatos(req.body)
    res.json(almacenar);
  }

  public async consultarDatos(req: Request, res: Response) {
    const { page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion } = req.body
    const oCACArtritis = new CAC_Artritis();
    const artritis = await oCACArtritis.consultarDatos(page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion)
    const data = await oCACArtritis.getNumeroRegistro();
    const respuesta = { artritis: artritis, numero_registro: data[0].numero_registro };
    res.json(respuesta);
  }
}
export const cac_ArtritisControllers = new CAC_ArtritisControllers();