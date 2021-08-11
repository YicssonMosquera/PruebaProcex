import { Request, Response, json, request } from 'express'
import pool from '../database'



class CargarOpcioneshemofiliaController {

    public async CargarTipodocumento5(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo5'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarSexo8(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo8'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async RegimenAfiliacion10(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo10'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async CargarcodigoPertenenciaetnica12(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo12'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async Cargargrupopoblacional13(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo13'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarEstadogestionfechacorte17(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo17'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async CargarUsarioProgramaconsegeria18(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo18'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async Cargarmotivopruebadiagnostico20(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo20'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CarTipofrecuenciaDiagnostico23(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo23'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarClasificacionSeveridadNF24(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo24'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarAFAsociadohemofilia26(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo26'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarFactorrecibido27(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo27'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarEsquema28(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo28'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarFacorRecibidoTA30(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo30'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarEsquemaTA31(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo31'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarFrecuenciaSemana322(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo322'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarModalidadapltratamiento33(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo33'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarviaAdministración34(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo34'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarProfesionallieratenciondelpaciente57(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo57'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async Cargarhermatosis40(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo40'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarPresenciainhibidorfechacorte48(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo48'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarPacienteITI482(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo482'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarRecibioITI483(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo483'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarArtropiahermofilicacronica49(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo49'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarInfectadoporVHC50(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo50'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarInfectadoporVHB51(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo51'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarInfectadoporVIH52(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo52'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarPseudotumores53(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo53'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarFracturas54(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo54'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarAnafilaxis55(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo55'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarNovedad64(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo64'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async Cargarcausademuerte641(req: Request, res: Response) {
        try {
            const Tipodocumento = await pool.query("select * from BD_opciones_listas where CODIGO_LISTA = 'hemofilia.campo641'", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarMunicipioresidencia14(req: Request, res: Response) {
        try {
            const Clientes = await pool.query("select BD_ciudad.CODIGO_CIUDAD, BD_ciudad.NOMBRE_CIUDAD from BD_ciudad ", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async Codigovalidohabilitacionips22(req: Request, res: Response) {
        try {
            const Clientes = await pool.query("select BD_ips.CODIGO_IPS, BD_ips.NOMBRE_IPS from BD_ips", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async CodigoCUM35363738(req: Request, res: Response) {
        try {
            const Clientes = await pool.query("select BD_cups.CODIGO_CUP, BD_cups.DESCRIPCION from BD_cups ", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarOcupacion9(req: Request, res: Response) {
        try {
            const Clientes = await pool.query("select BD_ocupacion.CODIGO_Ocupacion, BD_ocupacion.DESCRIPCION from BD_ocupacion", function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }

    public async CargarRegistrohermofilia(req: Request, res: Response) {
        const { Tipodocumento, numerodocumeto, VALIDACION_SOPORTE, VALIDACION_REGISTRO } = req.body
        try {
            const Clientes = await pool.query("select * from cuenta_hemofilia where cuenta_hemofilia.CAMPO_5 = ? or cuenta_hemofilia.CAMPO_6 = ? or cuenta_hemofilia.VALIDACION_SOPORTE = ? or cuenta_hemofilia.VALIDACION_REGISTRO = ? ", [Tipodocumento, numerodocumeto, VALIDACION_SOPORTE, VALIDACION_REGISTRO], function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
    public async CargarRegistrohermofilia2(req: Request, res: Response) {
        const { Tipodocumento, numerodocumeto, VALIDACION_SOPORTE, VALIDACION_REGISTRO, page, row } = req.body
        const pagina = row * page
        try {
            var query = "SELECT ID_CUENTA_HEMOFILIA, CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8, "
            query += "case when VALIDACION_REGISTRO='N' then 'Sin validar' when VALIDACION_REGISTRO='S' then 'Registro validado' end as VALIDACION_REGISTRO, "
            query += "case when VALIDACION_SOPORTE='1' then 'Sin soportes' when VALIDACION_SOPORTE='2' then 'Soportes incompletos'  when VALIDACION_SOPORTE='3' then 'Soportes completos'  end as VALIDACION_SOPORTE "
            query += "from Cuenta_hemofilia";
            query += " where CAMPO_5 LIKE '%" + Tipodocumento + "%' and CAMPO_6 LIKE '%" + numerodocumeto + "%'  and VALIDACION_REGISTRO LIKE '%" + VALIDACION_REGISTRO + "%'  and VALIDACION_SOPORTE LIKE '%" + VALIDACION_SOPORTE + "%' limit ?,? ";
            const Clientes = await pool.query(query, [pagina, row], function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }


    public async getNumeroRegistro(req: Request, res: Response) {
        try {
            const Clientes = await pool.query("select count(0) as numero_registro from Cuenta_hemofilia", function (err, result, fields) {
                if (err) throw err;
                res.json(result[0].numero_registro);
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }


    public async CargarRegistrohermofilia3(req: Request, res: Response) {
        const { Campo_6 } = req.params
        try {
            const Clientes = await pool.query("select * from Cuenta_hemofilia where Cuenta_hemofilia.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }
}
export const cargarOpcioneshemofiliaController = new CargarOpcioneshemofiliaController();