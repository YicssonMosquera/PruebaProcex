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
        this.filas_buenas = {};
        this.filas_malas = {};
        this.totalCamposMalos = 0;
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
            _this.fechacorte = yield validacioncamposhemofilia_1.validacionhemofila.fechacorte();
            console.log(_this.fechacorte);
            //recorrer el array campos que son las filas del file txt
            for (let index = 0; index < arrayCampos.length; index++) {
                //get campo fila
                const camposFila = arrayCampos[index];
                var numFila = index + 1;
                //crear arreglos para adicionar campos buenos y malos
                var arrayCamposBuenos = [];
                var arrayCamposMalos = [];
                //validacion fila 7
                if (camposFila.CAMPO_5 == 'CC' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fehaMayorEdad)) {
                    console.log('entro 7');
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B896',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 10 hasta la fila 13
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                    if (camposFila.CAMPO_56 == '0' || camposFila.CAMPO_56 == '5555' || camposFila.CAMPO_56 == '9996' || camposFila.CAMPO_56 == '9999') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B4389',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 14 hasta la fila 17
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                    if (camposFila.CAMPO_56_1 == '0' || camposFila.CAMPO_56_1 == '5555' || camposFila.CAMPO_56_1 == '9996' || camposFila.CAMPO_56_1 == '9999') {
                        console.log('Entra validcion campo 56_1');
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B4390',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 18
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_66)) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B897',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 21  
                if (camposFila.CAMPO_8 == 'M') {
                    if (camposFila.CAMPO_23 != 2) {
                        console.log('Entra campo 23');
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B4557',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 205 y 206
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_16) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_66) && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_16) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7)) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B899 ',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 208
                if (camposFila.CAMPO_17 == '3' && camposFila.CAMPO_8 == 'M') {
                    console.log('entra campo 8 con respecto al 17');
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1566',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 209 y 210
                if (camposFila.CAMPO_17 == '1') {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMaores60) && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMaores9)) {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B1844',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 211
                if (camposFila.CAMPO_17 == '55' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2380',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 212
                if (camposFila.CAMPO_17 <= '2' && camposFila.CAMPO_8 == 'F') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B900',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 214 y 215
                if (camposFila.CAMPO_18 == '3') {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fehaMayorEdad) || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMayores70)) {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B1845',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 216 
                if (camposFila.CAMPO_18 == '55' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2381',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 218 y 219
                if (camposFila.CAMPO_19 == '5555') {
                    if (camposFila.CAMPO_64 == '11' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01')) {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B2382',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                ////validacion fila 220
                if (camposFila.CAMPO_19 == '9998' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2383',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 222
                if (camposFila.CAMPO_20 == '55' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2384',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 223 y 224
                if (camposFila.CAMPO_20 <= '4' || camposFila.CAMPO_20 == '55') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3978',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 226
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01') && camposFila.CAMPO_64 != '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1558',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 227
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1800-01-01') && camposFila.CAMPO_64 != '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2386',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 228
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2387',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 229 
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7)) {
                    if (camposFila.CAMPO_19 < '100') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B2388',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 230 hasta 234
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_66) && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha('1800-01-01') || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01') || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B901 ',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                // validacion fila 236 
                if (camposFila.CAMPO_22 == '99' && camposFila.CAMPO_64 != '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2389',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                // validacion fila 238
                if (camposFila.CAMPO_23 == '1' && camposFila.CAMPO_24 <= '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1158',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2392',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B2553',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2558',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 259
                if (camposFila.CAMPO_23 > '12') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3987',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 260
                if (camposFila.CAMPO_23 >= '4' && camposFila.CAMPO_24 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3988',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B3989',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4376',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B4377',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1160',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1161',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1563',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1587',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B2554',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 282
                if (camposFila.CAMPO_25 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2393',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 283 hasta 286
                if (camposFila.CAMPO_25 <= '40' || camposFila.CAMPO_25 == '9999' || camposFila.CAMPO_25 == '5555' || camposFila.CAMPO_25 == '3333') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3990',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 287
                if (camposFila.CAMPO_25 <= '40' && camposFila.CAMPO_23 <= '1') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3991',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 288
                if (camposFila.CAMPO_25 == '9999' && camposFila.CAMPO_23 >= '2') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B933',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 290
                if (camposFila.CAMPO_26 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2394',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 291 y 292
                if (camposFila.CAMPO_26 <= '2' || camposFila.CAMPO_26 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2395',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 294
                if (camposFila.CAMPO_27 == '5555' && camposFila.CAMPO_64 == '11') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2396',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion campo 295 hasta 297
                if (camposFila.CAMPO_27 <= '10' || camposFila.CAMPO_27 == '9999' || camposFila.CAMPO_27 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3992',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B3993',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B3994',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 302
                if (camposFila.CAMPO_27 == '6' && camposFila.CAMPO_23 == '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3995',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B935',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B2397',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 307 hasta 311
                if (camposFila.CAMPO_28 <= '1' || camposFila.CAMPO_28 == '5' || camposFila.CAMPO_28 == '6' || camposFila.CAMPO_28 == '9999' || camposFila.CAMPO_28 == '5555') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3996',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 312 
                if (camposFila.CAMPO_28 == '9999' && camposFila.CAMPO_23 > '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B936 ',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 314
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01') && camposFila.CAMPO_23 > 3) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B1559',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1565',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B2398',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 318
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01') && camposFila.CAMPO_23 <= '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3997',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 319 hasta 324
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64) && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1800-01-01') || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01') || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01') || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01')) {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B902',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1848',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2453',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2459',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2460',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2461',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2462',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2555',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2556',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 356 hasta 362
                if (camposFila.CAMPO_30 < '13' || camposFila.CAMPO_30 == '15' || camposFila.CAMPO_30 == '16' || camposFila.CAMPO_30 == '17' || camposFila.CAMPO_30 == '18' || camposFila.CAMPO_30 == '9996' || camposFila.CAMPO_30 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B3998',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B3999',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4000',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4001',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4002',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B4003',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4004',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4005',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4006',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4007',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B4008',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4009',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4010',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4011',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4012',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4013',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4014',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4016',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4017',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B4018',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                // validacion fila 402
                if (camposFila.CAMPO_30 == '17' && camposFila.CAMPO_62 > '4000000') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4019',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 403
                if (camposFila.CAMPO_30 == '18' && camposFila.CAMPO_62 > '4000000') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4020',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4021',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4115',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1168',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1170',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1560',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1567',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1568',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1570',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1853',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B1854',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1855',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1859',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B1861',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2403',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 462 hasta  465 
                if (camposFila.CAMPO_31 >= '0' && camposFila.CAMPO_31 <= '8' || camposFila.CAMPO_31 == '9999' || camposFila.CAMPO_31 == '9996') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B2571',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2576o',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B2657',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                        DESCRIPCION_ERROR: 'B4022',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4023',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4024',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4025',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4026',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
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
                            DESCRIPCION_ERROR: 'B4027',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 505 y 506
                if (camposFila.CAMPO_31 < '6') {
                    if (camposFila.CAMPO_33 < '4' || camposFila.CAMPO_33 == '5555') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B4342',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 507
                if (camposFila.CAMPO_31 == '1' && camposFila.CAMPO_48 != '4') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4379',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 508 
                if (camposFila.CAMPO_31 == '2' && camposFila.CAMPO_48 != '4') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4380',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 509 
                if (camposFila.CAMPO_31 == '7' && camposFila.CAMPO_48 != '4') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4381',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 510 y 511
                if (camposFila.CAMPO_31 == '5') {
                    if (camposFila.CAMPO_32_3 > '0' && camposFila.CAMPO_32_3 <= '900000') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B4382',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 512
                if (camposFila.CAMPO_31 == '0' && camposFila.CAMPO_34 != '3') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B5424',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 514 y 515
                if (camposFila.CAMPO_32 >= '2' && camposFila.CAMPO_32 <= '250') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B903',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 517 hasta 521
                if (camposFila.CAMPO_32_1 < '90') {
                    if (camposFila.CAMPO_31 == '1' || camposFila.CAMPO_31 == '2' || camposFila.CAMPO_31 == '4' || camposFila.CAMPO_31 == '7' || camposFila.CAMPO_31 == '8') {
                        arrayCamposBuenos.push(camposFila);
                    }
                    else {
                        var hemofilia = {
                            //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                            TIPO_ERROR: 'CD',
                            DESCRIPCION_ERROR: 'B4384',
                            USUARIO_CREACION: '',
                            USUARIO_MODIFICACION: '',
                            VALOR_ANTERIOR: '',
                            VALOR_NUEVO: '',
                            NUMERO_REGISTRO: numFila
                        };
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 522 hasta la 527
                if (camposFila.CAMPO_32_1 > '0' && camposFila.CAMPO_32_1 < '90' || camposFila.CAMPO_32_1 == '9998' || camposFila.CAMPO_32_1 == '9999' || camposFila.CAMPO_32_1 == '9997' || camposFila.CAMPO_32_1 == '9996') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B904',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 529 hasta 532
                if (camposFila.CAMPO_32_2 < '8' || camposFila.CAMPO_32_2 == '9996' || camposFila.CAMPO_32_2 == '9997' || camposFila.CAMPO_32_2 == '9999') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B4028',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 534 hasta 539 
                if (camposFila.CAMPO_32_3 >= '0' && camposFila.CAMPO_32_3 <= '900000' || camposFila.CAMPO_32_3 == '999997' || camposFila.CAMPO_32_3 == '999999' || camposFila.CAMPO_32_3 == '999996' || camposFila.CAMPO_32_3 == '999955') {
                    arrayCamposBuenos.push(camposFila);
                }
                else {
                    var hemofilia = {
                        //  NUMERO_CAMPO: validacioncampo.NUM_CAMPO,
                        TIPO_ERROR: 'CD',
                        DESCRIPCION_ERROR: 'B905',
                        USUARIO_CREACION: '',
                        USUARIO_MODIFICACION: '',
                        VALOR_ANTERIOR: '',
                        VALOR_NUEVO: '',
                        NUMERO_REGISTRO: numFila
                    };
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 558 hasta 560
                if (camposFila.CAMPO_35 > '0') {
                    if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_62 > '0' || camposFila.CAMPO_61 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 562 hasta 564
                if (camposFila.CAMPO_36 > '0') {
                    if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_61 > '0' || camposFila.CAMPO_62 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 565
                if (camposFila.CAMPO_36 != '0' && camposFila.CAMPO_35 != '0') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 567 hasta 569
                if (camposFila.CAMPO_37 > '0') {
                    if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_61 > '0' || camposFila.CAMPO_62 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 570 y 571
                if (camposFila.CAMPO_37 != '0') {
                    if (camposFila.CAMPO_35 != '0' && camposFila.CAMPO_36 != '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 573 hasta 575 
                if (camposFila.CAMPO_38 > '0') {
                    if (camposFila.CAMPO_60 > '0' || camposFila.CAMPO_61 > '0' || camposFila.CAMPO_62 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 576 hasta 578
                if (camposFila.CAMPO_38 != '0') {
                    if (camposFila.CAMPO_35 != '0' && camposFila.CAMPO_36 != '0' && camposFila.CAMPO_37 != '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion  fila 581 y 582 
                if (camposFila.CAMPO_40 == '0') {
                    if (camposFila.CAMPO_40_1 == '0' && camposFila.CAMPO_40_2 == '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 583 y 584
                if (camposFila.CAMPO_40 == '1') {
                    if (camposFila.CAMPO_40_1 != '0' || camposFila.CAMPO_40_2 != '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 585 hasta 587
                if (camposFila.CAMPO_40 == '5555') {
                    if (camposFila.CAMPO_40_1 == '5555' && camposFila.CAMPO_40_2 == '5555' && camposFila.CAMPO_64 == '11') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 592 y 593
                if (camposFila.CAMPO_40 == '1') {
                    if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 594
                if (camposFila.CAMPO_40 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 596
                if (camposFila.CAMPO_40_1 <= '60' && camposFila.CAMPO_23 <= '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 397
                if (camposFila.CAMPO_40_1 <= '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 604 
                if (camposFila.CAMPO_40_2 <= '60' && camposFila.CAMPO_23 <= '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 605
                if (camposFila.CAMPO_40_2 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 612 hasta 614 
                if (camposFila.CAMPO_41 >= '1') {
                    if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacio fila 620
                if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validaion fila 622 hasta 624
                if (camposFila.CAMPO_40_2 >= '1') {
                    if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 630
                if (camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 632 hasta 634
                if (camposFila.CAMPO_43 >= '1') {
                    if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 640
                if (camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 642 hasta 644
                if (camposFila.CAMPO_44 >= '1') {
                    if (camposFila.CAMPO_47_3 > '0' || camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 650
                if (camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //vañidacion fila 652 hasta 654
                if (camposFila.CAMPO_45 >= '1') {
                    if (camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0' || camposFila.CAMPO_47_3 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 660
                if (camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 662 hasta 664
                if (camposFila.CAMPO_46 >= '1') {
                    if (camposFila.CAMPO_47_1 > '0' || camposFila.CAMPO_47_2 > '0' || camposFila.CAMPO_47_3 > '0') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 670 
                if (camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 672
                if (camposFila.CAMPO_47_1 <= '60' && camposFila.CAMPO_23 <= '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 673 hasta 681
                if (camposFila.CAMPO_47_1 == '9999') {
                    if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_47_2 == '9999' && camposFila.CAMPO_47_3 == '9999' && camposFila.CAMPO_23 > '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 682 hasta 689
                if (camposFila.CAMPO_47_1 == '5555') {
                    if (camposFila.CAMPO_41 == '5555' && camposFila.CAMPO_42 == '5555' && camposFila.CAMPO_43 == '5555' && camposFila.CAMPO_44 == '5555' && camposFila.CAMPO_45 == '5555' && camposFila.CAMPO_46 == '5555' && camposFila.CAMPO_47_2 == '5555' && camposFila.CAMPO_47_3 == '5555') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 696 hasta 704
                if (camposFila.CAMPO_47_2 == '9999') {
                    if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_47_1 == '9999' && camposFila.CAMPO_47_3 == '9999' && camposFila.CAMPO_23 > '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 705
                if (camposFila.CAMPO_47_2 <= '60' && camposFila.CAMPO_23 <= '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 706 hasta 713
                if (camposFila.CAMPO_47_2 == '5555') {
                    if (camposFila.CAMPO_41 == '5555' && camposFila.CAMPO_42 == '5555' && camposFila.CAMPO_43 == '5555' && camposFila.CAMPO_44 == '5555' && camposFila.CAMPO_45 == '5555' && camposFila.CAMPO_46 == '5555' && camposFila.CAMPO_47_1 == '5555' && camposFila.CAMPO_47_3 == '5555') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 720 hasta 728
                if (camposFila.CAMPO_47_3 == '9999') {
                    if (camposFila.CAMPO_41 == '9999' && camposFila.CAMPO_42 == '9999' && camposFila.CAMPO_43 == '9999' && camposFila.CAMPO_44 == '9999' && camposFila.CAMPO_45 == '9999' && camposFila.CAMPO_46 == '9999' && camposFila.CAMPO_47_1 == '9999' && camposFila.CAMPO_47_2 == '9999' && camposFila.CAMPO_23 > '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 729
                if (camposFila.CAMPO_47_3 <= '60' && camposFila.CAMPO_23 <= '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 730 hasta 737
                if (camposFila.CAMPO_47_3 == '5555') {
                    if (camposFila.CAMPO_41 == '5555' && camposFila.CAMPO_42 == '5555' && camposFila.CAMPO_43 == '5555' && camposFila.CAMPO_44 == '5555' && camposFila.CAMPO_45 == '5555' && camposFila.CAMPO_46 == '5555' && camposFila.CAMPO_47_1 == '5555' && camposFila.CAMPO_47_2 == '5555') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 744 y 745
                if (camposFila.CAMPO_48 == '5555') {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 750 y 751 
                if (camposFila.CAMPO_48 <= '2') {
                    if (camposFila.CAMPO_23 <= '1' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha('2019-02-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 752 hasta 754 
                if (camposFila.CAMPO_48 == '3') {
                    if (camposFila.CAMPO_23 <= '1' || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01') && camposFila.CAMPO_23 == '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 755 hasta 757 
                if (camposFila.CAMPO_48 == '4') {
                    if (camposFila.CAMPO_23 <= '1' || camposFila.CAMPO_23 == '3' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 758 y 759
                if (camposFila.CAMPO_48 == '5') {
                    if (camposFila.CAMPO_23 == '3' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('2019-02-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 760 y 761 
                if (camposFila.CAMPO_48 == '9996') {
                    if (camposFila.CAMPO_23 <= '3' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 762 hasta 764
                if (camposFila.CAMPO_48 == '9999') {
                    if (camposFila.CAMPO_23 == '2' || camposFila.CAMPO_24 > '3' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 765
                if (camposFila.CAMPO_48 == '6' && camposFila.CAMPO_23 == '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 767
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_48_1) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01') && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 776
                if (camposFila.CAMPO_48_2 == '1' && camposFila.CAMPO_23 <= '1') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 777
                if (camposFila.CAMPO_48_2 == '9999' && camposFila.CAMPO_23 > '1') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 779 hasta 781
                if (camposFila.CAMPO_48_3 == '0') {
                    if (camposFila.CAMPO_48_4 == '9998' && camposFila.CAMPO_31 < '3' || camposFila.CAMPO_31 > '5') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 782 
                if (camposFila.CAMPO_48_3 == '1' && camposFila.CAMPO_48 <= '2') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 783 y784
                if (camposFila.CAMPO_48_3 == '1') {
                    if (camposFila.CAMPO_48_4 >= '1' && camposFila.CAMPO_48_4 <= '365') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 785 hasta 788
                if (camposFila.CAMPO_42 == '2') {
                    if (camposFila.CAMPO_48_4 > '0' && camposFila.CAMPO_48_4 <= '365' && camposFila.CAMPO_31 >= '3' && camposFila.CAMPO_31 <= '5') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 789
                if (camposFila.CAMPO_48_3 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                if (camposFila.CAMPO_48_3 == '2') {
                    if (camposFila.CAMPO_30 < '2' || camposFila.CAMPO_30 == '8' || camposFila.CAMPO_30 == '9' || camposFila.CAMPO_30 == '10' || camposFila.CAMPO_30 == '11') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 799
                if (camposFila.CAMPO_48_3 == '3' && camposFila.CAMPO_30 == '18') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 800 y 801
                if (camposFila.CAMPO_48_3 == '9999') {
                    if (camposFila.CAMPO_23 >= '2' && camposFila.CAMPO_48_4 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 802
                if (camposFila.CAMPO_48_3 == '9996' && camposFila.CAMPO_48_4 == '9996') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validaicon fila 804
                if (camposFila.CAMPO_48_4 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 812
                if (camposFila.CAMPO_49 == '0' && camposFila.CAMPO_49_1 == '0') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 813 y 814
                if (camposFila.CAMPO_49 == '1') {
                    if (camposFila.CAMPO_49_1 > '0' && camposFila.CAMPO_49_1 < '30') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 815
                if (camposFila.CAMPO_49_1 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 820
                if (camposFila.CAMPO_49 == '1') {
                    if (camposFila.CAMPO_23 < '2' && camposFila.CAMPO_23 == '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 822 hasta 824 
                if (camposFila.CAMPO_49 == '9999') {
                    if (camposFila.CAMPO_23 == '2' || camposFila.CAMPO_23 > '3' && camposFila.CAMPO_49_1 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 832
                if (camposFila.CAMPO_50 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 837
                if (camposFila.CAMPO_50 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 839
                if (camposFila.CAMPO_51 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 844
                if (camposFila.CAMPO_51 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 846
                if (camposFila.CAMPO_52 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 851 
                if (camposFila.CAMPO_52 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 853
                if (camposFila.CAMPO_53 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 858 y 859
                if (camposFila.CAMPO_53 == '1') {
                    if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 860 
                if (camposFila.CAMPO_53 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 862 
                if (camposFila.CAMPO_54 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 867 y 868
                if (camposFila.CAMPO_54 == '1') {
                    if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
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
                //validacion fila 869
                if (camposFila.CAMPO_54 == '9999' && camposFila.CAMPO_23 > '3') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 871
                if (camposFila.CAMPO_55 == '1' && camposFila.CAMPO_55_1 != '0') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 872
                if (camposFila.CAMPO_55 == '0' && camposFila.CAMPO_55_1 == '0') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 873 y 874 
                if (camposFila.CAMPO_55 == '5555') {
                    if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_64 == '11') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 879 y 880
                if (camposFila.CAMPO_55 == '1') {
                    if (camposFila.CAMPO_23 < '2' || camposFila.CAMPO_23 == '3') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 881 y 882
                if (camposFila.CAMPO_55 == '9999') {
                    if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_55_1 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 884
                if (camposFila.CAMPO_55_1 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 886
                if (camposFila.CAMPO_56 == '9999' && camposFila.CAMPO_56_1 == '9999') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 891 y 892
                if (camposFila.CAMPO_56 == '0') {
                    if (camposFila.CAMPO_56_1 == '0' || camposFila.CAMPO_56_1 == '9996') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 893
                if (camposFila.CAMPO_56 == '5555' && camposFila.CAMPO_56_1 == '5555') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 894
                if (camposFila.CAMPO_56 <= '20' && camposFila.CAMPO_23 < '2') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 896 
                if (camposFila.CAMPO_56_1 <= '20' && camposFila.CAMPO_56 <= '20') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 903 hasta 905
                if (camposFila.CAMPO_57 == '9996') {
                    if (camposFila.CAMPO_57_1 == '9996' && camposFila.CAMPO_57_2 == '9996' && camposFila.CAMPO_64 == '9') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 906
                if (camposFila.CAMPO_57 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 912
                if (camposFila.CAMPO_57_1 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 519
                if (camposFila.CAMPO_57_2 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 926
                if (camposFila.CAMPO_57_3 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //valdacion fila 933
                if (camposFila.CAMPO_57_4 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 940
                if (camposFila.CAMPO_57_5 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 947 
                if (camposFila.CAMPO_57_6 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 954
                if (camposFila.CAMPO_57_7 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 961
                if (camposFila.CAMPO_57_8 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 968
                if (camposFila.CAMPO_57_9 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 981
                if (camposFila.CAMPO_57_11 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 986
                if (camposFila.CAMPO_58 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 987 hasta 991
                if (camposFila.CAMPO_58 == '9999') {
                    if (camposFila.CAMPO_23 > '3' && camposFila.CAMPO_40 == '9999' && camposFila.CAMPO_47_1 == '9999' && camposFila.CAMPO_47_2 == '9999' && camposFila.CAMPO_47_3 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 997
                if (camposFila.CAMPO_59 == '5555' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 1003 hasta 1005
                if (camposFila.CAMPO_60 == '99') {
                    if (camposFila.CAMPO_10 == 'S' || camposFila.CAMPO_10 == 'E' || camposFila.CAMPO_10 == 'C') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1011 y 1012
                if (camposFila.CAMPO_61 == '99') {
                    if (camposFila.CAMPO_10 == 'S' || camposFila.CAMPO_10 == 'E') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1026
                if (camposFila.CAMPO_64 == '4' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) != validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 1027
                if (camposFila.CAMPO_64 == '4' && camposFila.CAMPO_64_1 != '98') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 1028
                if (camposFila.CAMPO_64 == '10' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) != validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 1029
                if (camposFila.CAMPO_64 == '10' && camposFila.CAMPO_64_1 != '98') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 1030 y 1031 
                if (camposFila.CAMPO_64 < '4') {
                    if (camposFila.CAMPO_64_1 == '98' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1032 y 1033
                if (camposFila.CAMPO_64 == '5') {
                    if (camposFila.CAMPO_64_1 == '98' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1034 y 1035
                if (camposFila.CAMPO_64 == '7') {
                    if (camposFila.CAMPO_64_1 == '98' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1036 y 1037
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_64_1 == '98' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1038 hasta 1042
                if (camposFila.CAMPO_64 == '2') {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) != validacioncamposhemofilia_1.validacionhemofila.formatofecha('1800-01-01') && camposFila.CAMPO_22 != '99' && camposFila.CAMPO_27 != '4' && camposFila.CAMPO_28 != '6' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_29) != validacioncamposhemofilia_1.validacionhemofila.formatofecha('1800-01-01')) {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                    //validacion fila 1043 hasta 1045
                    if (camposFila.CAMPO_64 == '9') {
                        if (camposFila.CAMPO_61 == '0' && camposFila.CAMPO_62 == '0' && camposFila.CAMPO_60 == '0') {
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
                            arrayCamposMalos.push(hemofilia);
                            _this.totalCamposMalos = this.totalCamposMalos + 1;
                        }
                    }
                    //validacion fila 1046 y 1047
                    if (camposFila.CAMPO_64 == '9') {
                        if (camposFila.CAMPO_40 == '9996' || camposFila.CAMPO_40 == '9999') {
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
                            arrayCamposMalos.push(hemofilia);
                            _this.totalCamposMalos = this.totalCamposMalos + 1;
                        }
                    }
                }
                //validacion fila 1048 y 1049
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_40_1 == '9996' || camposFila.CAMPO_40_1 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1050 y 1051
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_40_2 == '9996' || camposFila.CAMPO_40_2 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1052 y 1053
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_41 == '9996' || camposFila.CAMPO_41 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1054 y 1055
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_42 == '9996' || camposFila.CAMPO_42 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1056 y 1057
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_43 == '9996' || camposFila.CAMPO_43 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1058 y 1059
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_44 == '9996' || camposFila.CAMPO_44 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1060 y 1061
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_45 == '9996' || camposFila.CAMPO_45 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1062 y 1063
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_46 == '9996' || camposFila.CAMPO_46 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1064 y 1065
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_47_1 == '9996' || camposFila.CAMPO_47_1 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1066 y 1067
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_47_2 == '9996' || camposFila.CAMPO_47_2 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1068 y 1069
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_47_3 == '9996' || camposFila.CAMPO_47_3 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1070 y 1071
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_48_3 == '9996' || camposFila.CAMPO_48_3 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1072 y 1073
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_48_4 == '9996' || camposFila.CAMPO_48_4 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1074 y 1075
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_53 == '9996' || camposFila.CAMPO_53 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1076 y 1077
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_54 == '9996' || camposFila.CAMPO_54 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1078 y 1079
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_55 == '9996' || camposFila.CAMPO_55 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1080 y 1081
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_55_1 == '9996' || camposFila.CAMPO_55_1 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1082 y 1083
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_58 == '0' || camposFila.CAMPO_58 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1084 y 1085
                if (camposFila.CAMPO_64 == '9') {
                    if (camposFila.CAMPO_59 == '0' || camposFila.CAMPO_59 == '9999') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1086
                if (camposFila.CAMPO_64 == '9' && camposFila.CAMPO_57 == '9996') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 1087 hasta 1089
                if (camposFila.CAMPO_64 == '11') {
                    if (camposFila.CAMPO_40 == '5555' && camposFila.CAMPO_40_1 == '5555' && camposFila.CAMPO_40_2 == '55555') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1091 y 1092
                if (camposFila.CAMPO_64_1 == '98') {
                    if (camposFila.CAMPO_64 != '4' && camposFila.CAMPO_64 != '10') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1091 y 1092
                if (camposFila.CAMPO_64_1 == '98') {
                    if (camposFila.CAMPO_64 != '4' && camposFila.CAMPO_64 != '10') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1093
                if (camposFila.CAMPO_64_1 == '55' && camposFila.CAMPO_64 == '11') {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //validacion fila 1098 y 1099
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1845-01-01')) {
                    if (camposFila.CAMPO_64_1 == '98' || camposFila.CAMPO_64_1 == '55') {
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
                        arrayCamposMalos.push(hemofilia);
                        _this.totalCamposMalos = this.totalCamposMalos + 1;
                    }
                }
                //validacion fila 1100
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_64_2) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha('2020-02-01') && camposFila.CAMPO_48_1 < camposFila.CAMPO_64_2) {
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
                    arrayCamposMalos.push(hemofilia);
                    _this.totalCamposMalos = this.totalCamposMalos + 1;
                }
                //guardar los arreglos campos buenos y malos
                _this.filas_buenas['fila_' + numFila] = arrayCamposBuenos;
                _this.filas_malas['fila_' + numFila] = arrayCamposMalos;
                // console.log('filas malas -----------------------------------------------')
                // console.log(_this.filas_buenas);
            }
        });
    }
}
exports.default = ValidacionContenidoPH;
