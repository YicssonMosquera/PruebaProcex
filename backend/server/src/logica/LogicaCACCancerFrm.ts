import BdEstructuraArchivoCampoCancer from "../dao/BdEstructuraArchivoCampoCancer";
import ValidacionCamposCancer from "./ValidacionCamposCancer";
import cac_cancerControllers from "../dao/CAC_cancer";
import ProcesoCancerErrorFrm from "../dao/ProcesoCancerErrorFrm";


class LogicaCACCancer {
    public static Campos = [];


    public static async cargarCACCancer(arrayCampos) {
        this.Campos = [];
        this.Campos.push(arrayCampos);
        this.cuentaCancer(arrayCampos)

    }
    public static async cuentaCancer(arrayCampos) {
        var _this = this;
        var campos = _this.Campos
        var hemofilia = await cac_cancerControllers.guardarDatos(arrayCampos)
        var idCancer = hemofilia['insertId']  
        _this.guardarCACCancerDetalle(idCancer, campos);
    }

    public static async guardarCACCancerDetalle(idCabeza, arrayCampos) {
        var _this = this;
        // console.log(idCabeza)
        var resultEstructuraCampo = await BdEstructuraArchivoCampoCancer.buscarTodos();
        const oValidacionCamposCancer = new ValidacionCamposCancer();
        oValidacionCamposCancer.validar(arrayCampos, resultEstructuraCampo);
        this.guardarCamposMalos(idCabeza, oValidacionCamposCancer.filas_malas);
    }

    public static guardarCamposMalos(idCabeza, oFilas) {
        console.log('--------------------------------------- id cuenta ')
        console.log(oFilas)
        //Guardar detalles campos malos
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_CUENTA_CANCER = idCabeza;
                campoMalo.NUMERO_CAMPO = campoMalo.NUMERO_CAMPO;
                campoMalo.TIPO_ERROR = campoMalo.TIPO_ERROR;
                campoMalo.DESCRIPCION_ERROR = campoMalo.DESCRIPCION_ERROR;
                campoMalo.USUARIO_CREACION = '';
                campoMalo.USUARIO_MODIFICACION = '';
                campoMalo.VIGENTE = 'S';
                delete campoMalo.NUMERO_REGISTRO;
                ProcesoCancerErrorFrm.guardar(campoMalo);
            }
        }
    }


}

export default LogicaCACCancer;