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
const ValidacionCamposArtritis_1 = __importDefault(require("./ValidacionCamposArtritis"));
const CAC_Artritis_1 = __importDefault(require("../dao/CAC_Artritis"));
const ProcesoArtritisError_1 = __importDefault(require("../dao/ProcesoArtritisError"));
class LogicaCACArtritisFrm {
    static cargarCACArtritis(arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            this.Campos = [];
            this.Campos.push(arrayCampos);
            this.cuentaArtritis(arrayCampos);
        });
    }
    static cuentaArtritis(arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            var campos = _this.Campos;
            var artritis = yield CAC_Artritis_1.default.guardarDatos(arrayCampos);
            var idCancer = artritis['insertId'];
            _this.guardarCACArtritisDetalle(idCancer, campos);
        });
    }
    static guardarCACArtritisDetalle(idCabeza, arrayCampos) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            // console.log(idCabeza)
            var resultEstructuraCampo = yield BdEstructuraArchivoCampoArtritis_1.default.buscarTodos();
            const oValidacionCamposArtritis = new ValidacionCamposArtritis_1.default();
            oValidacionCamposArtritis.validar(arrayCampos, resultEstructuraCampo);
            console.log('idCancer +++++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log(oValidacionCamposArtritis.filas_malas);
            this.guardarCamposMalos(idCabeza, oValidacionCamposArtritis.filas_malas);
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
                campoMalo.ID_CUENTA_ARTRITIS = idCabeza;
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
LogicaCACArtritisFrm.Campos = [];
exports.default = LogicaCACArtritisFrm;
