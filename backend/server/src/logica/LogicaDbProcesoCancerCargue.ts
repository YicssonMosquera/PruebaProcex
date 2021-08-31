import { Cancer } from "../models/cancerDetalle"
import { ProcesoCancer } from "../models/procesocancer"
import DbProcesoCancer from "../dao/DbProcesoCancer";
import DBParametroAplicacion from "../dao/BdParametroAplicacion";
import BdEstructuraArchivoCampoCancer from "../dao/BdEstructuraArchivoCampoCancer";
import ValidacionCamposCancer from "./ValidacionCamposCancer";
import BdProcesoCancerDetalle from "../dao/BdProcesoCancerDetalle";
import BdProcesoCancerError from "../dao/BdProcesoCancerError";

class LogicaDbProcesoCancerCargue {
    public static Londitud
    public static Ruta
    public static Nombre
    public static User
    public static registrosProcesados;
    public static Campos = [];
    public static Perfil;
    public static radicado
    public static cont = 0;

    public static async cargarCancer(txt, longitud, ruta, nombre, body, perfil) {
        //aqyu cambiar el estado de la vigencia 
   //////Actualiza el estado de los registros que son iguales al nombre del archivo y usuario
   var archivoVigente = await this.getArchivo(nombre, body);
   for (var index = 0; index < Object.keys(archivoVigente).length; index++) {
       var ID_PROCESO_CANCER = archivoVigente[index].ID_PROCESO_CANCER;
       DbProcesoCancer.actualizarEstado('N', ID_PROCESO_CANCER);
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
            var cancerDetalle: Cancer = {
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
                CAMPO_33: line.split(',')[32],
                CAMPO_34: line.split(',')[33],
                CAMPO_35: line.split(',')[34],
                CAMPO_36: line.split(',')[35],
                CAMPO_37: line.split(',')[36],
                CAMPO_38: line.split(',')[37],
                CAMPO_39: line.split(',')[38],
                CAMPO_40: line.split(',')[39],
                CAMPO_41: line.split(',')[40],
                CAMPO_42: line.split(',')[41],
                CAMPO_43: line.split(',')[42],
                CAMPO_44: line.split(',')[43],
                CAMPO_45: line.split(',')[44],
                CAMPO_46: line.split(',')[45],
                CAMPO_46_1: line.split(',')[46],
                CAMPO_46_2: line.split(',')[47],
                CAMPO_46_3: line.split(',')[48],
                CAMPO_46_4: line.split(',')[49],
                CAMPO_46_5: line.split(',')[50],
                CAMPO_46_6: line.split(',')[51],
                CAMPO_46_7: line.split(',')[52],
                CAMPO_46_8: line.split(',')[53],
                CAMPO_47: line.split(',')[54],
                CAMPO_48: line.split(',')[55],
                CAMPO_49: line.split(',')[56],
                CAMPO_50: line.split(',')[57],
                CAMPO_51: line.split(',')[58],
                CAMPO_52: line.split(',')[59],
                CAMPO_53: line.split(',')[60],
                CAMPO_53_1: line.split(',')[61],
                CAMPO_53_2: line.split(',')[62],
                CAMPO_53_3: line.split(',')[63],
                CAMPO_53_4: line.split(',')[64],
                CAMPO_53_5: line.split(',')[65],
                CAMPO_53_6: line.split(',')[66],
                CAMPO_53_7: line.split(',')[67],
                CAMPO_53_8: line.split(',')[68],
                CAMPO_53_9: line.split(',')[69],
                CAMPO_54: line.split(',')[70],
                CAMPO_55: line.split(',')[71],
                CAMPO_56: line.split(',')[72],
                CAMPO_57: line.split(',')[73],
                CAMPO_58: line.split(',')[74],
                CAMPO_59: line.split(',')[75],
                CAMPO_60: line.split(',')[76],
                CAMPO_61: line.split(',')[77],
                CAMPO_62: line.split(',')[78],
                CAMPO_63: line.split(',')[79],
                CAMPO_64: line.split(',')[80],
                CAMPO_65: line.split(',')[81],
                CAMPO_66: line.split(',')[82],
                CAMPO_66_1: line.split(',')[83],
                CAMPO_66_2: line.split(',')[84],
                CAMPO_66_3: line.split(',')[85],
                CAMPO_66_4: line.split(',')[86],
                CAMPO_66_5: line.split(',')[87],
                CAMPO_66_6: line.split(',')[88],
                CAMPO_66_7: line.split(',')[89],
                CAMPO_66_8: line.split(',')[90],
                CAMPO_66_9: line.split(',')[91],
                CAMPO_67: line.split(',')[92],
                CAMPO_68: line.split(',')[93],
                CAMPO_69: line.split(',')[94],
                CAMPO_70: line.split(',')[95],
                CAMPO_71: line.split(',')[96],
                CAMPO_72: line.split(',')[97],
                CAMPO_73: line.split(',')[98],
                CAMPO_74: line.split(',')[99],
                CAMPO_75: line.split(',')[100],
                CAMPO_76: line.split(',')[101],
                CAMPO_77: line.split(',')[102],
                CAMPO_78: line.split(',')[103],
                CAMPO_79: line.split(',')[104],
                CAMPO_80: line.split(',')[105],
                CAMPO_81: line.split(',')[106],
                CAMPO_82: line.split(',')[107],
                CAMPO_83: line.split(',')[108],
                CAMPO_84: line.split(',')[109],
                CAMPO_85: line.split(',')[110],
                CAMPO_86: line.split(',')[111],
                CAMPO_87: line.split(',')[112],
                CAMPO_88: line.split(',')[113],
                CAMPO_89: line.split(',')[114],
                CAMPO_90: line.split(',')[115],
                CAMPO_91: line.split(',')[116],
                CAMPO_92: line.split(',')[117],
                CAMPO_93: line.split(',')[118],
                CAMPO_94: line.split(',')[119],
                CAMPO_95: line.split(',')[120],
                CAMPO_96: line.split(',')[121],
                CAMPO_97: line.split(',')[122],
                CAMPO_98: line.split(',')[123],
                CAMPO_99: line.split(',')[124],
                CAMPO_100: line.split(',')[125],
                CAMPO_101: line.split(',')[126],
                CAMPO_102: line.split(',')[127],
                CAMPO_103: line.split(',')[128],
                CAMPO_104: line.split(',')[129],
                CAMPO_105: line.split(',')[130],
                CAMPO_106: line.split(',')[131],
                CAMPO_107: line.split(',')[132],
                CAMPO_108: line.split(',')[133],
                CAMPO_109: line.split(',')[134],
                CAMPO_110: line.split(',')[135],
                CAMPO_111: line.split(',')[136],
                CAMPO_112: line.split(',')[137],
                CAMPO_113: line.split(',')[138],
                CAMPO_114: line.split(',')[139],
                CAMPO_114_1: line.split(',')[140],
                CAMPO_114_2: line.split(',')[141],
                CAMPO_114_3: line.split(',')[142],
                CAMPO_114_4: line.split(',')[143],
                CAMPO_114_5: line.split(',')[144],
                CAMPO_114_6: line.split(',')[145],
                CAMPO_115: line.split(',')[146],
                CAMPO_116: line.split(',')[147],
                CAMPO_117: line.split(',')[148],
                CAMPO_118: line.split(',')[149],
                CAMPO_119: line.split(',')[150],
                CAMPO_120: line.split(',')[151],
                CAMPO_121: line.split(',')[152],
                CAMPO_122: line.split(',')[153],
                CAMPO_123: line.split(',')[154],
                CAMPO_124: line.split(',')[155],
                CAMPO_125: line.split(',')[156],
                CAMPO_126: line.split(',')[157],
                CAMPO_127: line.split(',')[158],
                CAMPO_128: line.split(',')[159],
                CAMPO_129: line.split(',')[160],
                CAMPO_130: line.split(',')[161],
                CAMPO_131: line.split(',')[162],
                CAMPO_132: line.split(',')[163],
                CAMPO_133: line.split(',')[164],
                CAMPO_134: line.split(',')[165],
            }
            araryCH.push(cancerDetalle)
            this.Campos.push(cancerDetalle);
        }
        for (let index = 0; index < araryCH.length; index++) {
            const element = araryCH[index];
            // this.Campos = element;

        }
        var idProcesoCancer = await this.guardar();
        return idProcesoCancer;
    }

    public static async guardar() {

        var _this = this;
        var campos = this.Campos;
        var idProcesoHemofilia = null;
        //Guardar proceso hemofilia encabezado
        var procesohemofilia: ProcesoCancer = {
            USUARIO_CREACION: this.User,
            USUARIO_MODIFICACION: this.User,
            NOMBRE_ARCHIVO: this.Nombre,
            LONGITUD_ARCHIVO: this.Londitud,
            RUTA_ARCHIVO: this.Ruta,
            ESTADO_PROCESO: '1',
            VIGENTE: 'S',
            PROCESADO: 'N'
        }
        return new Promise(function (resolev, reject) {
            DbProcesoCancer.guardar(procesohemofilia, function (result) {
                idProcesoHemofilia = result.insertId;
                //Guardar Dbprocesohemofilia detalle
                // _this.guardarProcesoHemofiliaDetalle(idProcesoHemofilia, campos);
                // _this.Radicado();
                resolev(idProcesoHemofilia);
            });
        });
    }

    public static Radicado() {
        var _this = this
        DBParametroAplicacion.buscarCancerPorId(function (result) {
            var resultado = result[0]
            var radicado = parseInt(resultado.VALOR_PARAMETRO) + 1
            resultado.VALOR_PARAMETRO = radicado;
            _this.radicado = radicado;
            DBParametroAplicacion.actualizarCancer(resultado, function (result) {
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
        var resultEstructuraCampo = await BdEstructuraArchivoCampoCancer.buscarTodos();

        //validarCampos
        const oValidacionCamposCancer = new ValidacionCamposCancer();
        // const oValidacionContenidoPH = new ValidacionContenidoPH();
        oValidacionCamposCancer.validar(arrayCampos, resultEstructuraCampo);
        // oValidacionContenidoPH.Validar(arrayCampos, resultEstructuraCampo)
        this.guardarCamposBuenos(idCabeza, oValidacionCamposCancer.filas_buenas);
        this.guardarCamposMalos(idCabeza, oValidacionCamposCancer.filas_malas);
        // this.guardarCamposMalosCd(idCabeza, oValidacionContenidoPH.filas_malas)


       // Acualizar cabeza
        DbProcesoCancer.buscarPorId(idCabeza, function (result) {
            var resultx = result[0];

            //Llenar los campos faltantes para actualizar
            resultx.REGISTROS_PROCESADOS = _this.registrosProcesados
            resultx.NUMERO_ERRORES = oValidacionCamposCancer.getTotalCamposMalos();
            resultx.NUMERO_CORRECCIONES = 0;
            resultx.NUMERO_RADICACION = _this.radicado;
            resultx.ERRORES_CA = 0;
            resultx.ERRORES_CE = oValidacionCamposCancer.getTotalCamposMalos();
            resultx.ERRORES_CD = oValidacionCamposCancer.getTotalCamposMalos();
            resultx.REGISTROS_VALIDOS = oValidacionCamposCancer.getFilasBuenas();
            resultx.REGISTROS_NO_VALIDOS = oValidacionCamposCancer.getFilasMalas();
            resultx.TIPO_PROCESO = 1;
            resultx.TIPO_USUARIO = _this.Perfil;
            if (oValidacionCamposCancer.getArchivoBueno() ) {
                resultx.ESTADO_PROCESO = 2;
            } else {
                resultx.ESTADO_PROCESO = 4;

            }
            //Actualizar cabeza
            DbProcesoCancer.actualizar(resultx, idCabeza, function (result) {
            });
        });

     }



     public static guardarCamposBuenos(idCabeza, oFilas) {
        //Guardar los detalles, campos buenos
        for (const key in oFilas) {
            var oCamposfila = oFilas[key];
            oCamposfila.ID_PROCESO_CANCER = idCabeza;
            BdProcesoCancerDetalle.guardar(oCamposfila);
        }
    }

    public static guardarCamposMalos(idCabeza, oFilas) {
        //Guardar detalles campos malos
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_PROCESO_CANCER = idCabeza;
                campoMalo.USUARIO_CREACION = this.User;
                campoMalo.USUARIO_MODIFICACION = this.User;
                BdProcesoCancerError.guardar(campoMalo);
            }
        }

    }

    public static async getArchivo(nombreZip, body) {
        const obCancer = new DbProcesoCancer();
        var archivoExistente = await obCancer.getVigente(nombreZip, body);
        return archivoExistente;
    }

    public static async consultarArchivoCargado(ID_PROCESO_CANCER){
        const obCancer = new DbProcesoCancer()
        const archvioCargado = await obCancer.consultarUltimoArchivoCargado(ID_PROCESO_CANCER);
        return archvioCargado;
    }

}

export default LogicaDbProcesoCancerCargue;