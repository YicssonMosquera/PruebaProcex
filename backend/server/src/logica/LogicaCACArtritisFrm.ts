import BdEstructuraArchivoCampoArtritis from "../dao/BdEstructuraArchivoCampoArtritis";
import ValidacionCamposArtritis from "./ValidacionCamposArtritis";
import CAC_Artritis from "../dao/CAC_Artritis";
import ProcesoArtritisError from "../dao/ProcesoArtritisError";


class LogicaCACArtritisFrm {
    public static Campos = [];


    public static async cargarCACArtritis(arrayCampos) {
        this.Campos = [];
        this.Campos.push(arrayCampos);
        this.cuentaArtritis(arrayCampos)

    }

    public static async cuentaArtritis(arrayCampos) {
        var _this = this;
        var campos = _this.Campos
        var artritis = await CAC_Artritis.guardarDatos(arrayCampos)
        var idCancer = artritis['insertId']  
        
        _this.guardarCACArtritisDetalle(idCancer, campos);
    }

    public static async guardarCACArtritisDetalle(idCabeza, arrayCampos) {
        var _this = this;
        // console.log(idCabeza)
        var resultEstructuraCampo = await BdEstructuraArchivoCampoArtritis.buscarTodos();
        const oValidacionCamposArtritis = new ValidacionCamposArtritis();
        oValidacionCamposArtritis.validar(arrayCampos, resultEstructuraCampo);
        console.log('idCancer +++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log(oValidacionCamposArtritis.filas_malas)
        this.guardarCamposMalos(idCabeza, oValidacionCamposArtritis.filas_malas);
       
    }

    public static guardarCamposMalos(idCabeza, oFilas) {
        console.log('--------------------------------------- id cuenta ')
        console.log(oFilas)
        //Guardar detalles campos malos
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_CUENTA_ARTRITIS = idCabeza;
                campoMalo.NUMERO_CAMPO = campoMalo.NUMERO_CAMPO;
                campoMalo.TIPO_ERROR = campoMalo.TIPO_ERROR;
                campoMalo.DESCRIPCION_ERROR = campoMalo.DESCRIPCION_ERROR;
                campoMalo.USUARIO_CREACION = '';
                campoMalo.USUARIO_MODIFICACION = '';
                campoMalo.VIGENTE = 'S';
                delete campoMalo.NUMERO_REGISTRO;
                ProcesoArtritisError.guardar(campoMalo);
            }
        }
    }

}

export default LogicaCACArtritisFrm;
