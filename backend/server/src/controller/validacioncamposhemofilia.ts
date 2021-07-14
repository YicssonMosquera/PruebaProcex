import DBParametroAplicacion from "../dao/BdParametroAplicacion";

var moment = require('moment');


class Validacionhemofila {
    fechaMenorEdad
    fechaMaores60
    fechaMaores9
    fechaMayores70
    fehaMayorEdad
    fechaC
    constructor() {
        this.fechaMenorEdad = new Date();
        this.fechaMaores60 = new Date();
        this.fechaMaores9 = new Date();
        this.fechaMayores70 = new Date();
        this.fehaMayorEdad = new Date();
        this.fechaC =  new Date();
        this.calcularAfiliadosde9Años();
        this.calcularMayorEdad();
        this.CalcularMenorEdad();
        this.calcularAfiliadosde60Añ0s()
        this.calcularAfiliadosde70Años();
        this.fechacorte();
    }

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

    isrango32(valores: any, campo: any){
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
   async calcularMayorEdad() {
        var _this = this
        var fechacorte;
        var fehaMayorEdad
        const fechaCorte = await DBParametroAplicacion.fechaCorte()
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
            fechacorte = new Date(fechacorte);
            var calculoFechaM = fechacorte.getFullYear() - 18;
            var fechamayoredad = calculoFechaM + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
            _this.fehaMayorEdad = new Date(fechamayoredad)
            return _this.fehaMayorEdad
        }

    }

    async CalcularMenorEdad() {
        var _this = this;
        var fechacorte;
        var fechaMenorEdad
        const fechaCorte = await DBParametroAplicacion.fechaCorte()
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
            fechacorte = new Date(fechacorte);
            var calculoFechaMe = fechacorte.getFullYear() - 5;
            var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
            _this.fechaMenorEdad = new Date(fechamenorEdad)
            return _this.fechaMenorEdad;
        }
    }

    async calcularAfiliadosde60Añ0s() {
       var _this = this
        var fechacorte;
        var fechaMaores60
        const fechaCorte = await DBParametroAplicacion.fechaCorte()
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
            fechacorte = new Date(fechacorte);
            var calculoFechaMe = fechacorte.getFullYear() - 60;
            var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
            _this.fechaMaores60 = new Date(fechamenorEdad)
            return _this.fechaMaores60 
        }

    }


    async calcularAfiliadosde9Años() {
        var _this = this;
        var fechacorte;
        var fechaMaores9
        const fechaCorte = await DBParametroAplicacion.fechaCorte()
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
            fechacorte = new Date(fechacorte);
            var calculoFechaMe = fechacorte.getFullYear() - 9;
            var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
            _this.fechaMaores9 = new Date(fechamenorEdad)
             return _this.fechaMaores9;
        }
       
      
    }

    async calcularAfiliadosde70Años() {
        var _this = this;
        var fechacorte;
        var fechaMayores70
        const fechaCorte = await DBParametroAplicacion.fechaCorte()
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
            fechacorte = new Date(fechacorte);
            var calculoFechaMe = fechacorte.getFullYear() - 70;
            var fechamenorEdad = calculoFechaMe + '-' + (fechacorte.getMonth() + 1) + '-' + (fechacorte.getDate() + 1);
            _this.fechaMayores70 = new Date(fechamenorEdad)
            return fechaMayores70;
        }
    }

    async fechacorte() {
        var _this = this;
        var fechaC
        const fechaCorte = await DBParametroAplicacion.fechaCorte()
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            fechaC = fechaCorte[index].VALOR_PARAMETRO;
            _this.fechaC = new Date(fechaC);
            return  _this.fechaC ;
        }
    }
}

export const validacionhemofila = new Validacionhemofila();