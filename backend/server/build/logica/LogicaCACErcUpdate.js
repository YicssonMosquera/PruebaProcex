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
const BdEstructuraArchivoCampoErc_1 = __importDefault(require("../dao/BdEstructuraArchivoCampoErc"));
const ValidacionCamposErc_1 = __importDefault(require("./ValidacionCamposErc"));
const CAC_ERC_1 = __importDefault(require("../dao/CAC_ERC"));
const ProcesoErcError_1 = __importDefault(require("../dao/ProcesoErcError"));
class LogicaCACErcUpdate {
    static cargarErc(arrayCampos, CAMPO_6) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            this.Campos = [];
            this.Campos.push(arrayCampos);
            _this.cuentaErc(arrayCampos, CAMPO_6);
        });
    }
    static cuentaErc(arrayCampos, CAMPO_6) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            var campos = _this.Campos;
            const oErc = new CAC_ERC_1.default();
            const hemofilia = yield oErc.actualizarDatos(arrayCampos, CAMPO_6);
            const idCuentaErc = yield oErc.getOne2(CAMPO_6);
            const obErcErrorfrm = new ProcesoErcError_1.default();
            var errorVigente = yield obErcErrorfrm.getVigente('', idCuentaErc);
            for (var index = 0; index < Object.keys(errorVigente).length; index++) {
                var ID_PROCESO_ERC_ERROR = errorVigente[index].ID_PROCESO_ERC_ERROR;
                ProcesoErcError_1.default.actualizarEstado('N', ID_PROCESO_ERC_ERROR);
            }
            _this.guardarCACErcDetalle(idCuentaErc, campos);
        });
    }
    static guardarCACErcDetalle(idCabeza, arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            // console.log(idCabeza)
            var resultEstructuraCampo = yield BdEstructuraArchivoCampoErc_1.default.buscarTodos();
            const oValidacionCamposErc = new ValidacionCamposErc_1.default();
            oValidacionCamposErc.validar(arrayCampos, resultEstructuraCampo);
            this.guardarCamposMalos(idCabeza, oValidacionCamposErc.filas_malas);
        });
    }
    static guardarCamposMalos(idCabeza, oFilas) {
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
                ProcesoErcError_1.default.guardar(campoMalo);
            }
        }
    }
}
LogicaCACErcUpdate.Campos = [];
exports.default = LogicaCACErcUpdate;
