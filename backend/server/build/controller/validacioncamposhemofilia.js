"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacionhemofila = void 0;
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
}
exports.validacionhemofila = new Validacionhemofila();
