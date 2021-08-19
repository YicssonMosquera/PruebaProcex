"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validacioncamposhemofilia_1 = require("../controller/validacioncamposhemofilia");
class ValidacionCamposErc {
    constructor() {
        this.data = new Map();
        this.filas_buenas = {};
        this.filas_malas = {};
        this.numeroErroresCampo = 0;
        this.numMalos = 0;
        this.numBuenos = 0;
        this.totalCamposMalos = 0;
        this.archivoFilas = 0;
    }
    validar(arrayCampos, resultEstructuraCampo) {
        var _this = this;
        this.archivoFilas = arrayCampos.length;
        try {
            for (let i = 0; i < resultEstructuraCampo.length; i++) {
                var objeto = resultEstructuraCampo[i];
                objeto.NUM_CAMPO = objeto.NOMBRE_CAMPO.replace("CAMPO_", "");
                _this.data.set(objeto.NOMBRE_CAMPO, objeto);
            }
            //recorrer el array campos que son las filas del file txt
            for (let index = 0; index < arrayCampos.length; index++) {
                //get campo fila
                const camposFila = arrayCampos[index];
                var numFila = index + 1;
                //crear arreglos para adicionar campos buenos y malos
                var arrayCamposBuenos = [];
                var arrayCamposMalos = [];
                //recorrer los campos de la fila
                for (const key in camposFila) {
                    var nombrecampo = key;
                    var valorcampo = camposFila[key];
                    var campofila = {};
                    campofila[nombrecampo] = valorcampo;
                    var validacioncampo = _this.data.get(nombrecampo);
                    var validacion = validacioncamposhemofilia_1.validacionhemofila;
                    if (nombrecampo == "CAMPO_1" || nombrecampo == "CAMPO_2" || nombrecampo == "CAMPO_3" || nombrecampo == "CAMPO_4") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_5" || nombrecampo == "CAMPO_8" || nombrecampo == "CAMPO_9" || nombrecampo == "CAMPO_12" || nombrecampo == "CAMPO_18" || nombrecampo == "CAMPO_20" || nombrecampo == "CAMPO_22") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_6" || nombrecampo == "CAMPO_7" || nombrecampo == "CAMPO_10" || nombrecampo == "CAMPO_13" || nombrecampo == "CAMPO_14" || nombrecampo == "CAMPO_15" || nombrecampo == "CAMPO_16" || nombrecampo == "CAMPO_17" || nombrecampo == "CAMPO_19" || nombrecampo == "CAMPO_19_1" || nombrecampo == "CAMPO_21" || nombrecampo == "CAMPO_21_1") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_11") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_23" || nombrecampo == "CAMPO_24" || nombrecampo == "CAMPO_25" || nombrecampo == "CAMPO_26" || nombrecampo == "CAMPO_27" || nombrecampo == "CAMPO_27_1" || nombrecampo == "CAMPO_28" || nombrecampo == "CAMPO_28_1" || nombrecampo == "CAMPO_29" || nombrecampo == "CAMPO_29_1" || nombrecampo == "CAMPO_30" || nombrecampo == "CAMPO_30_1" || nombrecampo == "CAMPO_31" || nombrecampo == "CAMPO_31_1" || nombrecampo == "CAMPO_32" || nombrecampo == "CAMPO_32_1" || nombrecampo == "CAMPO_33" || nombrecampo == "CAMPO_33_1" || nombrecampo == "CAMPO_34" || nombrecampo == "CAMPO_34_1" || nombrecampo == "CAMPO_35") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_36" || nombrecampo == "CAMPO_37" || nombrecampo == "CAMPO_38" || nombrecampo == "CAMPO_39" || nombrecampo == "CAMPO_41" || nombrecampo == "CAMPO_43" || nombrecampo == "CAMPO_46" || nombrecampo == "CAMPO_49" || nombrecampo == "CAMPO_54" || nombrecampo == "CAMPO_57") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_40" || nombrecampo == "CAMPO_42" || nombrecampo == "CAMPO_44" || nombrecampo == "CAMPO_45" || nombrecampo == "CAMPO_47" || nombrecampo == "CAMPO_48" || nombrecampo == "CAMPO_50" || nombrecampo == "CAMPO_51" || nombrecampo == "CAMPO_52" || nombrecampo == "CAMPO_53" || nombrecampo == "CAMPO_55" || nombrecampo == "CAMPO_56" || nombrecampo == "CAMPO_58" || nombrecampo == "CAMPO_59" || nombrecampo == "CAMPO_60" || nombrecampo == "CAMPO_61" || nombrecampo == "CAMPO_63" || nombrecampo == "CAMPO_63_1" || nombrecampo == "CAMPO_65" || nombrecampo == "CAMPO_66" || nombrecampo == "CAMPO_68") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_62" || nombrecampo == "CAMPO_62_1" || nombrecampo == "CAMPO_62_2" || nombrecampo == "CAMPO_62_3" || nombrecampo == "CAMPO_62_4" || nombrecampo == "CAMPO_62_5" || nombrecampo == "CAMPO_62_6" || nombrecampo == "CAMPO_62_7" || nombrecampo == "CAMPO_62_8" || nombrecampo == "CAMPO_62_9" || nombrecampo == "CAMPO_62_10" || nombrecampo == "CAMPO_62_11" || nombrecampo == "CAMPO_64" || nombrecampo == "CAMPO_67" || nombrecampo == "CAMPO_69" || nombrecampo == "CAMPO_70_1" || nombrecampo == "CAMPO_70_2" || nombrecampo == "CAMPO_70_3" || nombrecampo == "CAMPO_70_4" || nombrecampo == "CAMPO_70_5" || nombrecampo == "CAMPO_70_6") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_69_1" || nombrecampo == "CAMPO_69_2" || nombrecampo == "CAMPO_69_3" || nombrecampo == "CAMPO_69_4" || nombrecampo == "CAMPO_69_5" || nombrecampo == "CAMPO_69_6" || nombrecampo == "CAMPO_69_7" || nombrecampo == "CAMPO_70" || nombrecampo == "CAMPO_70_7" || nombrecampo == "CAMPO_70_8" || nombrecampo == "CAMPO_70_9" || nombrecampo == "CAMPO_71" || nombrecampo == "CAMPO_72" || nombrecampo == "CAMPO_73" || nombrecampo == "CAMPO_74" || nombrecampo == "CAMPO_75" || nombrecampo == "CAMPO_76" || nombrecampo == "CAMPO_77" || nombrecampo == "CAMPO_78" || nombrecampo == "CAMPO_80_1") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else {
                                arrayCamposBuenos.push(campofila);
                            }
                        }
                    }
                    if (nombrecampo == "CAMPO_79" || nombrecampo == "CAMPO_80") {
                        if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo)) {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                //aqui es 
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                        else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                            if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                            else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                arrayCamposBuenos.push(campofila);
                            }
                            else {
                                var cancer = {
                                    NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                    TIPO_ERROR: 'A',
                                    DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                    USUARIO_CREACION: '',
                                    USUARIO_MODIFICACION: '',
                                    VALOR_ANTERIOR: '',
                                    VALOR_NUEVO: '',
                                    NUMERO_REGISTRO: numFila
                                };
                                arrayCamposMalos.push(cancer);
                                _this.totalCamposMalos = this.totalCamposMalos + 1;
                            }
                        }
                    }
                }
                //guardar los arreglos campos buenos y malos
                if (arrayCamposBuenos.length == resultEstructuraCampo.length) {
                    _this.filas_buenas['fila_' + numFila] = camposFila;
                }
                else {
                    _this.filas_malas['fila_' + numFila] = arrayCamposMalos;
                }
            }
        }
        catch (error) {
        }
    }
}
exports.default = ValidacionCamposErc;
