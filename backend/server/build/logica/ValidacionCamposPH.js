"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DbEstructuraArchivoCampo_1 = __importDefault(require("../dao/DbEstructuraArchivoCampo"));
const validacioncamposhemofilia_1 = require("../controller/validacioncamposhemofilia");
class ValidacionCamposPH {
    static validar(reqBody) {
        console.log('req body --------------------------------------');
        console.log(reqBody);
        //traer registros archivo campo DB
        return new Promise(function (resolev, reject) {
            DbEstructuraArchivoCampo_1.default.buscarTodos(function (result) {
                let data = new Map();
                var arraycamposbuenos = [];
                var arraycamposmalos = [];
                var arrayRetorno = [[], []];
                try {
                    //insertando valores al map
                    for (let i = 0; i < result.length; i++) {
                        var objeto = result[i];
                        objeto.NUM_CAMPO = parseInt(objeto.NOMBRE_CAMPO.replace("CAMPO_", ""));
                        data.set(objeto.NOMBRE_CAMPO, objeto);
                    }
                    //tomando valores del req.body
                    for (const key in reqBody) {
                        var nombrecampo = key;
                        var valorcampo = reqBody[key];
                        var validacioncampo = data.get(nombrecampo);
                        var validacion = validacioncamposhemofilia_1.validacionhemofila;
                        ////////////////////////////////validacion campo 1 y 3 
                        if (nombrecampo == "CAMPO_1" || nombrecampo == "CAMPO_3") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////////////validacion campo 2 y 4 //////////// 
                        if (nombrecampo == "CAMPO_2" || nombrecampo == "CAMPO_4") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////Validacion campo 5, 8 Y 10 //////////////////////////////
                        if (nombrecampo == "CAMPO_5" || nombrecampo == "CAMPO_8" || nombrecampo == "CAMPO_10") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        //////////////VALIDACION CAMPO 6 Y 7 /////////////////////////////////
                        if (nombrecampo == "CAMPO_6" || nombrecampo == "CAMPO_7") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////////////////////// VALIDACION CAMPO 9 Y 11 /////////////////
                        if (nombrecampo == "CAMPO_9" || nombrecampo == "CAMPO_11") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////////validacion campo 12,23, 32,32_4, 64 /////////////////////////////////////
                        if (nombrecampo == "CAMPO_12" || nombrecampo == "CAMPO_23" || nombrecampo == "CAMPO_32" || nombrecampo == "CAMPO_32_4" || nombrecampo == "CAMPO_64") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 14,15 Y 16/////////////////////////////////////////////7777777
                        if (nombrecampo == "CAMPO_14" || nombrecampo == "CAMPO_15" || nombrecampo == "CAMPO_16") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////////////////VALIDACION CAMPO 13, 17,18,20,26,33,34 ///////////////////////////////////////////
                        if (nombrecampo == "CAMPO_13" || nombrecampo == "CAMPO_17" || nombrecampo == "CAMPO_18" || nombrecampo == "CAMPO_20" || nombrecampo == "CAMPO_26" || nombrecampo == "CAMPO_33" || nombrecampo == "CAMPO_34") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 19,21,22 Y25/////////////////////////////////////////////7777777
                        if (nombrecampo == "CAMPO_19" || nombrecampo == "CAMPO_21" || nombrecampo == "CAMPO_22" || nombrecampo == "CAMPO_25" || nombrecampo == "CAMPO_29") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        if (nombrecampo == "CAMPO_24" || nombrecampo == "CAMPO_27" || nombrecampo == "CAMPO_28" || nombrecampo == "CAMPO_31" || nombrecampo == "CAMPO_32_1" || nombrecampo == "CAMPO_32_2" || nombrecampo == "CAMPO_32_3" || nombrecampo == "CAMPO_40" || nombrecampo == "CAMPO_40_1" || nombrecampo == "CAMPO_40_2" || nombrecampo == "CAMPO_41" || nombrecampo == "CAMPO_48_4" || nombrecampo == "CAMPO_64_1" || nombrecampo == "CAMPO_57_1") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        if (nombrecampo == "CAMPO_30") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.validacioncampo30(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.validacioncampo30(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 35,36,37,38,39/////////////////////////////////////////////
                        if (nombrecampo == "CAMPO_35" || nombrecampo == "CAMPO_36" || nombrecampo == "CAMPO_37" || nombrecampo == "CAMPO_38" || nombrecampo == "CAMPO_39") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////////validacion campo 42,43,44,45,46,47_1,_47_2_47_3,49_1  /////////////////////////////
                        if (nombrecampo == "CAMPO_42" || nombrecampo == "CAMPO_43" || nombrecampo == "CAMPO_44" || nombrecampo == "CAMPO_45" || nombrecampo == "CAMPO_46" || nombrecampo == "CAMPO_47_1" || nombrecampo == "CAMPO_47_2" || nombrecampo == "CAMPO_47_3" || nombrecampo == "CAMPO_49_1") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        //////////////////////////VALIDACION CAMPO 48,48_2,48_3,49,50,51,52,53,54,55,57,57_1   ////////////////////
                        if (nombrecampo == "CAMPO_48" || nombrecampo == "CAMPO_48_2" || nombrecampo == "CAMPO_48_3" || nombrecampo == "CAMPO_49" || nombrecampo == "CAMPO_50" || nombrecampo == "CAMPO_51" || nombrecampo == "CAMPO_52" || nombrecampo == "CAMPO_53" || nombrecampo == "CAMPO_54" || nombrecampo == "CAMPO_55" || nombrecampo == "CAMPO_57") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 55_1,57_11,57_12,57_13,57_14 ///////////////////////////
                        if (nombrecampo == "CAMPO_55_1" || nombrecampo == "CAMPO_57_11" || nombrecampo == "CAMPO_57_12" || nombrecampo == "CAMPO_57_13" || nombrecampo == "CAMPO_57_14") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 56,56_1/////////////////////////////////////////////
                        if (nombrecampo == "CAMPO_56" || nombrecampo == "CAMPO_56_1" || nombrecampo == "CAMPO_57_2" || nombrecampo == "CAMPO_57_3" || nombrecampo == "CAMPO_57_4" || nombrecampo == "CAMPO_57_5" || nombrecampo == "CAMPO_57_6" || nombrecampo == "CAMPO_57_7" || nombrecampo == "CAMPO_57_8" || nombrecampo == "CAMPO_57_9" || nombrecampo == "CAMPO_57_10" || nombrecampo == "CAMPO_58" || nombrecampo == "CAMPO_59") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Tipo de datos no valido campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO  60,61,62,63,64,64_2,65,66,48_1///////////////////////////
                        if (nombrecampo == "CAMPO_60" || nombrecampo == "CAMPO_61" || nombrecampo == "CAMPO_62" || nombrecampo == "CAMPO_63" || nombrecampo == "CAMPO_64_2" || nombrecampo == "CAMPO_65" || nombrecampo == "CAMPO_66" || nombrecampo == "CAMPO_48_1") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    var hemofilia = {
                                        NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                                        TIPO_ERROR: 'CE',
                                        DESCRIPCION_ERROR: 'Longitud no corresponde campo',
                                        USUARIO_CREACION: '',
                                        USUARIO_MODIFICACION: '',
                                        VALOR_ANTERIOR: '',
                                        VALOR_NUEVO: '',
                                        TIPO_RIPS: ''
                                    };
                                    arraycamposmalos.push(hemofilia);
                                }
                                else {
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                    }
                    if (arraycamposbuenos.length == result.length) {
                        var arraybuenos = [];
                        arraybuenos.push(arraycamposbuenos);
                        arrayRetorno[0] = arraybuenos;
                    }
                    else {
                        var arrayMalos = [];
                        arrayMalos.push(arraycamposmalos);
                        arrayRetorno[1] = arrayMalos;
                        arrayRetorno[2] = arraycamposmalos;
                    }
                    resolev(arrayRetorno);
                }
                catch (error) {
                    //res.status(404).json({ error: 'No se puedieron Datos' });
                }
                ;
            });
        });
    }
}
exports.default = ValidacionCamposPH;
