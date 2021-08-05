import BDProcesohemofiliaDetalle from "../dao/BdProcesoHemofiliaDetalle";
import DBProcesoHemofiliaErrorFrm from "../dao/BdProcesoHemofiliaErrorFrm";
import CAC_Hemofilia from "../dao/CAC_Hemofilia";
import DbEstructuraArchivoCampo from "../dao/DbEstructuraArchivoCampo";
import ValidacionCamposPH from "./ValidacionCamposPH";
import ValidacionContenidoPH from "./ValidacionContenidoPH";


class logicaHemofiliaFormularioUpdate {
    public static Campos = [];



    public static async cargarHemofiliaFrm(arrayCampos, Campo_6) {
        this.Campos = [];
        this.Campos.push(arrayCampos);

        this.cuentahemofilia(arrayCampos, Campo_6)
    }

    public static async cuentahemofilia(arrayCampos, Campo_6) {
        var _this = this;
        var campos = _this.Campos
        const oHemofilia = new CAC_Hemofilia();
        const hemofilia = await oHemofilia.Actualizarhemofilia(arrayCampos, Campo_6);
        const idCuentaHeofilia = await oHemofilia.getOne(Campo_6);
        const oHemofiliaErrFrm = new DBProcesoHemofiliaErrorFrm();
        var errorVigente = await oHemofiliaErrFrm.getVigente('', idCuentaHeofilia)
        for (var index = 0; index < Object.keys(errorVigente).length; index++) {
            var ID_PROCESO_HEMOFILIA_ERROR = errorVigente[index].ID_PROCESO_HEMOFILIA_ERROR;
            DBProcesoHemofiliaErrorFrm.actualizarEstado('N', ID_PROCESO_HEMOFILIA_ERROR);
        }

        _this.guardarProcesoHemofiliaDetalle(idCuentaHeofilia, campos);
    }

    public static async guardarProcesoHemofiliaDetalle(idCabeza, arrayCampos) {
        var _this = this;
        console.log(idCabeza)
        var resultEstructuraCampo = await DbEstructuraArchivoCampo.buscarTodos();
        const oValidacionCamposPH = new ValidacionCamposPH();
        const oValidacionContenidoPH = new ValidacionContenidoPH();
        oValidacionCamposPH.validar(arrayCampos, resultEstructuraCampo);
        oValidacionContenidoPH.Validar(arrayCampos, resultEstructuraCampo);
        this.guardarCamposBuenos(idCabeza, oValidacionCamposPH.filas_buenas);
        this.guardarCamposMalos(idCabeza, oValidacionCamposPH.filas_malas);
        this.guardarCamposMalosCd(idCabeza, oValidacionContenidoPH.filas_malas)
    }





    public static guardarCamposBuenos(idCabeza, oFilas) {
        //Guardar los detalles, campos buenos
        for (const key in oFilas) {
            var oCamposfila = oFilas[key];
            oCamposfila.ID_PROCESO_HEMOFILIA = idCabeza;
            BDProcesohemofiliaDetalle.guardar(oCamposfila);
        }
    }

    public static guardarCamposMalos(idCabeza, oFilas) {
        //Guardar detalles campos malos
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_CUENTA_HEMOFILIA = idCabeza;
                campoMalo.NUMERO_CAMPO = campoMalo.NUMERO_CAMPO;
                campoMalo.TIPO_ERROR = campoMalo.TIPO_ERROR;
                campoMalo.DESCRIPCION_ERROR = campoMalo.DESCRIPCION_ERROR;
                campoMalo.USUARIO_CREACION = '';
                campoMalo.USUARIO_MODIFICACION = '';
                delete campoMalo.NUMERO_REGISTRO;
                campoMalo.VIGENTE = 'S';
                DBProcesoHemofiliaErrorFrm.guardar(campoMalo);
            }
        }
    }

    public static guardarCamposMalosCd(idCabeza, oFilas) {
        for (const key in oFilas) {
            var arrayFilasMalas = oFilas[key];
            for (let index = 0; index < arrayFilasMalas.length; index++) {
                const campoMalo = arrayFilasMalas[index];
                campoMalo.ID_CUENTA_HEMOFILIA = idCabeza;
                campoMalo.NUMERO_CAMPO = campoMalo.NUMERO_CAMPO;
                campoMalo.TIPO_ERROR = campoMalo.TIPO_ERROR;
                campoMalo.DESCRIPCION_ERROR = campoMalo.DESCRIPCION_ERROR;
                campoMalo.USUARIO_CREACION = '';
                delete campoMalo.NUMERO_REGISTRO;
                campoMalo.USUARIO_MODIFICACION = '';
                campoMalo.VIGENTE = 'S';
                DBProcesoHemofiliaErrorFrm.guardar(campoMalo);
            }
        }
    }

}
export default logicaHemofiliaFormularioUpdate;