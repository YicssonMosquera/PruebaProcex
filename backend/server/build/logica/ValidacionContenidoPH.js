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
Object.defineProperty(exports, "__esModule", { value: true });
const validacioncamposhemofilia_1 = require("../controller/validacioncamposhemofilia");
class ValidacionContenidoPH {
    constructor() {
        this.data = new Map();
        this.fechanacimiento2016 = new Date('2021-01-31');
        this.fechacorte = new Date();
        this.fehaMayorEdad = new Date();
        this.fechaMenorEdad = new Date();
        this.fechaMaores60 = new Date();
        this.fechaMaores9 = new Date();
        this.fechaMayores70 = new Date();
    }
    Validar(arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            //Calculos de fecha de acuerdo con la fecha de corte de la base de datos.
            _this.fehaMayorEdad = yield validacioncamposhemofilia_1.validacionhemofila.calcularMayorEdad();
            _this.fechaMenorEdad = yield validacioncamposhemofilia_1.validacionhemofila.CalcularMenorEdad();
            _this.fechaMaores60 = yield validacioncamposhemofilia_1.validacionhemofila.calcularAfiliadosde60Añ0s();
            _this.fechaMaores9 = yield validacioncamposhemofilia_1.validacionhemofila.calcularAfiliadosde9Años();
            _this.fechaMayores70 = yield validacioncamposhemofilia_1.validacionhemofila.calcularAfiliadosde70Años();
            console.log(validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMayores70));
            //recorrer el array campos que son las filas del file txt
            for (let index = 0; index < arrayCampos.length; index++) {
                //get campo fila
                const camposFila = arrayCampos[index];
                var numFila = index + 1;
                //crear arreglos para adicionar campos buenos y malos
                var arrayCamposBuenos = [];
                var arrayCamposMalos = [];
                //validacion afiliados mayores de edad
                if (camposFila.CAMPO_5 == 'CC' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fehaMayorEdad)) {
                    console.log('entro 7');
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de identificacion no corresponde el usuario debe ser mayor de edad' + '' + camposFila.CAMPO_7,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion afiliados con 5años y cumplimiento del campo 56
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                    if (camposFila.CAMPO_56 == '0' || camposFila.CAMPO_56 == '5555' || camposFila.CAMPO_56 == '9996' || camposFila.CAMPO_56 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_56,
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion afiliados con 5años y cumplimiento del campo 56-_1
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                    if (camposFila.CAMPO_56_1 == '0' || camposFila.CAMPO_56_1 == '5555' || camposFila.CAMPO_56_1 == '9996' || camposFila.CAMPO_56_1 == '9999') {
                        console.log('Entra validcion campo 56_1');
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_56_1,
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion afilidados masculino con el campo 23 
                if (camposFila.CAMPO_8 == 'M') {
                    if (camposFila.CAMPO_23 != 2) {
                        console.log('Entra campo 23');
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_23,
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion afiliado campo 17 y aceptacion
                if (camposFila.CAMPO_17 == '3' && camposFila.CAMPO_8 == 'M') {
                    console.log('entra campo 8 con respecto al 17');
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_17,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 17 con cumpliento
                if (camposFila.CAMPO_17 == '1') {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMaores60) && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMaores9)) {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_17,
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion campo 17 con campo 11
                if (camposFila.CAMPO_17 == '55' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_11,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 17 con cumplimiento de campo 8
                if (camposFila.CAMPO_17 <= '2' && camposFila.CAMPO_8 == 'F') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_8,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 18 con cumplimiento campo 7
                if (camposFila.CAMPO_18 == '3') {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fehaMayorEdad) || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMayores70)) {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion campo 18 con cumplimiento campo 11
                if (camposFila.CAMPO_18 == '55' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 19 con cumplimiento camopo 64 y campo 21 
                if (camposFila.CAMPO_19 == '5555') {
                    if (camposFila.CAMPO_64 == '11' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01')) {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                ////validacion campo 19 con cumplimiento camopo 21
                if (camposFila.CAMPO_19 == '9998' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_21,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 20 con cumplimiento del campo 64
                if (camposFila.CAMPO_20 == '55' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 21 con cumplimiento 64 diferente a 2 
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01') && camposFila.CAMPO_64 != '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 21 con cumplimiento 64 diferente a 2 
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1800-01-01') && camposFila.CAMPO_64 != '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido' + '' + camposFila.CAMPO_64,
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 229 a 234
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7)) {
                    if (camposFila.CAMPO_19 < '100') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                // validacion fila 236 
                if (camposFila.CAMPO_22 == '99' && camposFila.CAMPO_64 != '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                // validacion fila 238
                if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_24 <= '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila  239 y 240 
                if (camposFila.CAMPO_23 == '3') {
                    if (camposFila.CAMPO_24 >= '3' && camposFila.CAMPO_24 <= '6') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 241
                if (camposFila.CAMPO_23 == '2' && camposFila.CAMPO_26 != '1') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 242 hasta 258
                if (camposFila.CAMPO_23 == '2') {
                    if (camposFila.CAMPO_8 == 'F' && camposFila.CAMPO_40 == '0' && camposFila.CAMPO_40_1 == '0' && camposFila.CAMPO_40_2 == '0' && camposFila.CAMPO_42 == '0' && camposFila.CAMPO_43 == '0' && camposFila.CAMPO_44 == '0' && camposFila.CAMPO_45 == 0 && camposFila.CAMPO_46 == '0' && camposFila.CAMPO_47_1 == 0 && camposFila.CAMPO_47_2 == 0 && camposFila.CAMPO_47_3 == 0 && camposFila.CAMPO_49 == '0' && camposFila.CAMPO_49_1 == '0' || camposFila.CAMPO_24 == '7' || camposFila.CAMPO_49 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 260
                if (camposFila.CAMPO_23 >= '4' && camposFila.CAMPO_24 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 261 y 262
                if (camposFila.CAMPO_23 >= 2) {
                    if (camposFila.CAMPO_25 == '9999' || camposFila.CAMPO_25 == '55555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 263 hasta 265
                if (camposFila.CAMPO_23 > '3') {
                    if (camposFila.CAMPO_40 == '9999' && camposFila.CAMPO_40_1 == '9999' && camposFila.CAMPO_40_2 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 266
                if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_49 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 268 hasta 271
                if (camposFila.CAMPO_24 == '1') {
                    if (camposFila.CAMPO_25 >= '1' && camposFila.CAMPO_25 < '5' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 272 hasta 274
                if (camposFila.CAMPO_24 == '2') {
                    if (camposFila.CAMPO_25 < '1' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 275 hasta 277
                if (camposFila.CAMPO_24 == '0') {
                    if (camposFila.CAMPO_25 >= '5' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 278 y 279
                if (camposFila.CAMPO_24 == '9999') {
                    if (camposFila.CAMPO_31 == '9999' && camposFila.CAMPO_25 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 280
                if (camposFila.CAMPO_24 == '7' && camposFila.CAMPO_23 == '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 282
                if (camposFila.CAMPO_25 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 287
                if (camposFila.CAMPO_25 <= '40' && camposFila.CAMPO_23 <= '1') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 288
                if (camposFila.CAMPO_25 == '9999' && camposFila.CAMPO_23 >= '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 290
                if (camposFila.CAMPO_26 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 294
                if (camposFila.CAMPO_27 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 298 hasta 300
                if (camposFila.CAMPO_27 == '1') {
                    if (camposFila.CAMPO_23 == '1' || camposFila.CAMPO_23 == '2' || camposFila.CAMPO_23 >= '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 301
                if (camposFila.CAMPO_27 == '10' && camposFila.CAMPO_23 <= '1') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 302
                if (camposFila.CAMPO_27 == '6' && camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 303 y 304
                if (camposFila.CAMPO_27 == '9999') {
                    if (camposFila.CAMPO_23 > 3 && camposFila.CAMPO_28 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 306
                if (camposFila.CAMPO_28 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 312 
                if (camposFila.CAMPO_28 == '9999' && camposFila.CAMPO_23 > '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 314
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01') && camposFila.CAMPO_23 > 3) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 315 y 316 
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1800-01-01')) {
                    if (camposFila.CAMPO_64 != '2' && camposFila.CAMPO_23 <= '3') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 317 
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 318
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01') && camposFila.CAMPO_23 <= '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 326 hasta 336
                if (camposFila.CAMPO_30 == '7') {
                    if (camposFila.CAMPO_31 == '6' && camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_3 == '0' && camposFila.CAMPO_32_4 == '0' && camposFila.CAMPO_33 == '4' && camposFila.CAMPO_34 == '2' && camposFila.CAMPO_35 == '0' && camposFila.CAMPO_36 == '0' && camposFila.CAMPO_37 == '0' && camposFila.CAMPO_38 == '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 337 hasta 339
                if (camposFila.CAMPO_30 <= '1') {
                    if (camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_60 == '0' || camposFila.CAMPO_60 == '99') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 340 hasta 342
                if (camposFila.CAMPO_30 == '8') {
                    if (camposFila.CAMPO_61 > '1500000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 343 hasta 345
                if (camposFila.CAMPO_30 == '11') {
                    if (camposFila.CAMPO_61 > '1000000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 346 y 347
                if (camposFila.CAMPO_30 == '2') {
                    if (camposFila.CAMPO_61 > '1500000' || camposFila.CAMPO_61 == '99') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 348 y 349
                if (camposFila.CAMPO_30 == '3') {
                    if (camposFila.CAMPO_61 > '1000000' || camposFila.CAMPO_61 == '99') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 350 hasta 352
                if (camposFila.CAMPO_30 == '9') {
                    if (camposFila.CAMPO_61 > '1000000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 353 hasta 355
                if (camposFila.CAMPO_30 == '10') {
                    if (camposFila.CAMPO_61 > '1500000' && camposFila.CAMPO_60 > '200000' || camposFila.CAMPO_61 == '99') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 363 hasta 365
                if (camposFila.CAMPO_30 == '0') {
                    if (camposFila.CAMPO_23 == '0' || camposFila.CAMPO_23 == '3' || camposFila.CAMPO_23 == '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 366 y 367 
                if (camposFila.CAMPO_30 == '1') {
                    if (camposFila.CAMPO_23 == '1' || camposFila.CAMPO_23 == '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 368 hasta 370
                if (camposFila.CAMPO_30 == '2') {
                    if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '3' || camposFila.CAMPO_48 == '5555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 371 y 372
                if (camposFila.CAMPO_30 == '3') {
                    if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 != '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 373
                if (camposFila.CAMPO_30 == '7' && camposFila.CAMPO_23 <= '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion campo 374 y 375
                if (camposFila.CAMPO_30 == '8') {
                    if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_48 != '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 376 y 377
                if (camposFila.CAMPO_30 == '9') {
                    if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_48 != '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 378 y 379
                if (camposFila.CAMPO_30 == '10') {
                    if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_48 != '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 380 y 381 
                if (camposFila.CAMPO_30 == '11') {
                    if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_48 != '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 382
                if (camposFila.CAMPO_30 == '12' && camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                // validacion fila 383 hasta 385
                if (camposFila.CAMPO_30 == '15') {
                    if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '3' || camposFila.CAMPO_48 == '5555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 386 y 387
                if (camposFila.CAMPO_30 == '16') {
                    if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_48 <= '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 388 y 389
                if (camposFila.CAMPO_30 == '17') {
                    if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 390 y 391
                if (camposFila.CAMPO_30 == '18') {
                    if (camposFila.CAMPO_23 <= '1' && camposFila.CAMPO_48 <= '2') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 392 y 393
                if (camposFila.CAMPO_30 == '9996') {
                    if (camposFila.CAMPO_23 <= '3' && camposFila.CAMPO_64 == '9') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 394 y 395
                if (camposFila.CAMPO_30 == '9999') {
                    if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_64 == '9') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 396 hasta 398
                if (camposFila.CAMPO_30 == '12') {
                    if (camposFila.CAMPO_60 > '2000000' || camposFila.CAMPO_60 == '99' || camposFila.CAMPO_60 == '933500') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 399 y 400
                if (camposFila.CAMPO_30 == '15') {
                    if (camposFila.CAMPO_62 > '4000000' && camposFila.CAMPO_34 == '3') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 401
                if (camposFila.CAMPO_30 == '16' && camposFila.CAMPO_62 > '4000000') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                // validacion fila 402
                if (camposFila.CAMPO_30 == '17' && camposFila.CAMPO_62 > '4000000') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 403
                if (camposFila.CAMPO_30 == '18' && camposFila.CAMPO_62 > '4000000') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 404 y 405 
                if (camposFila.CAMPO_30 == '9996') {
                    if (camposFila.CAMPO_60 == '0' && camposFila.CAMPO_61 == '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 406 y 407
                if (camposFila.CAMPO_30 == '6') {
                    if (camposFila.CAMPO_32 == '0' && camposFila.CAMPO_31 == '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 409 hasta 413
                if (camposFila.CAMPO_31 == '0') {
                    if (camposFila.CAMPO_30 != '7' && camposFila.CAMPO_30 != '9999' && camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_4 > '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 414 hasta 420
                if (camposFila.CAMPO_31 == '1') {
                    if (camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' || camposFila.CAMPO_32_3 == '999955' || camposFila.CAMPO_32_4 == '5555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 421 hasta 424 
                if (camposFila.CAMPO_31 == '3') {
                    if (camposFila.CAMPO_32_2 == '9997' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' && camposFila.CAMPO_48_2 == '1') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 425 hasta 431 
                if (camposFila.CAMPO_31 == '2') {
                    if (camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' || camposFila.CAMPO_32_3 == '999955' || camposFila.CAMPO_32_4 == '5555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 432 hasta 438
                if (camposFila.CAMPO_31 == '4') {
                    if (camposFila.CAMPO_32_1 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997' && camposFila.CAMPO_48_2 == '1' || camposFila.CAMPO_32_3 == '999955' || camposFila.CAMPO_32_4 == '5555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                // validacion fila 439 a 443
                if (camposFila.CAMPO_31 == '5') {
                    if (camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_3 > '0' && camposFila.CAMPO_32_4 > '0' && camposFila.CAMPO_48_2 == '1') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 444 hasta 447
                if (camposFila.CAMPO_31 < '6') {
                    if (camposFila.CAMPO_34 < '2' || camposFila.CAMPO_34 == '3' || camposFila.CAMPO_34 == '4' || camposFila.CAMPO_34 == '5555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 448
                if (camposFila.CAMPO_31 < '6' && camposFila.CAMPO_35 != '0') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //valiadacion fila 449 hasta 451
                if (camposFila.CAMPO_31 < '6') {
                    if (camposFila.CAMPO_60 >= '0' || camposFila.CAMPO_61 >= '0' || camposFila.CAMPO_62 >= '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 452 hasta 454 
                if (camposFila.CAMPO_31 == '4') {
                    if (camposFila.CAMPO_30 >= '8' && camposFila.CAMPO_30 <= '11' || camposFila.CAMPO_30 == '16') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 455 hasta 457
                if (camposFila.CAMPO_31 == '5') {
                    if (camposFila.CAMPO_30 >= '8' && camposFila.CAMPO_30 <= '11' && camposFila.CAMPO_23 <= '1') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 458 hasta 461
                if (camposFila.CAMPO_31 == '3') {
                    if (camposFila.CAMPO_23 == '0' && camposFila.CAMPO_30 == '0' || camposFila.CAMPO_23 == '1' && camposFila.CAMPO_30 == '1') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 466 hasta 469  
                if (camposFila.CAMPO_31 == '7') {
                    if (camposFila.CAMPO_34 == '3' && camposFila.CAMPO_35 != '0' || camposFila.CAMPO_33 < '4' && camposFila.CAMPO_34 < 2) {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 370 hasta 374
                if (camposFila.CAMPO_31 == '6') {
                    if (camposFila.CAMPO_32_1 == '9998' && camposFila.CAMPO_32_2 == '0' && camposFila.CAMPO_32_3 == '0' && camposFila.CAMPO_32_4 == '0' && camposFila.CAMPO_55 == '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 375
                if (camposFila.CAMPO_31 == '6' && camposFila.CAMPO_30 == '7') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'Tipo de dato no valido',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                }
                //validacion fila 476 hasta 480
                if (camposFila.CAMPO_31 == '7') {
                    if (camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 481 hasta 486
                if (camposFila.CAMPO_31 == '8') {
                    if (camposFila.CAMPO_23 == '3' && camposFila.CAMPO_32_1 < '90' && camposFila.CAMPO_32_2 >= '1' && camposFila.CAMPO_32_2 <= '6' && camposFila.CAMPO_32_3 == '999997' && camposFila.CAMPO_32_4 == '9997') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 487 hasta 489
                if (camposFila.CAMPO_31 == '8') {
                    if (camposFila.CAMPO_33 < '4' && camposFila.CAMPO_34 < '2' && camposFila.CAMPO_35 != '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 490 hasta 497 
                if (camposFila.CAMPO_31 == '9996') {
                    if (camposFila.CAMPO_30 == '9996' && camposFila.CAMPO_32_1 == '9996' && camposFila.CAMPO_32_2 == '9996' && camposFila.CAMPO_32_3 == '999996' && camposFila.CAMPO_32_4 == '9996' && camposFila.CAMPO_33 == '9996' && camposFila.CAMPO_34 == '9996' && camposFila.CAMPO_35 == '0') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
                //validacion fila 498 hasta 504
                if (camposFila.CAMPO_31 == '9999') {
                    if (camposFila.CAMPO_30.CAMPO_30 == '9999' && camposFila.CAMPO_32_1 == '9999' && camposFila.CAMPO_32_2 == '9999' && camposFila.CAMPO_32_3 == '999999' && camposFila.CAMPO_32_4 == '9999' && camposFila.CAMPO_33 == '9999' && camposFila.CAMPO_34 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'Tipo de dato no valido',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                    }
                }
            }
        });
    }
}
exports.default = ValidacionContenidoPH;
