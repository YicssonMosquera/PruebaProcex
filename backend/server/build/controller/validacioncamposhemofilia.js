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
            return false;
        }
        return true;
    }
    ismax(campo, max) {
        if (campo.trim().length > max) {
            return false;
        }
        return true;
    }
}
exports.validacionhemofila = new Validacionhemofila();
