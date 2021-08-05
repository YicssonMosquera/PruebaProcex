import BDProcesohemofiliaDetalle from "../dao/BdProcesoHemofiliaDetalle";
import DBProcesoHemofiliaErrorFrm from "../dao/BdProcesoHemofiliaErrorFrm";
import CAC_Hemofilia from "../dao/CAC_Hemofilia";
import DbEstructuraArchivoCampo from "../dao/DbEstructuraArchivoCampo";
import ValidacionCamposPH from "./ValidacionCamposPH";
import ValidacionContenidoPH from "./ValidacionContenidoPH";


class logicaHemofiliaFormulario {
    public static Campos = [];



    public static async cargarHemofiliaFrm(arrayCampos) {
        this.Campos = [];
        this.Campos.push(arrayCampos);

        this.cuentahemofilia(arrayCampos)
    }

    public static async cuentahemofilia(arrayCampos) {
        var _this = this;
        var campos = _this.Campos
        var hemofilia = await CAC_Hemofilia.Guardarhemofilia(arrayCampos)
        var idCuentaHeofilia = hemofilia['insertId']
        
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
        console.log('--------------------------------------- id cuenta ')
        console.log(oFilas)
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
                DBProcesoHemofiliaErrorFrm.guardar(campoMalo);
            }
        }
    }

}
export default logicaHemofiliaFormulario;