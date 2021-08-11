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
exports.cac_ERCControllers = void 0;
const CAC_ERC_1 = __importDefault(require("../dao/CAC_ERC"));
class CAC_ERCControllers {
    guardarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            var almacenar = yield CAC_ERC_1.default.guardarDatos(req.body);
            res.json(almacenar);
        });
    }
    consultarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo } = req.body;
            const pagina = row * page;
            const oCACErc = new CAC_ERC_1.default();
            const erc = yield oCACErc.consultarDatos(pagina, row, tipoDocumento, NoDocumento, primerNombre, primerApellido, sexo);
            const data = yield oCACErc.getNumeroRegistro();
            const respuesta = { ERC: erc, numero_registro: data[0].numero_registro };
            res.json(respuesta);
        });
    }
    cargarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_6 } = req.params;
            const oCACErc = new CAC_ERC_1.default();
            const erc = yield oCACErc.getOne(CAMPO_6);
            res.json(erc);
        });
    }
    actualizarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_6 } = req.params;
            console.log(CAMPO_6);
            const oCACErc = new CAC_ERC_1.default();
            const erc = yield oCACErc.actualizarDatos(req.body, CAMPO_6);
            res.json(erc);
        });
    }
}
exports.cac_ERCControllers = new CAC_ERCControllers();
