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
const BdProcesoHemofiliaDetalle_1 = __importDefault(require("../dao/BdProcesoHemofiliaDetalle"));
const BdProcesoHemofiliaErrorFrm_1 = __importDefault(require("../dao/BdProcesoHemofiliaErrorFrm"));
const CAC_Hemofilia_1 = __importDefault(require("../dao/CAC_Hemofilia"));
const DbEstructuraArchivoCampo_1 = __importDefault(require("../dao/DbEstructuraArchivoCampo"));
const ValidacionCamposPH_1 = __importDefault(require("./ValidacionCamposPH"));
const ValidacionContenidoPH_1 = __importDefault(require("./ValidacionContenidoPH"));
class logicaHemofiliaFormulario {
    static cargarHemofiliaFrm(arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.Campos = [];
            this.Campos.push(arrayCampos);
            this.cuentahemofilia(arrayCampos);
        });
    }
    static cuentahemofilia(arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            var campos = _this.Campos;
            var hemofilia = yield CAC_Hemofilia_1.default.Guardarhemofilia(arrayCampos);
            var idCuentaHeofilia = hemofilia['insertId'];
            _this.guardarProcesoHemofiliaDetalle(idCuentaHeofilia, campos);
        });
    }
    static guardarProcesoHemofiliaDetalle(idCabeza, arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            console.log(idCabeza);
            var resultEstructuraCampo = yield DbEstructuraArchivoCampo_1.default.buscarTodos();
            const oValidacionCamposPH = new ValidacionCamposPH_1.default();
            const oValidacionContenidoPH = new ValidacionContenidoPH_1.default();
            oValidacionCamposPH.validar(arrayCampos, resultEstructuraCampo);
            oValidacionContenidoPH.Validar(arrayCampos, resultEstructuraCampo);
            this.guardarCamposBuenos(idCabeza, oValidacionCamposPH.filas_buenas);
            this.guardarCamposMalos(idCabeza, oValidacionCamposPH.filas_malas);
            this.guardarCamposMalosCd(idCabeza, oValidacionContenidoPH.filas_malas);
        });
    }
    static guardarCamposBuenos(idCabeza, oFilas) {
        //Guardar los detalles, campos buenos
        for (const key in oFilas) {
            var oCamposfila = oFilas[key];
            oCamposfila.ID_PROCESO_HEMOFILIA = idCabeza;
            BdProcesoHemofiliaDetalle_1.default.guardar(oCamposfila);
        }
    }
    static guardarCamposMalos(idCabeza, oFilas) {
        console.log('--------------------------------------- id cuenta ');
        console.log(oFilas);
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
                BdProcesoHemofiliaErrorFrm_1.default.guardar(campoMalo);
            }
        }
    }
    static guardarCamposMalosCd(idCabeza, oFilas) {
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
                BdProcesoHemofiliaErrorFrm_1.default.guardar(campoMalo);
            }
        }
    }
}
logicaHemofiliaFormulario.Campos = [];
exports.default = logicaHemofiliaFormulario;
