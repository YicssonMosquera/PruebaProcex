"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carguehemofiliacontrollers = void 0;
const database_1 = __importDefault(require("../database"));
const validacioncamposhemofilia_1 = require("./validacioncamposhemofilia");
class Carguehemofiliacontrollers {
    guardarEncabezadoProcesoHemofilia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('insert into Cuenta_hemofilia set ?', [req.body]);
                console.log(req.body);
                res.json({ message: 'Datos guardado con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    guardarcargahemofilia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8, CAMPO_9, CAMPO_10, CAMPO_11, CAMPO_12, CAMPO_13, CAMPO_14, CAMPO_15, CAMPO_16, CAMPO_17, CAMPO_18, CAMPO_19, CAMPO_20, CAMPO_21, CAMPO_22, CAMPO_23, CAMPO_24, CAMPO_25, CAMPO_26, CAMPO_27, CAMPO_28, CAMPO_29, CAMPO_30, CAMPO_31, CAMPO_32, CAMPO_32_1, CAMPO_32_2, CAMPO_32_3, CAMPO_32_4, CAMPO_33, CAMPO_34, CAMPO_35, CAMPO_36, CAMPO_37, CAMPO_38, CAMPO_39, CAMPO_40, CAMPO_40_1, CAMPO_40_2, CAMPO_41, CAMPO_42, CAMPO_43, CAMPO_44, CAMPO_45, CAMPO_46, CAMPO_47_1, CAMPO_47_2, CAMPO_47_3, CAMPO_48, CAMPO_48_1, CAMPO_48_2, CAMPO_48_3, CAMPO_48_4, CAMPO_49, CAMPO_49_1, CAMPO_50, CAMPO_51, CAMPO_52, CAMPO_53, CAMPO_54, CAMPO_55, CAMPO_55_1, CAMPO_56, CAMPO_56_1, CAMPO_57, CAMPO_57_1, CAMPO_57_2, CAMPO_57_3, CAMPO_57_4, CAMPO_57_5, CAMPO_57_6, CAMPO_57_7, CAMPO_57_8, CAMPO_57_9, CAMPO_57_10, CAMPO_57_11, CAMPO_57_12, CAMPO_57_13, CAMPO_57_14, CAMPO_58, CAMPO_59, CAMPO_60, CAMPO_61, CAMPO_62, CAMPO_63, CAMPO_64, CAMPO_64_1, CAMPO_64_2, CAMPO_65, CAMPO_66, ID_PROCESO_HEMOFILIA, REGISTROS_PROCESADOS, ESTADO_PROCESO, USUARIO_CREACION, FECHA_CREACION, USUARIO_MODIFICACION, FECHA_MODIFICACION, NOMBRE_ARCHIVO, LONGITUD_ARCHIVO, NUMERO_ERRORES, NUMERO_CORRECCIONES, NUMERO_RADICACION, ERRORES_CA, ERRORES_CE, ERRORES_CD, REGISTROS_VALIDOS, REGISTROS_NO_VALIDOS, VIGENTE, TIPO_USUARIO, TIPO_PROCESO, PROCESADO, FECHA_PROCESADO, RUTA_ARCHIVO, FECHA_INICIO_PROCESO, FECHA_FIN_PROCESO } = req.body;
            const newDatos = { CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8, CAMPO_9, CAMPO_10, CAMPO_11, CAMPO_12, CAMPO_13, CAMPO_14, CAMPO_15, CAMPO_16, CAMPO_17, CAMPO_18, CAMPO_19, CAMPO_20, CAMPO_21, CAMPO_22, CAMPO_23, CAMPO_24, CAMPO_25, CAMPO_26, CAMPO_27, CAMPO_28, CAMPO_29, CAMPO_30, CAMPO_31, CAMPO_32, CAMPO_32_1, CAMPO_32_2, CAMPO_32_3, CAMPO_32_4, CAMPO_33, CAMPO_34, CAMPO_35, CAMPO_36, CAMPO_37, CAMPO_38, CAMPO_39, CAMPO_40, CAMPO_40_1, CAMPO_40_2, CAMPO_41, CAMPO_42, CAMPO_43, CAMPO_44, CAMPO_45, CAMPO_46, CAMPO_47_1, CAMPO_47_2, CAMPO_47_3, CAMPO_48, CAMPO_48_1, CAMPO_48_2, CAMPO_48_3, CAMPO_48_4, CAMPO_49, CAMPO_49_1, CAMPO_50, CAMPO_51, CAMPO_52, CAMPO_53, CAMPO_54, CAMPO_55, CAMPO_55_1, CAMPO_56, CAMPO_56_1, CAMPO_57, CAMPO_57_1, CAMPO_57_2, CAMPO_57_3, CAMPO_57_4, CAMPO_57_5, CAMPO_57_6, CAMPO_57_7, CAMPO_57_8, CAMPO_57_9, CAMPO_57_10, CAMPO_57_11, CAMPO_57_12, CAMPO_57_13, CAMPO_57_14, CAMPO_58, CAMPO_59, CAMPO_60, CAMPO_61, CAMPO_62, CAMPO_63, CAMPO_64, CAMPO_64_1, CAMPO_64_2, CAMPO_65, CAMPO_66, };
            const Encabezado = { ID_PROCESO_HEMOFILIA, REGISTROS_PROCESADOS, ESTADO_PROCESO, USUARIO_CREACION, FECHA_CREACION, USUARIO_MODIFICACION, FECHA_MODIFICACION, NOMBRE_ARCHIVO, LONGITUD_ARCHIVO, NUMERO_ERRORES, NUMERO_CORRECCIONES, NUMERO_RADICACION, ERRORES_CA, ERRORES_CE, ERRORES_CD, REGISTROS_VALIDOS, REGISTROS_NO_VALIDOS, VIGENTE, TIPO_USUARIO, TIPO_PROCESO, PROCESADO, FECHA_PROCESADO, RUTA_ARCHIVO, FECHA_INICIO_PROCESO, FECHA_FIN_PROCESO };
            let data = new Map();
            try {
                var arraycamposbuenos = [];
                var arraycamposmalos = [];
                var erroeCE;
                const hemofilia = yield database_1.default.query("select * from bd_estructura_archivo_campo", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    ///////////////////////insertando valores al map
                    for (let i = 0; i < result.length; i++) {
                        var objeto = result[i];
                        data.set(objeto.NOMBRE_CAMPO, objeto);
                    }
                    /////////////////////tomando valores del req.body
                    for (const key in req.body) {
                        var nombrecampo = key;
                        var valorcampo = req.body[key];
                        var validacioncampo = data.get(nombrecampo);
                        var validacion = validacioncamposhemofilia_1.validacionhemofila;
                        ////////////////////////////////validacion campo 1 y 3 
                        console.log(nombrecampo + "+++++++++++++++++++++++++++++++++++++++++++++");
                        if (nombrecampo == "CAMPO_1" || nombrecampo == "CAMPO_3") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////////////validacion campo 2 y 4 //////////// 
                        if (nombrecampo == "CAMPO_2" || nombrecampo == "CAMPO_4") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////Validacion campo 5, 8 Y 10 //////////////////////////////
                        if (nombrecampo == "CAMPO_5" || nombrecampo == "CAMPO_8" || nombrecampo == "CAMPO_10") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    console.log('Tipo de datos no valido campo');
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////VALIDACION CAMPO 6 Y 7 /////////////////////////////////
                        if (nombrecampo == "CAMPO_6" || nombrecampo == "CAMPO_7") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////////////////////// VALIDACION CAMPO 9 Y 11 /////////////////
                        if (nombrecampo == "CAMPO_9" || nombrecampo == "CAMPO_11") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////////validacion campo 12,23, 32,32_4, 64 /////////////////////////////////////
                        if (nombrecampo == "CAMPO_12" || nombrecampo == "CAMPO_23" || nombrecampo == "CAMPO_32" || nombrecampo == "CAMPO_32_4" || nombrecampo == "CAMPO_64") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 14,15 Y 16/////////////////////////////////////////////7777777
                        if (nombrecampo == "CAMPO_14" || nombrecampo == "CAMPO_15" || nombrecampo == "CAMPO_16") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////////////////VALIDACION CAMPO 13, 17,18,20,26,33,34 ///////////////////////////////////////////
                        if (nombrecampo == "CAMPO_13" || nombrecampo == "CAMPO_17" || nombrecampo == "CAMPO_18" || nombrecampo == "CAMPO_20" || nombrecampo == "CAMPO_26" || nombrecampo == "CAMPO_33" || nombrecampo == "CAMPO_34") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 19,21,22 Y25/////////////////////////////////////////////7777777
                        if (nombrecampo == "CAMPO_19" || nombrecampo == "CAMPO_21" || nombrecampo == "CAMPO_22" || nombrecampo == "CAMPO_25" || nombrecampo == "CAMPO_29") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        if (nombrecampo == "CAMPO_24" || nombrecampo == "CAMPO_27" || nombrecampo == "CAMPO_28" || nombrecampo == "CAMPO_31" || nombrecampo == "CAMPO_32_1" || nombrecampo == "CAMPO_32_2" || nombrecampo == "CAMPO_32_3" || nombrecampo == "CAMPO_40" || nombrecampo == "CAMPO_40_1" || nombrecampo == "CAMPO_40_2" || nombrecampo == "CAMPO_41" || nombrecampo == "CAMPO_48_4" || nombrecampo == "CAMPO_64_1" || nombrecampo == "CAMPO_57_1") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRangocohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        if (nombrecampo == "CAMPO_30") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.validacioncampo30(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.validacioncampo30(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 35,36,37,38,39/////////////////////////////////////////////
                        if (nombrecampo == "CAMPO_35" || nombrecampo == "CAMPO_36" || nombrecampo == "CAMPO_37" || nombrecampo == "CAMPO_38" || nombrecampo == "CAMPO_39") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////////validacion campo 42,43,44,45,46,47_1,_47_2_47_3,49_1  /////////////////////////////
                        if (nombrecampo == "CAMPO_42" || nombrecampo == "CAMPO_43" || nombrecampo == "CAMPO_44" || nombrecampo == "CAMPO_45" || nombrecampo == "CAMPO_46" || nombrecampo == "CAMPO_47_1" || nombrecampo == "CAMPO_47_2" || nombrecampo == "CAMPO_47_3" || nombrecampo == "CAMPO_49_1") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        //////////////////////////VALIDACION CAMPO 48,48_2,48_3,49,50,51,52,53,54,55,57,57_1   ////////////////////
                        if (nombrecampo == "CAMPO_48" || nombrecampo == "CAMPO_48_2" || nombrecampo == "CAMPO_48_3" || nombrecampo == "CAMPO_49" || nombrecampo == "CAMPO_50" || nombrecampo == "CAMPO_51" || nombrecampo == "CAMPO_52" || nombrecampo == "CAMPO_53" || nombrecampo == "CAMPO_54" || nombrecampo == "CAMPO_55" || nombrecampo == "CAMPO_57") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isCohincidencia(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 55_1,57_11,57_12,57_13,57_14 ///////////////////////////
                        if (nombrecampo == "CAMPO_55_1" || nombrecampo == "CAMPO_57_11" || nombrecampo == "CAMPO_57_12" || nombrecampo == "CAMPO_57_13" || nombrecampo == "CAMPO_57_14") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO 56,56_1/////////////////////////////////////////////
                        if (nombrecampo == "CAMPO_56" || nombrecampo == "CAMPO_56_1" || nombrecampo == "CAMPO_57_2" || nombrecampo == "CAMPO_57_3" || nombrecampo == "CAMPO_57_4" || nombrecampo == "CAMPO_57_5" || nombrecampo == "CAMPO_57_6" || nombrecampo == "CAMPO_57_7" || nombrecampo == "CAMPO_57_8" || nombrecampo == "CAMPO_57_9" || nombrecampo == "CAMPO_57_10" || nombrecampo == "CAMPO_58" || nombrecampo == "CAMPO_59") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else if (validacion.isRango(validacioncampo.VALORES, valorcampo) || valorcampo == '') {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                                else {
                                    erroeCE = 'Tipo de datos no valido campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                            }
                        }
                        /////////////////////////////VALIDACION CAMPO  60,61,62,63,64,64_2,65,66,48_1///////////////////////////
                        if (nombrecampo == "CAMPO_60" || nombrecampo == "CAMPO_61" || nombrecampo == "CAMPO_62" || nombrecampo == "CAMPO_63" || nombrecampo == "CAMPO_64_2" || nombrecampo == "CAMPO_65" || nombrecampo == "CAMPO_66" || nombrecampo == "CAMPO_48_1") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                            else if (validacion.isnoObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    erroeCE = 'Longitud no corresponde campo';
                                    console.log(erroeCE);
                                    newDatos[nombrecampo];
                                    arraycamposmalos.push(nombrecampo);
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                    arraycamposbuenos.push(nombrecampo);
                                }
                            }
                        }
                    }
                    try {
                        console.log(Encabezado);
                        return database_1.default.query('insert into bd_proceso_hemofilia set ?', [Encabezado]);
                    }
                    catch (error) {
                        res.status(404).json({ error: 'No se puedieron guardar Datos al encabezado' });
                    }
                    // try {
                    //     console.log(arraycamposbuenos.length)
                    //     if (arraycamposbuenos.length == result.length) {
                    //         console.log(newDatos);
                    //         return pool.query('insert into bd_proceso_hemofilia_detalle set ?', [newDatos])
                    //     } else {
                    //         return pool.query('insert into  bd_proceso_hemofilia_error set ?', [newDatos])
                    //     }
                    // } catch (error) {
                    //     res.status(404).json({ error: 'No se puedieron guardar Datos al detalle' });
                    // }
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
}
exports.carguehemofiliacontrollers = new Carguehemofiliacontrollers();
