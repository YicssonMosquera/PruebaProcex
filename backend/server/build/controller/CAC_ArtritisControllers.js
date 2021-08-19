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
exports.cac_ArtritisControllers = void 0;
const CAC_Artritis_1 = __importDefault(require("../dao/CAC_Artritis"));
class CAC_ArtritisControllers {
    guardarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            var almacenar = yield CAC_Artritis_1.default.guardarDatos(req.body);
            res.json(almacenar);
        });
    }
    consultarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion } = req.body;
            const pagina = row * page;
            const oCACArtritis = new CAC_Artritis_1.default();
            const artritis = yield oCACArtritis.consultarDatos(pagina, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion);
            const data = yield oCACArtritis.getNumeroRegistro();
            const respuesta = { artritis: artritis, numero_registro: data[0].numero_registro };
            res.json(respuesta);
        });
    }
    cargarPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_9 } = req.params;
            const oCACArtritis = new CAC_Artritis_1.default();
            const artritis = yield oCACArtritis.getOne(CAMPO_9);
            res.json(artritis);
        });
    }
    actualizarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_9 } = req.params;
            const oCACArtritis = new CAC_Artritis_1.default();
            const artritis = yield oCACArtritis.actualizarDatos(req.body, CAMPO_9);
            res.json(artritis);
        });
    }
    buscarAfiliado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_9, Campo_8 } = req.body;
            const oCACArtritis = new CAC_Artritis_1.default();
            var datos = yield oCACArtritis.consultaAfiliado(Campo_9, Campo_8);
            res.json(datos);
        });
    }
    buscarCAC(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_9, Campo_8 } = req.body;
            const oCACErc = new CAC_Artritis_1.default();
            var datos = yield oCACErc.consultarCAC(Campo_9, Campo_8);
            res.json(datos);
        });
    }
}
exports.cac_ArtritisControllers = new CAC_ArtritisControllers();
