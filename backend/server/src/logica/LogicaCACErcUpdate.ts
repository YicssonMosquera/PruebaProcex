import BdEstructuraArchivoCampoErc from "../dao/BdEstructuraArchivoCampoErc";
import ValidacionCamposErc from "./ValidacionCamposErc";
import CAC_ERC from "../dao/CAC_ERC";
import ProcesoErcError from "../dao/ProcesoErcError";

class LogicaCACErcUpdate {
    public static Campos = [];

    public static async cargarErc(arrayCampos, CAMPO_6) {
        var _this = this
        this.Campos = [];
        this.Campos.push(arrayCampos);
        _this.cuentaErc(arrayCampos, CAMPO_6)
    }

    public static async cuentaErc(arrayCampos, CAMPO_6) {
        var _this = this;
        var campos = _this.Campos
        const oErc = new CAC_ERC();
        const hemofilia = await oErc.actualizarDatos(arrayCampos, CAMPO_6);
        const idCuentaErc = await oErc.getOne2(CAMPO_6);
        const obErcErrorfrm = new ProcesoErcError();
        var errorVigente = await obErcErrorfrm.getVigente('', idCuentaErc)
        for (var index = 0; index < Object.keys(errorVigente).length; index++) {
            var ID_PROCESO_ERC_ERROR = errorVigente[index].ID_PROCESO_ERC_ERROR;
            ProcesoErcError.actualizarEstado('N', ID_PROCESO_ERC_ERROR);
        }

        _this.guardarCACErcDetalle(idCuentaErc, campos);
    }

    public static async guardarCACErcDetalle(idCabeza, arrayCampos) {
        var _this = this;
        // console.log(idCabeza)
        var resultEstructuraCampo = await BdEstructuraArchivoCampoErc.buscarTodos();
        const oValidacionCamposErc = new ValidacionCamposErc();
        oValidacionCamposErc.validar(arrayCampos, resultEstructuraCampo);
        this.guardarCamposMalos(idCabeza, oValidacionCamposErc.filas_malas);
    }

    public static guardarCamposMalos(idCabeza, oFilas) {
        //Guardar detalles campos malos
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_CUENTA_ERC = idCabeza;
                campoMalo.NUMERO_CAMPO = campoMalo.NUMERO_CAMPO;
                campoMalo.TIPO_ERROR = campoMalo.TIPO_ERROR;
                campoMalo.DESCRIPCION_ERROR = campoMalo.DESCRIPCION_ERROR;
                campoMalo.USUARIO_CREACION = '';
                campoMalo.USUARIO_MODIFICACION = '';
                campoMalo.VIGENTE = 'S';
                delete campoMalo.NUMERO_REGISTRO;
                ProcesoErcError.guardar(campoMalo);
            }
        }
    }
}

export default LogicaCACErcUpdate;