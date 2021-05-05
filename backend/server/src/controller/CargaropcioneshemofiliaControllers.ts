import { Request, Response, json, request } from 'express'
import pool from '../database'



class CargarOpcioneshemofiliaController{

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
            const Clientes = await pool.query("select BD_ips.CODIGO_IPS, BD_ips.NOMBRE_IPS from BD_ips" , function (err, result, fields) {
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
            const Clientes = await pool.query("select BD_cups.CODIGO_CUP, BD_cups.DESCRIPCION from BD_cups " , function (err, result, fields) {
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
            const Clientes = await pool.query("select BD_ocupacion.CODIGO_Ocupacion, BD_ocupacion.DESCRIPCION from BD_ocupacion" , function (err, result, fields) {
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
        const {Tipodocumento,numerodocumeto,VALIDACION_SOPORTE,VALIDACION_REGISTRO } = req.body
        try {
            const Clientes = await pool.query("select * from cuenta_hemofilia where cuenta_hemofilia.CAMPO_5 = ? or cuenta_hemofilia.CAMPO_6 = ? or cuenta_hemofilia.VALIDACION_SOPORTE = ? or cuenta_hemofilia.VALIDACION_REGISTRO = ? " ,[Tipodocumento,numerodocumeto,VALIDACION_SOPORTE,VALIDACION_REGISTRO] , function (err, result, fields) {
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
        try {
            var query = "SELECT ID_CUENTA_HEMOFILIA, CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8, CAMPO_9, CAMPO_10, CAMPO_11, CAMPO_12, CAMPO_13, CAMPO_14, CAMPO_15, CAMPO_16, CAMPO_17, CAMPO_18, CAMPO_19, CAMPO_20, CAMPO_21, CAMPO_22, CAMPO_23, CAMPO_24, CAMPO_25, CAMPO_26, CAMPO_27, CAMPO_28, CAMPO_29, CAMPO_30, CAMPO_31, CAMPO_32, CAMPO_32_1, CAMPO_32_2, CAMPO_32_3, CAMPO_32_4, CAMPO_33, CAMPO_34, CAMPO_35, "
            query += "CAMPO_35, CAMPO_36, CAMPO_37, CAMPO_38, CAMPO_39, CAMPO_40, CAMPO_40_1, CAMPO_40_2, CAMPO_41, CAMPO_42, CAMPO_43, CAMPO_44, CAMPO_45, CAMPO_46, CAMPO_47_1, CAMPO_47_2, CAMPO_47_3, CAMPO_48, CAMPO_48_1, CAMPO_48_2, CAMPO_48_3, CAMPO_48_4, CAMPO_49, CAMPO_49_1, CAMPO_50, "
            query += "CAMPO_51, CAMPO_52, CAMPO_53, CAMPO_54, CAMPO_55, CAMPO_55_1, CAMPO_56, CAMPO_56_1, CAMPO_57, CAMPO_57_1, CAMPO_57_2, CAMPO_57_3, CAMPO_57_4, CAMPO_57_5, CAMPO_57_6, CAMPO_57_7, CAMPO_57_8, CAMPO_57_9, CAMPO_57_10, CAMPO_57_11, CAMPO_57_12, CAMPO_57_13, CAMPO_57_14, CAMPO_58, CAMPO_59, CAMPO_60, CAMPO_61, CAMPO_62, CAMPO_63, CAMPO_64, CAMPO_64_1, CAMPO_64_2, CAMPO_65, CAMPO_66, EDAD_CORTE, EDAD_ACTUAL, DOSIS_PROFILAXIS, "
            query += "case when VALIDACION_REGISTRO='N' then 'Sin validar' when VALIDACION_REGISTRO='S' then 'Registro validado' end as VALIDACION_REGISTRO, "
            query += "case when VALIDACION_SOPORTE='1' then 'Sin soportes' when VALIDACION_SOPORTE='2' then 'Soportes incompletos'  when VALIDACION_SOPORTE='3' then 'Soportes completos'  end as VALIDACION_SOPORTE "
            query += "from cuenta_hemofilia";
            const Clientes = await pool.query(query, function (err, result, fields) {
                if (err) throw err;
                res.json(result);
                console.log(result)
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron Datos' });
        };
    }



    public async Guardarhemofilia(req: Request, res: Response) {
        try {
            await pool.query('insert into Cuenta_hemofilia set ?', [req.body])
            console.log(req.body)
            res.json({ message: 'Datos guardado con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };


    }
}
export const  cargarOpcioneshemofiliaController = new CargarOpcioneshemofiliaController();