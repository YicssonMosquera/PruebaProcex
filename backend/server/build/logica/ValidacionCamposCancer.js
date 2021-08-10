"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validacioncamposhemofilia_1 = require("../controller/validacioncamposhemofilia");
class ValidacionCamposCancer {
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
            //insertando valores al map
            for (let i = 0; i < resultEstructuraCampo.length; i++) {
                var objeto = resultEstructuraCampo[i];
                objeto.NUM_CAMPO = parseInt(objeto.NOMBRE_CAMPO.replace("CAMPO_", ""));
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
                    //validacion campo 1 y 3 
                    if (nombrecampo == "CAMPO_1" || nombrecampo == "CAMPO_3") {
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
                    //////////////////////validacion campo 2 y 4 //////////// 
                    if (nombrecampo == "CAMPO_2" || nombrecampo == "CAMPO_4") {
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
                    /////////////////////////Validacion campo 5, 8 Y 10 //////////////////////////////
                    if (nombrecampo == "CAMPO_5" || nombrecampo == "CAMPO_8" || nombrecampo == "CAMPO_10") {
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
                    //////////////VALIDACION CAMPO 6 Y 7 /////////////////////////////////
                    if (nombrecampo == "CAMPO_6" || nombrecampo == "CAMPO_7") {
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
                    //////////////////////////////// VALIDACION CAMPO 9 Y 11 /////////////////
                    if (nombrecampo == "CAMPO_9" || nombrecampo == "CAMPO_11") {
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
                    /////////////////////////////////validacion campo 12 /////////////////////////////////////
                    if (nombrecampo == "CAMPO_12" || nombrecampo == "CAMPO_21" || nombrecampo == "CAMPO_22" || nombrecampo == "CAMPO_27" || nombrecampo == "CAMPO_28" || nombrecampo == "CAMPO_33" || nombrecampo == "CAMPO_34" || nombrecampo == "CAMPO_36" || nombrecampo == "CAMPO_37" || nombrecampo == "CAMPO_38" || nombrecampo == "CAMPO_41" || nombrecampo == "CAMPO_48" || nombrecampo == "CAMPO_53_1" || nombrecampo == "CAMPO_53_2") {
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
                    //////////////////////////VALIDACION CAMPO 13, 17,18,20,26,33,34 ///////////////////////////////////////////
                    if (nombrecampo == "CAMPO_13" || nombrecampo == "CAMPO_31" || nombrecampo == "CAMPO_40" || nombrecampo == "CAMPO_44" || nombrecampo == "CAMPO_45" || nombrecampo == "CAMPO_46" || nombrecampo == "CAMPO_46_1") {
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
                    if (nombrecampo == "CAMPO_14" || nombrecampo == "CAMPO_15" || nombrecampo == "CAMPO_16" || nombrecampo == "CAMPO_17" || nombrecampo == "CAMPO_18" || nombrecampo == "CAMPO_19" || nombrecampo == "CAMPO_20" || nombrecampo == "CAMPO_23" || nombrecampo == "CAMPO_24" || nombrecampo == "CAMPO_25" || nombrecampo == "CAMPO_26" || nombrecampo == "CAMPO_29" || nombrecampo == "CAMPO_30" || nombrecampo == "CAMPO_32" || nombrecampo == "CAMPO_35" || nombrecampo == "CAMPO_39" || nombrecampo == "CAMPO_43" || nombrecampo == "CAMPO_49" || nombrecampo == "CAMPO_58" || nombrecampo == "CAMPO_62" || nombrecampo == "CAMPO_71" || nombrecampo == "CAMPO_76") {
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
                    if (nombrecampo == "CAMPO_46_2" || nombrecampo == "CAMPO_46_3" || nombrecampo == "CAMPO_46_4" || nombrecampo == "CAMPO_46_5" || nombrecampo == "CAMPO_46_6" || nombrecampo == "CAMPO_46_7" || nombrecampo == "CAMPO_46_8" || nombrecampo == "CAMPO_47") {
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
                    if (nombrecampo == "CAMPO_80" || nombrecampo == "CAMPO_88" || nombrecampo == "CAMPO_94" || nombrecampo == "CAMPO_97" || nombrecampo == "CAMPO_103" || nombrecampo == "CAMPO_112" || nombrecampo == "CAMPO_115" || nombrecampo == "CAMPO_118" || nombrecampo == "CAMPO_121" || nombrecampo == "CAMPO_130" || nombrecampo == "CAMPO_131" || nombrecampo == "CAMPO_133" || nombrecampo == "CAMPO_134") {
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
                    if (nombrecampo == "CAMPO_50" || nombrecampo == "CAMPO_51" || nombrecampo == "CAMPO_52" || nombrecampo == "CAMPO_53" || nombrecampo == "CAMPO_54" || nombrecampo == "CAMPO_55" || nombrecampo == "CAMPO_56" || nombrecampo == "CAMPO_57" || nombrecampo == "CAMPO_63" || nombrecampo == "CAMPO_64" || nombrecampo == "CAMPO_65" || nombrecampo == "CAMPO_66" || nombrecampo == "CAMPO_67" || nombrecampo == "CAMPO_68" || nombrecampo == "CAMPO_69" || nombrecampo == "CAMPO_70" || nombrecampo == "CAMPO_75" || nombrecampo == "CAMPO_77" || nombrecampo == "CAMPO_78") {
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
                    if (nombrecampo == "CAMPO_53_1" || nombrecampo == "CAMPO_53_2" || nombrecampo == "CAMPO_53_3" || nombrecampo == "CAMPO_53_4" || nombrecampo == "CAMPO_53_5" || nombrecampo == "CAMPO_53_6" || nombrecampo == "CAMPO_53_7" || nombrecampo == "CAMPO_53_8" || nombrecampo == "CAMPO_59" || nombrecampo == "CAMPO_60" || nombrecampo == "CAMPO_61" || nombrecampo == "CAMPO_66_1" || nombrecampo == "CAMPO_66_2" || nombrecampo == "CAMPO_66_3" || nombrecampo == "CAMPO_66_4" || nombrecampo == "CAMPO_66_5" || nombrecampo == "CAMPO_66_6" || nombrecampo == "CAMPO_66_7" || nombrecampo == "CAMPO_66_8" || nombrecampo == "CAMPO_66_9" || nombrecampo == "CAMPO_72" || nombrecampo == "CAMPO_73" || nombrecampo == "CAMPO_74" || nombrecampo == "CAMPO_79" || nombrecampo == "CAMPO_81" || nombrecampo == "CAMPO_84") {
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
                    if (nombrecampo == "CAMPO_82" || nombrecampo == "CAMPO_83" || nombrecampo == "CAMPO_85" || nombrecampo == "CAMPO_86" || nombrecampo == "CAMPO_87" || nombrecampo == "CAMPO_91" || nombrecampo == "CAMPO_92" || nombrecampo == "CAMPO_93" || nombrecampo == "CAMPO_100" || nombrecampo == "CAMPO_101" || nombrecampo == "CAMPO_102" || nombrecampo == "CAMPO_106" || nombrecampo == "CAMPO_110" || nombrecampo == "CAMPO_111" || nombrecampo == "CAMPO_113" || nombrecampo == "CAMPO_116" || nombrecampo == "CAMPO_117" || nombrecampo == "CAMPO_119" || nombrecampo == "CAMPO_120" || nombrecampo == "CAMPO_122" || nombrecampo == "CAMPO_127") {
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
                    if (nombrecampo == "CAMPO_89" || nombrecampo == "CAMPO_90" || nombrecampo == "CAMPO_95" || nombrecampo == "CAMPO_96" || nombrecampo == "CAMPO_98" || nombrecampo == "CAMPO_99" || nombrecampo == "CAMPO_104" || nombrecampo == "CAMPO_105" || nombrecampo == "CAMPO_107" || nombrecampo == "CAMPO_108" || nombrecampo == "CAMPO_111" || nombrecampo == "CAMPO_114" || nombrecampo == "CAMPO_114_1" || nombrecampo == "CAMPO_114_2" || nombrecampo == "CAMPO_114_3" || nombrecampo == "CAMPO_114_4" || nombrecampo == "CAMPO_114_5" || nombrecampo == "CAMPO_114_6" || nombrecampo == "CAMPO_123" || nombrecampo == "CAMPO_124" || nombrecampo == "CAMPO_125" || nombrecampo == "CAMPO_126" || nombrecampo == "CAMPO_129" || nombrecampo == "CAMPO_132") {
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
                    if (nombrecampo == "CAMPO_128") {
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
                }
                //guardar los arreglos campos buenos y malos
                console.log(resultEstructuraCampo.length);
                if (arrayCamposBuenos.length == resultEstructuraCampo.length) {
                    _this.filas_buenas['fila_' + numFila] = camposFila;
                    console.log(_this.filas_buenas);
                }
                else {
                    _this.filas_malas['fila_' + numFila] = arrayCamposMalos;
                    //   console.log('filas malas ++++++++++++++++++++++++++++++++++')
                    //   console.log( _this.filas_malas)
                    //   console.log( Object.keys(this.filas_malas).length)
                }
            }
        }
        catch (error) {
        }
    }
}
exports.default = ValidacionCamposCancer;
