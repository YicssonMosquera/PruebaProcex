import { validacionhemofila } from "../controller/validacioncamposhemofilia";


class ValidacionCamposArtritis {
    filas_buenas: {};
    filas_malas: {};
    data: Map<any, any>;
    numeroErroresCampo: number;
    numMalos: number;
    numBuenos: number;
    totalCamposMalos: number;
    archivoFilas: number;


    constructor() {
        this.data = new Map();
        this.filas_buenas = {};
        this.filas_malas = {};
        this.numeroErroresCampo = 0;
        this.numMalos = 0;
        this.numBuenos = 0;
        this.totalCamposMalos = 0;
        this.archivoFilas = 0;
    }

    validar(arrayCampos, resultEstructuraCampo) {
        var _this = this;
        this.archivoFilas = arrayCampos.length;

        try {
              //insertando valores al map
              for (let i = 0; i < resultEstructuraCampo.length; i++) {
                var objeto = resultEstructuraCampo[i];
                objeto.NUM_CAMPO = objeto.NOMBRE_CAMPO.replace("CAMPO_", "");
                console.log('objeto.NUM_CAMPO +++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
                console.log(objeto.NUM_CAMPO)
                _this.data.set(objeto.NOMBRE_CAMPO, objeto);
            }

            //recorrer el array campos que son las filas del file txt
            for (let index = 0; index < arrayCampos.length; index++) {
                //get campo fila
                const camposFila = arrayCampos[index];
                var numFila = index + 1;

                //crear arreglos para adicionar campos buenos y malos
                var arrayCamposBuenos = [];
                var arrayCamposMalos = [];

                //recorrer los campos de la fila
                for (const key in camposFila) {
                    var nombrecampo = key;
                    var valorcampo = camposFila[key];
                    var campofila = {};
                    campofila[nombrecampo] = valorcampo;
                    var validacioncampo = _this.data.get(nombrecampo);
                    var validacion = validacionhemofila;

                    


                }
            }
            
        } 
        catch (error) {
            
        }
    }
}


export default ValidacionCamposArtritis;