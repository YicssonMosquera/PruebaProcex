import BdEstructuraArchivoCampoCancer from "../dao/BdEstructuraArchivoCampoCancer";
import ValidacionCamposCancer from "./ValidacionCamposCancer";


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
        // var hemofilia = await CAC_Hemofilia.Guardarhemofilia(arrayCampos)
        // var idCuentaHeofilia = hemofilia['insertId']
        
        _this.guardarCACCancerDetalle(campos);
    }

    public static async guardarCACCancerDetalle(arrayCampos) {
        var _this = this;
        // console.log(idCabeza)
        var resultEstructuraCampo = await BdEstructuraArchivoCampoCancer.buscarTodos();
        const oValidacionCamposCancer = new ValidacionCamposCancer();
        oValidacionCamposCancer.validar(arrayCampos, resultEstructuraCampo);
    }


}

export default LogicaCACCancer;