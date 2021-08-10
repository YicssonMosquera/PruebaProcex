"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BdEstructuraArchivoCampoCancer_1 = __importDefault(require("../dao/BdEstructuraArchivoCampoCancer"));
const CAC_cancer_1 = __importDefault(require("../dao/CAC_cancer"));
const ProcesoCancerErrorFrm_1 = __importDefault(require("../dao/ProcesoCancerErrorFrm"));
const ValidacionCamposCancer_1 = __importDefault(require("./ValidacionCamposCancer"));
class LogicaCACCancerUpdate {
    static cargarCancer(arrayCampos, Campo_6) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            this.Campos = [];
            this.Campos.push(arrayCampos);
            _this.cuentaCancer(arrayCampos, Campo_6);
        });
    }
    static cuentaCancer(arrayCampos, Campo_6) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            var campos = _this.Campos;
            const oCancer = new CAC_cancer_1.default();
            const hemofilia = yield oCancer.Actualizarcancer(arrayCampos, Campo_6);
            const idCuentaCancer = yield oCancer.getOne(Campo_6);
            const oHCancerFrmError = new ProcesoCancerErrorFrm_1.default();
            var errorVigente = yield oHCancerFrmError.getVigente('', idCuentaCancer);
            for (var index = 0; index < Object.keys(errorVigente).length; index++) {
                var ID_PROCESO_CANCER_ERROR = errorVigente[index].ID_PROCESO_CANCER_ERROR;
                ProcesoCancerErrorFrm_1.default.actualizarEstado('N', ID_PROCESO_CANCER_ERROR);
            }
            _this.guardarCACCancerDetalle(idCuentaCancer, campos);
        });
    }
    static guardarCACCancerDetalle(idCabeza, arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            // console.log(idCabeza)
            var resultEstructuraCampo = yield BdEstructuraArchivoCampoCancer_1.default.buscarTodos();
            const oValidacionCamposCancer = new ValidacionCamposCancer_1.default();
            oValidacionCamposCancer.validar(arrayCampos, resultEstructuraCampo);
            this.guardarCamposMalos(idCabeza, oValidacionCamposCancer.filas_malas);
        });
    }
    static guardarCamposMalos(idCabeza, oFilas) {
        console.log('--------------------------------------- id cuenta ');
        console.log(oFilas);
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
                ProcesoCancerErrorFrm_1.default.guardar(campoMalo);
            }
        }
    }
}
LogicaCACCancerUpdate.Campos = [];
exports.default = LogicaCACCancerUpdate;