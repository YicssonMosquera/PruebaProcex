import DBParametroAplicacion from "../dao/BdParametroAplicacion";

var moment = require('moment');

class Validacionhemofila {

    isObligatorio(validacion: any) {
        if (validacion == "S") {
            return true
        }
        return false

    }
    isnoObligatorio(validacion: any) {
        if (validacion == "N") {
            return true
        }
        return false

    }
    isVoid(valorcampo: any) {
        if (valorcampo.trim().length != 0) {
            return true;
        }

        return false;
    }


    isMaxMin(campo: any, min: any, max: any,) {
        if (campo.trim().length < min || campo.trim().length > max) {
            return true
        }
        return false
    }
    ismax(campo: any, max: any) {
        if (campo.trim().length > max) {
            return true
        }
        return false
    }
    isRango(valores: any, campo: any) {
        let validacion = valores.split('-');
        if (campo >= validacion[0] && campo <= validacion[1]) {
            return true
        }
        return false
    }
    isCohincidencia(valores: any, campo: any) {
        let validacion = valores.split(',');
        if (validacion.includes(campo)) {
            return true
        }
        return false
    }
    isRangocohincidencia(valores: any, campo: any) {
        let validacion = valores.split(',');
        let validacion2 = valores.split('-');
        if (campo >= validacion2[0] && campo <= validacion2[1] || validacion.includes(campo)) {
            return true
        }
        return false
    }

    validacioncampo30(valores: any, campo: any) {
        let validacion = valores.split(',');
        let validacion2 = valores.split('-');
        if (campo >= validacion2[0] && campo <= validacion2[1] || campo >= validacion2[2] && campo <= validacion2[3] || validacion.includes(campo)) {
            return true
        }
        return false
    }
    formatofecha(Fecha) {
        var formatoFecha = moment(new Date(Fecha)).format('YYYY-MM-DD')
        return formatoFecha;
    }
    calcularMayorEdad() {
        var fechacorte;
        var fehaMayorEdad
        DBParametroAplicacion.fechaCorte(function (result) {
            const fechaCorte = result;
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaM = fechacorte.getFullYear() - 18;
                var fechamayoredad = calculoFechaM + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fehaMayorEdad = new Date(fechamayoredad)
                console.log('maoyor edad --------------------------------------------')
                console.log(fehaMayorEdad)
                return fehaMayorEdad;
            }
        });

    }

    CalcularMenorEdad() {
        var fechacorte;
        var fechaMenorEdad
        DBParametroAplicacion.fechaCorte(function (result) {
            const fechaCorte = result;
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaMe = fechacorte.getFullYear() - 5;
                var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fechaMenorEdad = new Date(fechamenorEdad)
                console.log('menor edad -----------------------------------------')
                console.log(fechaMenorEdad)
                return fechaMenorEdad;
            }
        });
    }

     calcularAfiliadosde60Añ0s() {
        var fechacorte;
        var fechaMaores60
        DBParametroAplicacion.fechaCorte(function (result){
            const fechaCorte =result;
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaMe = fechacorte.getFullYear() - 60;
                var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fechaMaores60 = new Date(fechamenorEdad)
                console.log('menor 60 edad ----------------------------------------')
                console.log(fechaMaores60)
                return fechaMaores60;
            }
        });
    }


     calcularAfiliadosde9Años() {
        var fechacorte;
        var fechaMaores9
        DBParametroAplicacion.fechaCorte(function (result){
        const fechaCorte = result
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
            fechacorte = new Date(fechacorte);
            var calculoFechaMe = fechacorte.getFullYear() - 9;
            var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
            fechaMaores9 = new Date(fechamenorEdad)
            console.log('menor 9 edad----------------------------------- ')
            console.log(fechaMaores9)
            return fechaMaores9;
        }
        });
     
    }
     calcularAfiliadosde70Años() {
        var fechacorte;
        var fechaMayores70
        DBParametroAplicacion.fechaCorte(function (result){
            const fechaCorte = result;
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
                fechacorte = new Date(fechacorte);
                var calculoFechaMe = fechacorte.getFullYear() - 70;
                var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
                fechaMayores70 = new Date(fechamenorEdad)
                console.log('mayores  70 edad---------------------------------- ')
               console.log(fechaMayores70)
                return fechaMayores70;
            }
        });
    }

     fechacorte() {
        var fechaC
        DBParametroAplicacion.fechaCorte(function (result){
            const fechaCorte = result;
            for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
                fechaC = fechaCorte[index].VALOR_PARAMETRO;
                fechaC = new Date(fechaC);
                console.log('fecha corte  ------------------------------- ')
                console.log(fechaC)
                return fechaC;
            }
            
        });
    }
}

export const validacionhemofila = new Validacionhemofila();