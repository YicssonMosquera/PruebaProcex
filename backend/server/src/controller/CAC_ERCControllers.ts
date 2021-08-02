import { Request, Response, json } from 'express'
import CAC_ERC from '../dao/CAC_ERC'
class CAC_ERCControllers {

  public async guardarDatos(req: Request, res: Response) {
    console.log(req.body)
    var almacenar = await CAC_ERC.guardarDatos(req.body)
    res.json(almacenar);
  }

  public async consultarDatos(req: Request, res: Response) {
    const { page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo } = req.body
    const oCACErc = new CAC_ERC();
    const erc = await oCACErc.consultarDatos(page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo)
    const data = await oCACErc.getNumeroRegistro();
    const respuesta = { ERC: erc, numero_registro: data[0].numero_registro };
    res.json(respuesta);
  }

  public async cargarPaciente(req: Request, res: Response) {
    const { C8_CAMPO_9 } = req.params;
    const oCACErc = new CAC_ERC();
    const erc = await oCACErc.getOne(C8_CAMPO_9);
    res.json(erc)
  }

  public async actualizarDatos(req: Request, res: Response) {
    const { C8_CAMPO_9 } = req.params;
    const oCACErc = new CAC_ERC();
    const erc = await oCACErc.actualizarDatos(req.body,C8_CAMPO_9);
    res.json(erc)
  }
}
export const cac_ERCControllers = new CAC_ERCControllers();