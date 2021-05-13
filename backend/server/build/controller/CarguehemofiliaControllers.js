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
            try {
                const hemofilia = yield database_1.default.query("select * from bd_estructura_archivo_campo", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
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
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15031 && result[i].VIGENTE == 'S') {
                            if (CAMPO_2.length < result[i].LONGITUD_MINIMA || CAMPO_2.length > result[i].LONGITUD_MAXIMA) {
                                console.log('Longitud no corresponde campo2');
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
                        if (result[i].ID_ESTRUCTURA_ARCHIVO_CAMPO == 15033 && result[i].VIGENTE == 'S') {
                            if (CAMPO_4.length < result[i].LONGITUD_MINIMA || CAMPO_4.length > result[i].LONGITUD_MAXIMA) {
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
                                if (CAMPO_5 == validacion[0] || validacion[1] == CAMPO_5 || validacion[2] == CAMPO_5 || validacion[3] == CAMPO_5 || validacion[4] == CAMPO_5 || validacion[5] == CAMPO_5 || validacion[6] == CAMPO_5 || validacion[7] == CAMPO_5 || validacion[8] == CAMPO_5 || validacion[9] == CAMPO_5) {
                                    console.log('guarde campo5');
                                    newDatos.CAMPO_5 = CAMPO_5;
                                }
                                else {
                                    console.log('Tipo de datos no valido campo5');
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
