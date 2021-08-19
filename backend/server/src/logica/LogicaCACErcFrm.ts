import BdEstructuraArchivoCampoErc from "../dao/BdEstructuraArchivoCampoErc";
import ValidacionCamposErc from "./ValidacionCamposErc";
import CAC_ERC from "../dao/CAC_ERC";
import ProcesoErcError from "../dao/ProcesoErcError";

class LogicaCACErcFrm {
    public static Campos = [];

    public static async cargarErc(arrayCampos) {

        var _this = this
        this.Campos = [];
        this.Campos.push(arrayCampos);
        _this.cuentaErc(arrayCampos)
    }
    public static async cuentaErc(arrayCampos) {
        var _this = this;
        var campos = _this.Campos
        var artritis = await CAC_ERC.guardarDatos(arrayCampos)
        var idErc = artritis['insertId']

        _this.guardarCACArtritisDetalle(idErc, campos);
    }

    public static async guardarCACArtritisDetalle(idCabeza, arrayCampos) {
        var _this = this;
        // console.log(idCabeza)
        var resultEstructuraCampo = await BdEstructuraArchivoCampoErc.buscarTodos();
        const oValidacionCamposErc = new ValidacionCamposErc();
        oValidacionCamposErc.validar(arrayCampos, resultEstructuraCampo);
        console.log('idCancer +++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log(oValidacionCamposErc.filas_malas)
        this.guardarCamposMalos(idCabeza, oValidacionCamposErc.filas_malas);

    }

    public static guardarCamposMalos(idCabeza, oFilas) {
        console.log('--------------------------------------- id cuenta ')
        console.log(oFilas)
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

export default LogicaCACErcFrm;
