import DBProcesohemofiliaerror from "../dao/BbProcesoHemofiliaError";
import BDProcesohemofiliaDetalle from "../dao/BdProcesoHemofiliaDetalle";
import DBProcesohemofilia from "../dao/DbProcesoHemofilia";
import { procesohemofilia } from "../models/procesohemofilia"
import ValidacionCamposPH from "./ValidacionCamposPH";
import { Hemofilia } from "../models/hemofiliadetalle"
import DBParametroAplicacion from "../dao/BdParametroAplicacion";
import DbEstructuraArchivoCampo from "../dao/DbEstructuraArchivoCampo";
import ValidacionContenidoPH from "./ValidacionContenidoPH";
class LogicaDBProcesohemofilia {

    public static Londitud
    public static Ruta
    public static Nombre
    public static User
    public static registrosProcesados;
    public static Campos = [];
    public static Perfil;
    public static radicado
    public static cont = 0;

    public static async cargarHemofilia(txt, longitud, ruta, nombre, body, perfil) {

        //////Actualiza el estado de los registros que son iguales al nombre del archivo y usuario
        var archivoVigente = await this.getArchivo(nombre, body);
        for (var index = 0; index < Object.keys(archivoVigente).length; index++) {
            var ID_PROCESO_HEMOFILIA = archivoVigente[index].ID_PROCESO_HEMOFILIA;
            DBProcesohemofilia.actualizarEstado('N', ID_PROCESO_HEMOFILIA);
        }
        var _this = this;
        this.Londitud = longitud;
        this.Ruta = ruta;
        this.Nombre = nombre;
        this.User = body;
        var araryCH = [];
        this.Perfil = perfil;
        var registros = txt.split(/[\r\n]+/).length;
        this.registrosProcesados = registros;
        this.Campos = [];
        _this.cont = 0;
        for (const line of txt.split(/[\r\n]+/)) {
            var nombre = line.split(',')[0];
            //LLena obj detalle para validar y guardar
            _this.cont = _this.cont + 1;
            var hemofiliaDetalle: Hemofilia = {
                CAMPO_1: line.split(',')[0],
                CAMPO_2: line.split(',')[1],
                CAMPO_3: line.split(',')[2],
                CAMPO_4: line.split(',')[3],
                CAMPO_5: line.split(',')[4],
                CAMPO_6: line.split(',')[5],
                CAMPO_7: line.split(',')[6],
                CAMPO_8: line.split(',')[7],
                CAMPO_9: line.split(',')[8],
                CAMPO_10: line.split(',')[9],
                CAMPO_11: line.split(',')[10],
                CAMPO_12: line.split(',')[11],
                CAMPO_13: line.split(',')[12],
                CAMPO_14: line.split(',')[13],
                CAMPO_15: line.split(',')[14],
                CAMPO_16: line.split(',')[15],
                CAMPO_17: line.split(',')[16],
                CAMPO_18: line.split(',')[17],
                CAMPO_19: line.split(',')[18],
                CAMPO_20: line.split(',')[19],
                CAMPO_21: line.split(',')[20],
                CAMPO_22: line.split(',')[21],
                CAMPO_23: line.split(',')[22],
                CAMPO_24: line.split(',')[23],
                CAMPO_25: line.split(',')[24],
                CAMPO_26: line.split(',')[25],
                CAMPO_27: line.split(',')[26],
                CAMPO_28: line.split(',')[27],
                CAMPO_29: line.split(',')[28],
                CAMPO_30: line.split(',')[29],
                CAMPO_31: line.split(',')[30],
                CAMPO_32: line.split(',')[31],
                CAMPO_32_1: line.split(',')[32],
                CAMPO_32_2: line.split(',')[33],
                CAMPO_32_3: line.split(',')[34],
                CAMPO_32_4: line.split(',')[35],
                CAMPO_33: line.split(',')[36],
                CAMPO_34: line.split(',')[37],
                CAMPO_35: line.split(',')[38],
                CAMPO_36: line.split(',')[39],
                CAMPO_37: line.split(',')[40],
                CAMPO_38: line.split(',')[41],
                CAMPO_39: line.split(',')[42],
                CAMPO_40: line.split(',')[43],
                CAMPO_40_1: line.split(',')[44],
                CAMPO_40_2: line.split(',')[45],
                CAMPO_41: line.split(',')[46],
                CAMPO_42: line.split(',')[47],
                CAMPO_43: line.split(',')[48],
                CAMPO_44: line.split(',')[49],
                CAMPO_45: line.split(',')[50],
                CAMPO_46: line.split(',')[51],
                CAMPO_47_1: line.split(',')[52],
                CAMPO_47_2: line.split(',')[53],
                CAMPO_47_3: line.split(',')[54],
                CAMPO_48: line.split(',')[55],
                CAMPO_48_1: line.split(',')[56],
                CAMPO_48_2: line.split(',')[57],
                CAMPO_48_3: line.split(',')[58],
                CAMPO_48_4: line.split(',')[59],
                CAMPO_49: line.split(',')[60],
                CAMPO_49_1: line.split(',')[61],
                CAMPO_50: line.split(',')[62],
                CAMPO_51: line.split(',')[63],
                CAMPO_52: line.split(',')[64],
                CAMPO_53: line.split(',')[65],
                CAMPO_54: line.split(',')[66],
                CAMPO_55: line.split(',')[67],
                CAMPO_55_1: line.split(',')[68],
                CAMPO_56: line.split(',')[69],
                CAMPO_56_1: line.split(',')[70],
                CAMPO_57: line.split(',')[71],
                CAMPO_57_1: line.split(',')[72],
                CAMPO_57_2: line.split(',')[73],
                CAMPO_57_3: line.split(',')[74],
                CAMPO_57_4: line.split(',')[75],
                CAMPO_57_5: line.split(',')[76],
                CAMPO_57_6: line.split(',')[77],
                CAMPO_57_7: line.split(',')[78],
                CAMPO_57_8: line.split(',')[79],
                CAMPO_57_9: line.split(',')[80],
                CAMPO_57_10: line.split(',')[81],
                CAMPO_57_11: line.split(',')[82],
                CAMPO_57_12: line.split(',')[83],
                CAMPO_57_13: line.split(',')[84],
                CAMPO_57_14: line.split(',')[85],
                CAMPO_58: line.split(',')[86],
                CAMPO_59: line.split(',')[87],
                CAMPO_60: line.split(',')[88],
                CAMPO_61: line.split(',')[89],
                CAMPO_62: line.split(',')[90],
                CAMPO_63: line.split(',')[91],
                CAMPO_64: line.split(',')[92],
                CAMPO_64_1: line.split(',')[93],
                CAMPO_64_2: line.split(',')[94],
                CAMPO_65: line.split(',')[95],
                CAMPO_66: line.split(',')[96],
            }
            araryCH.push(hemofiliaDetalle)
            this.Campos.push(hemofiliaDetalle);
        }
        for (let index = 0; index < araryCH.length; index++) {
            const element = araryCH[index];
            // this.Campos = element;

        }
        this.guardar();

    }

    public static guardar() {
        var _this = this;
        var campos = this.Campos;

        //Guardar proceso hemofilia encabezado
        var procesohemofilia: procesohemofilia = {
            USUARIO_CREACION: this.User,
            USUARIO_MODIFICACION: this.User,
            NOMBRE_ARCHIVO: this.Nombre,
            LONGITUD_ARCHIVO: this.Londitud,
            RUTA_ARCHIVO: this.Ruta,
            ESTADO_PROCESO: '1',
            VIGENTE: 'S',
            PROCESADO: 'N'
        }
        DBProcesohemofilia.guardar(procesohemofilia, function (result) {
            //Guardar Dbprocesohemofilia detalle
            _this.guardarProcesoHemofiliaDetalle(result.insertId, campos);
            _this.Radicado();
        });
    }


    public static Radicado() {
        var _this = this
        DBParametroAplicacion.buscarPorId(function (result) {
            var resultado = result[0]
            var radicado = parseInt(resultado.VALOR_PARAMETRO) + 1
            resultado.VALOR_PARAMETRO = radicado;
            _this.radicado = radicado;
            DBParametroAplicacion.actualizar(resultado, function (result) {
            })
        })
    }

    public static validarNombresFile(nameZip, nameTxt) {
        var isIqual = false;
        var nombreFileZip = nameZip.replace(/\.[^/.]+$/, "");
        var nombreFileTxt = nameTxt.replace(/\.[^/.]+$/, "");
        if (nombreFileZip == nombreFileTxt) {
            isIqual = true;
        }
        return isIqual;
    }

    public static async guardarProcesoHemofiliaDetalle(idCabeza, arrayCampos) {
        var _this = this;
        //buscar dbEstructuraArchivocampo
        var resultEstructuraCampo = await DbEstructuraArchivoCampo.buscarTodos();

        //validarCampos
        const oValidacionCamposPH = new ValidacionCamposPH();
        const oValidacionContenidoPH =  new ValidacionContenidoPH();
        oValidacionCamposPH.validar(arrayCampos, resultEstructuraCampo);
        oValidacionContenidoPH.Validar(arrayCampos, resultEstructuraCampo)
        this.guardarCamposBuenos(idCabeza, oValidacionCamposPH.filas_buenas);
        this.guardarCamposMalos(idCabeza, oValidacionCamposPH.filas_malas);
        this.guardarCamposMalosCd(idCabeza, oValidacionContenidoPH.filas_malas)


        //Acualizar cabeza
        DBProcesohemofilia.buscarPorId(idCabeza, function (result) {
            var resultx = result[0];

            //Llenar los campos faltantes para actualizar
            resultx.REGISTROS_PROCESADOS = _this.registrosProcesados
            resultx.NUMERO_ERRORES = oValidacionCamposPH.getTotalCamposMalos();
            resultx.NUMERO_CORRECCIONES = 0;
            resultx.NUMERO_RADICACION = _this.radicado;
            resultx.ERRORES_CA = 0;
            resultx.ERRORES_CE = oValidacionCamposPH.getTotalCamposMalos();
            resultx.ERRORES_CD = oValidacionContenidoPH.getTotalCamposMalos();
            resultx.REGISTROS_VALIDOS = oValidacionCamposPH.getFilasBuenas();
            resultx.REGISTROS_NO_VALIDOS = oValidacionCamposPH.getFilasMalas();
            resultx.TIPO_PROCESO = 1;
            resultx.TIPO_USUARIO = _this.Perfil;
            if (oValidacionCamposPH.getArchivoBueno() && oValidacionContenidoPH.getArchivoBueno()) {
                resultx.ESTADO_PROCESO = 2;
            } else {
                resultx.ESTADO_PROCESO = 4;

            }
            //Actualizar cabeza
            DBProcesohemofilia.actualizar(resultx, idCabeza, function (result) {
            });
        });

    }

    public static guardarCamposBuenos(idCabeza, oFilas) {
        //Guardar los detalles, campos buenos
        for (const key in oFilas) {
            var oCamposfila = oFilas[key];
            oCamposfila.ID_PROCESO_HEMOFILIA = idCabeza;
            BDProcesohemofiliaDetalle.guardar(oCamposfila);
        }
    }

    public static guardarCamposMalos(idCabeza, oFilas) {
        //Guardar detalles campos malos
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_PROCESO_HEMOFILIA = idCabeza;
                campoMalo.USUARIO_CREACION = this.User;
                campoMalo.USUARIO_MODIFICACION = this.User;
                DBProcesohemofiliaerror.guardar(campoMalo);
            }
        }
    }

    public static guardarCamposMalosCd(idCabeza, oFilas) {
        console.log(oFilas)
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            console.log(arrayFilasMalas)
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_PROCESO_HEMOFILIA = idCabeza;
                campoMalo.USUARIO_CREACION = this.User;
                campoMalo.USUARIO_MODIFICACION = this.User;
                DBProcesohemofiliaerror.guardar(campoMalo);
            }
        }
    }
    public static async getArchivo(nombreZip, body) {
        const obHemofilia = new DBProcesohemofilia();
        var archivoExistente = await obHemofilia.getVigente(nombreZip, body);
        return archivoExistente;
    }
}


export default LogicaDBProcesohemofilia;