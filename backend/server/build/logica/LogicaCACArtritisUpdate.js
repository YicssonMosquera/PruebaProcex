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
const BdEstructuraArchivoCampoArtritis_1 = __importDefault(require("../dao/BdEstructuraArchivoCampoArtritis"));
const CAC_Artritis_1 = __importDefault(require("../dao/CAC_Artritis"));
const ProcesoArtritisError_1 = __importDefault(require("../dao/ProcesoArtritisError"));
const ValidacionCamposArtritis_1 = __importDefault(require("./ValidacionCamposArtritis"));
class LogicaCACArtritisUpdate {
    static cargarArtritis(arrayCampos, CAMPO_9) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            this.Campos = [];
            this.Campos.push(arrayCampos);
            _this.cuentaArtritis(arrayCampos, CAMPO_9);
        });
    }
    static cuentaArtritis(arrayCampos, CAMPO_9) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            var campos = _this.Campos;
            const oArtritis = new CAC_Artritis_1.default();
            const hemofilia = yield oArtritis.actualizarDatos(arrayCampos, CAMPO_9);
            const idCuentaArtritis = yield oArtritis.getOne(CAMPO_9);
            const oArtritisError = new ProcesoArtritisError_1.default();
            var errorVigente = yield oArtritisError.getVigente('', idCuentaArtritis);
            for (var index = 0; index < Object.keys(errorVigente).length; index++) {
                var ID_PROCESO_ARTRITIS_ERROR = errorVigente[index].ID_PROCESO_ARTRITIS_ERROR;
                ProcesoArtritisError_1.default.actualizarEstado('N', ID_PROCESO_ARTRITIS_ERROR);
            }
            _this.guardarCACCancerDetalle(idCuentaArtritis, campos);
        });
    }
    static guardarCACCancerDetalle(idCabeza, arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            // console.log(idCabeza)
            var resultEstructuraCampo = yield BdEstructuraArchivoCampoArtritis_1.default.buscarTodos();
            const oValidacionCamposArtritis = new ValidacionCamposArtritis_1.default();
            oValidacionCamposArtritis.validar(arrayCampos, resultEstructuraCampo);
            this.guardarCamposMalos(idCabeza, oValidacionCamposArtritis.filas_malas);
        });
    }
    static guardarCamposMalos(idCabeza, oFilas) {
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
                ProcesoArtritisError_1.default.guardar(campoMalo);
            }
        }
    }
}
LogicaCACArtritisUpdate.Campos = [];
exports.default = LogicaCACArtritisUpdate;
