import { validacionhemofila } from '../controller/validacioncamposhemofilia'
class ValidacionContenidoPH {
    data: Map<any, any>;
    constructor(){
        this.data = new Map();
    }

    Validar(arrayCampos){
        var _this = this;
           //recorrer el array campos que son las filas del file txt
        for (let index = 0; index < arrayCampos.length; index++) {
                 //get campo fila
                 const camposFila = arrayCampos[index];
                 console.log('camposfilas ---------------------------')
                 console.log(camposFila.CAMPO_1)
                 var numFila = index + 1;
                 if(camposFila.CAMPO_5 == 'CC'){
                     camposFila.CAMPO_7 <= ''
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