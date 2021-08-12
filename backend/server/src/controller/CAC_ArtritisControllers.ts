import { Request, Response, json } from 'express'
import CAC_Artritis from '../dao/CAC_Artritis'
class CAC_ArtritisControllers {

  public async guardarDatos(req: Request, res: Response) {
    console.log(req.body)
    var almacenar = await CAC_Artritis.guardarDatos(req.body)
    res.json(almacenar);
  }

  public async consultarDatos(req: Request, res: Response) {
    const { page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion } = req.body
    const pagina = row * page
    const oCACArtritis = new CAC_Artritis();
    const artritis = await oCACArtritis.consultarDatos(pagina, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion)
    const data = await oCACArtritis.getNumeroRegistro();
    const respuesta = { artritis: artritis, numero_registro: data[0].numero_registro };
    res.json(respuesta);
  }

  public async cargarPaciente(req: Request, res: Response) {
    const {CAMPO_9 } = req.params;
    const oCACArtritis = new CAC_Artritis();
    const artritis = await oCACArtritis.getOne(CAMPO_9);
    res.json(artritis)
  }

  public async actualizarDatos(req: Request, res: Response) {
    const { CAMPO_9 } = req.params;
    const oCACArtritis = new CAC_Artritis();
    const artritis = await oCACArtritis.actualizarDatos(req.body,CAMPO_9);
    res.json(artritis)
  }
}
export const cac_ArtritisControllers = new CAC_ArtritisControllers();