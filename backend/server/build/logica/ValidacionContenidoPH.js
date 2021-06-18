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
var moment = require('moment');
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
                //validacion afiliados mayores de edad
                if (camposFila.CAMPO_5 == 'CC' && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fehaMayorEdad)) {
                    console.log('entro 7');
                    console.log(new Date(camposFila.CAMPO_7));
                }
                else {
                    console.log('ERROR ---------------------------');
                    console.log('TIPO DE IDENTIFICACION NO CORRESPONDE A LA FECHA DE NACIMIENTO DEBE SER MAYOR DE EDAD' + ' ' + camposFila.CAMPO_7);
                }
                //validacion afiliados con 5años y cumplimiento del campo 56
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                    if (camposFila.CAMPO_56 == '0' || camposFila.CAMPO_56 == '5555' || camposFila.CAMPO_56 == '9996' || camposFila.CAMPO_56 == '9999') {
                        console.log('Entra validcion campo 56');
                    }
                    else {
                        console.log('Tipo de dat no valido' + ' ' + camposFila.CAMPO_56);
                    }
                }
                else {
                    console.log('el afiliado debe ser mayor a 5 años' + ' ' + camposFila.CAMPO_56);
                }
                //validacion afiliados con 5años y cumplimiento del campo 56-_1
                if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) > validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMenorEdad)) {
                    if (camposFila.CAMPO_56_1 == '0' || camposFila.CAMPO_56_1 == '5555' || camposFila.CAMPO_56_1 == '9996' || camposFila.CAMPO_56_1 == '9999') {
                        console.log('Entra validcion campo 56_1');
                    }
                    else {
                        console.log('Tipo de dat no valido' + ' ' + camposFila.CAMPO_56_1);
                    }
                }
                else {
                    console.log('el afiliado debe ser mayor a 5 años' + ' ' + camposFila.CAMPO_56_1);
                }
                //validacion afilidados masculino con el campo 23 
                if (camposFila.CAMPO_8 == 'M') {
                    if (camposFila.CAMPO_23 != 2) {
                        console.log('Entra campo 23');
                    }
                    else {
                        console.log('el dato no es valido' + ' ' + camposFila.CAMPO_23);
                    }
                }
                //validacion afiliado campo 17 y aceptacion
                if (camposFila.CAMPO_17 == 3 && camposFila.CAMPO_8 == 'M') {
                    console.log('entra campo 8 con respecto al 17');
                }
                else {
                    console.log('dato no valido  campo 8 con respecto al 17');
                }
                //validacion campo 17 con cumpliento
                if (camposFila.CAMPO_17 == 1) {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMaores60) && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMaores9)) {
                        console.log('entra campo 7 fecha de nacimiento con validacion del ca,po 17');
                    }
                    else {
                        console.log('No cumple con la condicion  7 fecha de nacimiento con validacion del ca,po 17');
                    }
                }
                //validacion campo 17 con campo 11
                if (camposFila.CAMPO_17 == 55 && camposFila.CAMPO_64 == 11) {
                    console.log('entra a validar campo 11 con validacion 17');
                }
                //validacion campo 17 con cumplimiento de campo 8
                if (camposFila.CAMPO_17 <= 2 && camposFila.CAMPO_8 == 'F') {
                    console.log('alidacion campo 17 con cumplimiento de campo 8');
                }
                else {
                    console.log('no cumple con la condicion n campo 17 con cumplimiento de campo 8');
                }
                //validacion campo 18 con cumplimiento campo 7
                if (camposFila.CAMPO_18 == 3) {
                    if (validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) >= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fehaMayorEdad) || validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_7) <= validacioncamposhemofilia_1.validacionhemofila.formatofecha(_this.fechaMayores70)) {
                        console.log('validacion campo 18 con cumplimiento campo 7');
                    }
                    else {
                        console.log('no cumple con la condicion campo 18 con cumplimiento campo 7');
                    }
                }
                //validacion campo 18 con cumplimiento campo 11
                if (camposFila.CAMPO_18 == 55 && camposFila.CAMPO_64 == 11) {
                    console.log('validacion campo 18 con cumplimiento campo 64');
                }
                else {
                    console.log('no cumple con la condicion campo 18 con cumplimiento campo 64');
                }
                //validacion campo 19 con cumplimiento camopo 64 y campo 21 
                if (camposFila.CAMPO_19 == 5555) {
                    if (camposFila.CAMPO_64 == 11 && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1846-01-01')) {
                        console.log('entra a  validacion cumplimiento campo 64 con cumplimiento campo 21');
                    }
                    else {
                        console.log('no cumple con la validacion cumplimiento campo 64 con cumplimiento campo 21');
                    }
                }
                ////validacion campo 19 con cumplimiento camopo 21
                if (camposFila.CAMPO_19 == 9998 && validacioncamposhemofilia_1.validacionhemofila.formatofecha(camposFila.CAMPO_21) == validacioncamposhemofilia_1.validacionhemofila.formatofecha('1811-01-01')) {
                    console.log('entra a  validacion con cumplimiento campo 21');
                }
                else {
                    console.log('no cumplelista  validacion con cumplimiento campo 21');
                }
            }
        });
    }
}
exports.default = ValidacionContenidoPH;
