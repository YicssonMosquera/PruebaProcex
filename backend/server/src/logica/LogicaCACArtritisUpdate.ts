import BdEstructuraArchivoCampoArtritis from "../dao/BdEstructuraArchivoCampoArtritis";
import CAC_Artritis from "../dao/CAC_Artritis";
import ProcesoArtritisError from "../dao/ProcesoArtritisError";
import ValidacionCamposArtritis from "./ValidacionCamposArtritis";

class LogicaCACArtritisUpdate {
    
    public static Campos = [];
    
    public static async cargarArtritis(arrayCampos, CAMPO_9) {
        var _this = this
        this.Campos = [];
        this.Campos.push(arrayCampos);
        _this.cuentaArtritis(arrayCampos, CAMPO_9)
    }

    
    public static async cuentaArtritis(arrayCampos, CAMPO_9) {
        var _this = this;
        var campos = _this.Campos
        const oArtritis = new CAC_Artritis();
        const hemofilia = await oArtritis.actualizarDatos(arrayCampos, CAMPO_9);
        const idCuentaArtritis = await oArtritis.getOne2(CAMPO_9);
        
        const oArtritisError = new ProcesoArtritisError();
        var errorVigente = await oArtritisError.getVigente('', idCuentaArtritis)
        for (var index = 0; index < Object.keys(errorVigente).length; index++) {
            var ID_PROCESO_ARTRITIS_ERROR = errorVigente[index].ID_PROCESO_ARTRITIS_ERROR;
            ProcesoArtritisError.actualizarEstado('N', ID_PROCESO_ARTRITIS_ERROR);
        }

        _this.guardarCACCancerDetalle(idCuentaArtritis, campos);
    }

    public static async guardarCACCancerDetalle(idCabeza, arrayCampos) {
        var _this = this;
        // console.log(idCabeza)
        var resultEstructuraCampo = await BdEstructuraArchivoCampoArtritis.buscarTodos();
        const oValidacionCamposArtritis = new ValidacionCamposArtritis();
        oValidacionCamposArtritis.validar(arrayCampos, resultEstructuraCampo);
        this.guardarCamposMalos(idCabeza, oValidacionCamposArtritis.filas_malas);
    }

    public static guardarCamposMalos(idCabeza, oFilas) {
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

export default LogicaCACArtritisUpdate;