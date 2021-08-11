import BdEstructuraArchivoCampoCancer from "../dao/BdEstructuraArchivoCampoCancer";
import CAC_cancer from "../dao/CAC_cancer";
import ProcesoCancerErrorFrm from "../dao/ProcesoCancerErrorFrm";
import ValidacionCamposCancer from "./ValidacionCamposCancer";

class LogicaCACCancerUpdate {
    
    public static Campos = [];
    
    public static async cargarCancer(arrayCampos, Campo_6) {
        var _this = this
        this.Campos = [];
        this.Campos.push(arrayCampos);
        _this.cuentaCancer(arrayCampos, Campo_6)
    }

    
    public static async cuentaCancer(arrayCampos, Campo_6) {
        var _this = this;
        var campos = _this.Campos
        const oCancer = new CAC_cancer();
        const hemofilia = await oCancer.Actualizarcancer(arrayCampos, Campo_6);
        const idCuentaCancer = await oCancer.getOne(Campo_6);
        
        const oHCancerFrmError = new ProcesoCancerErrorFrm();
        var errorVigente = await oHCancerFrmError.getVigente('', idCuentaCancer)
        for (var index = 0; index < Object.keys(errorVigente).length; index++) {
            var ID_PROCESO_CANCER_ERROR = errorVigente[index].ID_PROCESO_CANCER_ERROR;
            ProcesoCancerErrorFrm.actualizarEstado('N', ID_PROCESO_CANCER_ERROR);
        }

        _this.guardarCACCancerDetalle(idCuentaCancer, campos);
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

export default LogicaCACCancerUpdate;