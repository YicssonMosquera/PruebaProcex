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
exports.validacionhemofila = void 0;
const BdParametroAplicacion_1 = __importDefault(require("../dao/BdParametroAplicacion"));
var moment = require('moment');
class Validacionhemofila {
    isObligatorio(validacion) {
        if (validacion == "S") {
            return true;
        }
        return false;
    }
    isnoObligatorio(validacion) {
        if (validacion == "N") {
            return true;
        }
        return false;
    }
    isVoid(valorcampo) {
        if (valorcampo.trim().length != 0) {
            return true;
        }
        return false;
    }
    isMaxMin(campo, min, max) {
        if (campo.trim().length < min || campo.trim().length > max) {
            return true;
        }
        return false;
    }
    ismax(campo, max) {
        if (campo.trim().length > max) {
            return true;
        }
        return false;
    }
    isRango(valores, campo) {
        let validacion = valores.split('-');
        if (campo >= validacion[0] && campo <= validacion[1]) {
            return true;
        }
        return false;
    }
    isCohincidencia(valores, campo) {
        let validacion = valores.split(',');
        if (validacion.includes(campo)) {
            return true;
        }
        return false;
    }
    isRangocohincidencia(valores, campo) {
        let validacion = valores.split(',');
        let validacion2 = valores.split('-');
        if (campo >= validacion2[0] && campo <= validacion2[1] || validacion.includes(campo)) {
            return true;
        }
        return false;
    }
    validacioncampo30(valores, campo) {
        let validacion = valores.split(',');
        let validacion2 = valores.split('-');
        if (campo >= validacion2[0] && campo <= validacion2[1] || campo >= validacion2[2] && campo <= validacion2[3] || validacion.includes(campo)) {
            return true;
        }
        return false;
    }
    formatofecha(Fecha) {
        var formatoFecha = moment(new Date(Fecha)).format('YYYY-MM-DD');
        return formatoFecha;
    }
    calcularMayorEdad() {
        return __awaiter(this, void 0, void 0, function* () {
            var fechacorte;
            var fehaMayorEdad;
            const fechaCorte = yield BdParametroAplicacion_1.default.fechaCorte();
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaM = fechacorte.getFullYear() - 18;
                var fechamayoredad = calculoFechaM + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fehaMayorEdad = new Date(fechamayoredad);
                return fehaMayorEdad;
            }
        });
    }
    CalcularMenorEdad() {
        return __awaiter(this, void 0, void 0, function* () {
            var fechacorte;
            var fechaMenorEdad;
            const fechaCorte = yield BdParametroAplicacion_1.default.fechaCorte();
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaMe = fechacorte.getFullYear() - 5;
                var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fechaMenorEdad = new Date(fechamenorEdad);
                return fechaMenorEdad;
            }
        });
    }
    calcularAfiliadosde60Añ0s() {
        return __awaiter(this, void 0, void 0, function* () {
            var fechacorte;
            var fechaMaores60;
            const fechaCorte = yield BdParametroAplicacion_1.default.fechaCorte();
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaMe = fechacorte.getFullYear() - 60;
                var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fechaMaores60 = new Date(fechamenorEdad);
                return fechaMaores60;
            }
        });
    }
    calcularAfiliadosde9Años() {
        return __awaiter(this, void 0, void 0, function* () {
            var fechacorte;
            var fechaMaores9;
            const fechaCorte = yield BdParametroAplicacion_1.default.fechaCorte();
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaMe = fechacorte.getFullYear() - 9;
                var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fechaMaores9 = new Date(fechamenorEdad);
                return fechaMaores9;
            }
        });
    }
    calcularAfiliadosde70Años() {
        return __awaiter(this, void 0, void 0, function* () {
            var fechacorte;
            var fechaMayores70;
            const fechaCorte = yield BdParametroAplicacion_1.default.fechaCorte();
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaMe = fechacorte.getFullYear() - 70;
                var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fechaMayores70 = new Date(fechamenorEdad);
                return fechaMayores70;
            }
        });
    }
    fechacorte() {
        return __awaiter(this, void 0, void 0, function* () {
            var fechaC;
            const fechaCorte = yield BdParametroAplicacion_1.default.fechaCorte();
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                fechaC = fechaCorte[index].VALOR_PARAMETRO;
                fechaC = new Date(fechaC);
                console.log(fechaC);
            }
            return fechaC;
        });
    }
}
exports.validacionhemofila = new Validacionhemofila();
