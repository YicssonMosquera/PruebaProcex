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
    GuardarSoporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hemofilia = yield database_1.default.query("select * from bd_estructura_archivo_campo", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                    for (let i = 0; i < result.length; i++) {
                        console.log(result[i].POSICION);
                    }
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8, CAMPO_9, CAMPO_10, CAMPO_11, CAMPO_12, CAMPO_13, CAMPO_14, CAMPO_15, CAMPO_16, CAMPO_17, CAMPO_18, CAMPO_19, CAMPO_20, CAMPO_21, CAMPO_22, CAMPO_23, CAMPO_24, CAMPO_25, CAMPO_26, CAMPO_27, CAMPO_28, CAMPO_29, CAMPO_30, CAMPO_31, CAMPO_32, CAMPO_32_1, CAMPO_32_2, CAMPO_32_3, CAMPO_32_4, CAMPO_33, CAMPO_34, CAMPO_35, CAMPO_36, CAMPO_37, CAMPO_38, CAMPO_39, CAMPO_40, CAMPO_40_1, CAMPO_40_2, CAMPO_41, CAMPO_42, CAMPO_43, CAMPO_44, CAMPO_45, CAMPO_46, CAMPO_47_1, CAMPO_47_2, CAMPO_47_3, CAMPO_48, CAMPO_48_1, CAMPO_48_2, CAMPO_48_3, CAMPO_48_4, CAMPO_49, CAMPO_49_1, CAMPO_50, CAMPO_51, CAMPO_52, CAMPO_53, CAMPO_54, CAMPO_55, CAMPO_55_1, CAMPO_56, CAMPO_56_1, CAMPO_57, CAMPO_57_1, CAMPO_57_2, CAMPO_57_3, CAMPO_57_4, CAMPO_57_5, CAMPO_57_6, CAMPO_57_7, CAMPO_57_8, CAMPO_57_9, CAMPO_57_10, CAMPO_57_11, CAMPO_57_12, CAMPO_57_13, CAMPO_57_14, CAMPO_58, CAMPO_59, CAMPO_60, CAMPO_61, CAMPO_62, CAMPO_63, CAMPO_64, CAMPO_64_1, CAMPO_64_2, CAMPO_65, CAMPO_66, EDAD_CORTE, EDAD_ACTUAL, DOSIS_PROFILAXIS, VALIDACION_REGISTRO, VALIDACION_SOPORTE } = req.body;
            const newDatos = { CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8, CAMPO_9, CAMPO_10, CAMPO_11, CAMPO_12, CAMPO_13, CAMPO_14, CAMPO_15, CAMPO_16, CAMPO_17, CAMPO_18, CAMPO_19, CAMPO_20, CAMPO_21, CAMPO_22, CAMPO_23, CAMPO_24, CAMPO_25, CAMPO_26, CAMPO_27, CAMPO_28, CAMPO_29, CAMPO_30, CAMPO_31, CAMPO_32, CAMPO_32_1, CAMPO_32_2, CAMPO_32_3, CAMPO_32_4, CAMPO_33, CAMPO_34, CAMPO_35, CAMPO_36, CAMPO_37, CAMPO_38, CAMPO_39, CAMPO_40, CAMPO_40_1, CAMPO_40_2, CAMPO_41, CAMPO_42, CAMPO_43, CAMPO_44, CAMPO_45, CAMPO_46, CAMPO_47_1, CAMPO_47_2, CAMPO_47_3, CAMPO_48, CAMPO_48_1, CAMPO_48_2, CAMPO_48_3, CAMPO_48_4, CAMPO_49, CAMPO_49_1, CAMPO_50, CAMPO_51, CAMPO_52, CAMPO_53, CAMPO_54, CAMPO_55, CAMPO_55_1, CAMPO_56, CAMPO_56_1, CAMPO_57, CAMPO_57_1, CAMPO_57_2, CAMPO_57_3, CAMPO_57_4, CAMPO_57_5, CAMPO_57_6, CAMPO_57_7, CAMPO_57_8, CAMPO_57_9, CAMPO_57_10, CAMPO_57_11, CAMPO_57_12, CAMPO_57_13, CAMPO_57_14, CAMPO_58, CAMPO_59, CAMPO_60, CAMPO_61, CAMPO_62, CAMPO_63, CAMPO_64, CAMPO_64_1, CAMPO_64_2, CAMPO_65, CAMPO_66, EDAD_CORTE, EDAD_ACTUAL, DOSIS_PROFILAXIS, VALIDACION_REGISTRO, VALIDACION_SOPORTE };
            let data = new Map();
            try {
                const hemofilia = yield database_1.default.query("select * from bd_estructura_archivo_campo", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    for (let i = 0; i < result.length; i++) {
                        var objeto = result[i];
                        data.set(objeto.NOMBRE_CAMPO, objeto);
                    }
                    for (const key in req.body) {
                        var nombrecampo = key;
                        var valorcampo = req.body[key];
                        var validacioncampo = data.get(nombrecampo);
                        var validacion = validacioncamposhemofilia_1.validacionhemofila;
                        console.log(nombrecampo + "+++++++++++++++++++++++++++++++++++++++++++++");
                        if (nombrecampo == "CAMPO_1" || nombrecampo == "CAMPO_3") {
                            if (validacion.isObligatorio(validacioncampo.VIGENTE)) {
                                if (validacion.isMaxMin(valorcampo, validacioncampo.LONGITUD_MINIMA, validacioncampo.LONGITUD_MAXIMA)) {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                }
                                else {
                                    console.log('Longitud no corresponde campo');
                                }
                            }
                            else {
                                if (validacion.ismax(valorcampo, validacioncampo.LONGITUD_MAXIMA)) {
                                    console.log('Longitud no corresponde campo1');
                                }
                                else {
                                    newDatos[nombrecampo];
                                    console.log('guarda');
                                }
                            }
                        }
                        if (nombrecampo == "CAMPO_2") {
                        }
                        if (nombrecampo == "CAMPO_3") {
                        }
                        if (nombrecampo == "CAMPO_4") {
                        }
                    }
                    return;
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15030 && result[i].VIGENTE == 'S') {
                            if (CAMPO_1.length < result[i].LONGITUD_MINIMA || CAMPO_1.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo1 ');
                            }
                            else {
                                console.log('guarde campo1');
                                newDatos.CAMPO_1 = CAMPO_1;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15030 && result[i].VIGENTE == 'N') {
                            if (CAMPO_1.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo1 ');
                            }
                            else {
                                console.log('guarde campo1');
                                newDatos.CAMPO_1 = CAMPO_1;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15031 && result[i].VIGENTE == 'S') {
                            if (CAMPO_2.length < result[i].LONGITUD_MINIMA || CAMPO_2.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo2');
                            }
                            else {
                                console.log('guarde campo2');
                                newDatos.CAMPO_2 = CAMPO_2;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15031 && result[i].VIGENTE == 'N') {
                            if (CAMPO_2.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo2 ');
                            }
                            else {
                                console.log('guarde campo2');
                                newDatos.CAMPO_2 = CAMPO_2;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15032 && result[i].VIGENTE == 'S') {
                            if (CAMPO_3.length < result[i].LONGITUD_MINIMA || CAMPO_3.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo3 ');
                            }
                            else {
                                console.log('guarde campo3');
                                newDatos.CAMPO_3 = CAMPO_3;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15032 && result[i].VIGENTE == 'N') {
                            if (CAMPO_3.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo3 ');
                            }
                            else {
                                console.log('guarde campo3');
                                newDatos.CAMPO_3 = CAMPO_3;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15033 && result[i].VIGENTE == 'S') {
                            if (CAMPO_4.length < result[i].LONGITUD_MINIMA || CAMPO_4.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo4 ');
                            }
                            else {
                                console.log('guarde campo4');
                                newDatos.CAMPO_4 = CAMPO_4;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15033 && result[i].VIGENTE == 'N') {
                            if (CAMPO_4.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo4 ');
                            }
                            else {
                                console.log('guarde campo4');
                                newDatos.CAMPO_4 = CAMPO_4;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15034 && result[i].VIGENTE == 'S') {
                            if (CAMPO_5.length < result[i].LONGITUD_MINIMA || CAMPO_5.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo5 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_5)) {
                                    console.log('guarde campo5');
                                    newDatos.CAMPO_5 = CAMPO_5;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo5');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15034 && result[i].VIGENTE == 'N') {
                            if (CAMPO_5.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo5 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_5) || CAMPO_5 == '') {
                                    console.log('guarde campo5');
                                    newDatos.CAMPO_5 = CAMPO_5;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo5');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15035 && result[i].VIGENTE == 'S') {
                            if (CAMPO_6.length < result[i].LONGITUD_MINIMA || CAMPO_6.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo6 ');
                            }
                            else {
                                console.log('guarde campo6');
                                newDatos.CAMPO_6 = CAMPO_6;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15035 && result[i].VIGENTE == 'N') {
                            if (CAMPO_6.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo6 ');
                            }
                            else {
                                console.log('guarde campo6');
                                newDatos.CAMPO_6 = CAMPO_6;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15036 && result[i].VIGENTE == 'S') {
                            if (CAMPO_7.length < result[i].LONGITUD_MINIMA || CAMPO_7.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo7 ');
                            }
                            else {
                                console.log('guarde campo7');
                                newDatos.CAMPO_7 = CAMPO_7;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15036 && result[i].VIGENTE == 'N') {
                            if (CAMPO_7.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo7 ');
                            }
                            else {
                                console.log('guarde campo7');
                                newDatos.CAMPO_7 = CAMPO_7;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15037 && result[i].VIGENTE == 'S') {
                            if (CAMPO_8.length < result[i].LONGITUD_MINIMA || CAMPO_8.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo8 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_8)) {
                                    console.log('guarde campo8');
                                    newDatos.CAMPO_8 = CAMPO_8;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo8');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15037 && result[i].VIGENTE == 'N') {
                            if (CAMPO_8.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo8 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_8) || CAMPO_8 == '') {
                                    console.log('guarde campo8');
                                    newDatos.CAMPO_8 = CAMPO_8;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo8');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15038 && result[i].VIGENTE == 'S') {
                            if (CAMPO_9.length < result[i].LONGITUD_MINIMA || CAMPO_9.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo9 ');
                            }
                            else {
                                console.log('guarde campo9');
                                newDatos.CAMPO_9 = CAMPO_9;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15038 && result[i].VIGENTE == 'N') {
                            if (CAMPO_9.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo9 ');
                            }
                            else {
                                console.log('guarde campo9');
                                newDatos.CAMPO_9 = CAMPO_9;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15039 && result[i].VIGENTE == 'S') {
                            if (CAMPO_10.length < result[i].LONGITUD_MINIMA || CAMPO_10.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo10 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_10)) {
                                    console.log('guarde campo10');
                                    newDatos.CAMPO_10 = CAMPO_10;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo10');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15039 && result[i].VIGENTE == 'N') {
                            if (CAMPO_10.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo10 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_10) || CAMPO_10 == '') {
                                    console.log('guarde campo10');
                                    newDatos.CAMPO_10 = CAMPO_10;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo10');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15040 && result[i].VIGENTE == 'S') {
                            if (CAMPO_11.length < result[i].LONGITUD_MINIMA || CAMPO_11.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo11 ');
                            }
                            else {
                                console.log('guarde campo11');
                                newDatos.CAMPO_11 = CAMPO_11;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15040 && result[i].VIGENTE == 'N') {
                            if (CAMPO_11.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo11 ');
                            }
                            else {
                                console.log('guarde campo11');
                                newDatos.CAMPO_11 = CAMPO_11;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15041 && result[i].VIGENTE == 'S') {
                            if (CAMPO_12.length < result[i].LONGITUD_MINIMA || CAMPO_12.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo12 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split('-'));
                                if (CAMPO_12 >= validacion[0] && CAMPO_12 <= validacion[1]) {
                                    console.log('guarde campo12');
                                    newDatos.CAMPO_12 = CAMPO_12;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo12');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15041 && result[i].VIGENTE == 'N') {
                            if (CAMPO_12.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo12 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split('-'));
                                if (CAMPO_12 >= validacion[0] && CAMPO_12 <= validacion[1] || CAMPO_12 == '') {
                                    console.log('guarde campo12');
                                    newDatos.CAMPO_12 = CAMPO_12;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo12');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15042 && result[i].VIGENTE == 'S') {
                            if (CAMPO_13.length < result[i].LONGITUD_MINIMA || CAMPO_13.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo13');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_13)) {
                                    console.log('guarde campo13');
                                    newDatos.CAMPO_13 = CAMPO_13;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo13');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15042 && result[i].VIGENTE == 'N') {
                            if (CAMPO_13.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo13 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_13) || CAMPO_13 == '') {
                                    console.log('guarde campo13');
                                    newDatos.CAMPO_13 = CAMPO_13;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo13');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15043 && result[i].VIGENTE == 'S') {
                            if (CAMPO_14.length < result[i].LONGITUD_MINIMA || CAMPO_14.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo14 ');
                            }
                            else {
                                console.log('guarde campo14');
                                newDatos.CAMPO_14 = CAMPO_14;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15043 && result[i].VIGENTE == 'N') {
                            if (CAMPO_14.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo14 ');
                            }
                            else {
                                console.log('guarde campo14');
                                newDatos.CAMPO_14 = CAMPO_14;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15044 && result[i].VIGENTE == 'S') {
                            if (CAMPO_15.length < result[i].LONGITUD_MINIMA || CAMPO_15.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo15 ');
                            }
                            else {
                                console.log('guarde campo15');
                                newDatos.CAMPO_15 = CAMPO_15;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15044 && result[i].VIGENTE == 'N') {
                            if (CAMPO_15.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo15 ');
                            }
                            else {
                                console.log('guarde campo15');
                                newDatos.CAMPO_15 = CAMPO_15;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15045 && result[i].VIGENTE == 'S') {
                            if (CAMPO_16.length < result[i].LONGITUD_MINIMA || CAMPO_16.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo16 ');
                            }
                            else {
                                console.log('guarde campo16');
                                newDatos.CAMPO_16 = CAMPO_16;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15045 && result[i].VIGENTE == 'N') {
                            if (CAMPO_16.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo16 ');
                            }
                            else {
                                console.log('guarde campo16');
                                newDatos.CAMPO_16 = CAMPO_16;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15046 && result[i].VIGENTE == 'S') {
                            if (CAMPO_17.length < result[i].LONGITUD_MINIMA || CAMPO_17.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo17 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_17)) {
                                    console.log('guarde campo17');
                                    newDatos.CAMPO_17 = CAMPO_17;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo17');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15046 && result[i].VIGENTE == 'N') {
                            if (CAMPO_17.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo17 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_17) || CAMPO_17 == '') {
                                    console.log('guarde campo17');
                                    newDatos.CAMPO_17 = CAMPO_17;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo17');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15047 && result[i].VIGENTE == 'S') {
                            if (CAMPO_18.length < result[i].LONGITUD_MINIMA || CAMPO_18.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo18 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_18)) {
                                    console.log('guarde campo18');
                                    newDatos.CAMPO_18 = CAMPO_18;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo18');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15047 && result[i].VIGENTE == 'N') {
                            if (CAMPO_18.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo18 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_18) || CAMPO_18 == '') {
                                    console.log('guarde campo18');
                                    newDatos.CAMPO_18 = CAMPO_18;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo18');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15048 && result[i].VIGENTE == 'S') {
                            if (CAMPO_19.length < result[i].LONGITUD_MINIMA || CAMPO_19.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo19 ');
                            }
                            else {
                                console.log('guarde campo19');
                                newDatos.CAMPO_19 = CAMPO_19;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15048 && result[i].VIGENTE == 'N') {
                            if (CAMPO_19.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo19 ');
                            }
                            else {
                                console.log('guarde campo19');
                                newDatos.CAMPO_19 = CAMPO_19;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15049 && result[i].VIGENTE == 'S') {
                            if (CAMPO_20.length < result[i].LONGITUD_MINIMA || CAMPO_20.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo20 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_20)) {
                                    console.log('guarde campo20');
                                    newDatos.CAMPO_20 = CAMPO_20;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo20');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15049 && result[i].VIGENTE == 'N') {
                            if (CAMPO_20.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo20 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split(','));
                                if (validacion.includes(CAMPO_20) || CAMPO_20 == '') {
                                    console.log('guarde campo20');
                                    newDatos.CAMPO_20 = CAMPO_20;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo20');
                                }
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15050 && result[i].VIGENTE == 'S') {
                            if (CAMPO_21.length < result[i].LONGITUD_MINIMA || CAMPO_21.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo21 ');
                            }
                            else {
                                console.log('guarde campo21');
                                newDatos.CAMPO_21 = CAMPO_21;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15050 && result[i].VIGENTE == 'N') {
                            if (CAMPO_21.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo21 ');
                            }
                            else {
                                console.log('guarde campo21');
                                newDatos.CAMPO_21 = CAMPO_21;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15051 && result[i].VIGENTE == 'S') {
                            if (CAMPO_22.length < result[i].LONGITUD_MINIMA || CAMPO_22.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo22 ');
                            }
                            else {
                                console.log('guarde campo22');
                                newDatos.CAMPO_22 = CAMPO_22;
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15051 && result[i].VIGENTE == 'N') {
                            if (CAMPO_22.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo22 ');
                            }
                            else {
                                console.log('guarde campo22');
                                newDatos.CAMPO_22 = CAMPO_22;
                            }
                        }
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15052 && result[i].VIGENTE == 'S') {
                            if (CAMPO_23.length < result[i].LONGITUD_MINIMA || CAMPO_23.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo23 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split('-'));
                                console.log(validacion);
                                if (CAMPO_23 >= validacion[0] && CAMPO_23 <= validacion[1]) {
                                    console.log('guarde campo23');
                                    newDatos.CAMPO_23 = CAMPO_23;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo23');
                                }
                            }
                        }
                        else if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15052 && result[i].VIGENTE == 'N') {
                            if (CAMPO_23.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo23 ');
                            }
                            else if (result[i].VALORES) {
                                let validacion = (result[i].VALORES.split('-'));
                                if (CAMPO_23 >= validacion[0] && CAMPO_23 <= validacion[1] || CAMPO_23 == '') {
                                    console.log('guarde campo23');
                                    newDatos.CAMPO_23 = CAMPO_23;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo23');
                                }
                            }
                        }
                    }
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
