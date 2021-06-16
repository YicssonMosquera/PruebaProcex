import { validacionhemofila } from '../controller/validacioncamposhemofilia'
import DBParametroAplicacion from '../dao/BdParametroAplicacion';

class ValidacionContenidoPH {
    data: Map<any, any>;
    fehaNacimiento: Date;
    fechanacimiento2016: Date;
    fechacorte: Date;
    
    constructor() {
        this.data = new Map();
        this.fehaNacimiento = new Date('2003-01-31');
        this.fechanacimiento2016 = new Date('2021-01-31');
        this.fechacorte = new Date();
        
    }

    async Validar(arrayCampos) {
        var _this = this;
        const fechaCorte = await DBParametroAplicacion.fechaCorte();
        for (var index = 0; index < Object.keys(fechaCorte).length; index++) {
            var fechacorte = fechaCorte[index].VALOR_PARAMETRO;
            _this.fechacorte = new Date(fechacorte);
            console.log(  _this.fechacorte)

        }
        var nuevo = _this.fechacorte.getFullYear() - 18;
        var fecha = nuevo +'-'+ _this.fechacorte.getMonth() +1 +'-'+ _this.fechacorte.getDate();
        console.log(new Date(fecha))
        
        //recorrer el array campos que son las filas del file txt
        for (let index = 0; index < arrayCampos.length; index++) {
            //get campo fila
            const camposFila = arrayCampos[index];

            if (camposFila.CAMPO_5 == 'CC') {
                new Date(camposFila.CAMPO_7) <= _this.fehaNacimiento;
                console.log('entro 7')
            } else {
                console.log('ERROR ---------------------------');
                console.log('TIPO DE IDENTIFICACION NO CORRESPONDE A LA FECHA DE NACIMIENTO DEBE SER MAYOR DE EDAD' + ' ' + camposFila.CAMPO_7);
            }
            if (new Date(camposFila.CAMPO_7) > _this.fechanacimiento2016) {
                camposFila.CAMPO_56 = '0' || camposFila.CAMPO_56 == '5555' || camposFila.CAMPO_56 == '9996' || camposFila.CAMPO_56 == '9999';
                console.log('entro 56')
            } else {
                console.log('Tipo de dat no valido' + ' ' + camposFila.CAMPO_56);
            }
            if (new Date(camposFila.CAMPO_7) > _this.fechanacimiento2016) {
                camposFila.CAMPO_56_1 = '0' || camposFila.CAMPO_56_1 == '5555' || camposFila.CAMPO_56_1 == '9996' || camposFila.CAMPO_56_1 == '9999';
                console.log('entro 56')
            } else {
                console.log('Tipo de dat no valido' + ' ' + camposFila.CAMPO_56_1);
            }
            if (camposFila.CAMPO_8 == 'M') {

            }


            //crear arreglos para adicionar campos buenos y malos
            var arrayCamposBuenos = [];
            var arrayCamposMalos = [];
            //recorrer los campos de la fila
            // for (const key in camposFila) {
            //     var nombrecampo = key;
            //     var valorcampo = camposFila[key];
            //     var campofila = {};
            //     campofila[nombrecampo]=valorcampo;
            //     var validacioncampo = _this.data.get(nombrecampo);
            //     var validacion = validacionhemofila;

            //     if(nombrecampo  == "CAMPO_5" && valorcampo == 'CC') {
            //     console.log('validacionfecha')
            //     }
            // }
        }
    }
}

export default ValidacionContenidoPH;