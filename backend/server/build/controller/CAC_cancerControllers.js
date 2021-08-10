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
exports.cac_cancerControllers = void 0;
const CAC_cancer_1 = __importDefault(require("../dao/CAC_cancer"));
class CAC_cancerControllers {
    guardarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield CAC_cancer_1.default.guardarDatos(req.body);
            res.json(datos);
        });
    }
    getNumeroRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield CAC_cancer_1.default.getNumeroRegistro();
            res.json(datos);
        });
    }
    CargarRegistroCancer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Tipodocumento, numerodocumeto, page, row } = req.body;
            var datos = yield CAC_cancer_1.default.CargarRegistroCancer(Tipodocumento, numerodocumeto, page, row);
            res.json(datos);
        });
    }
    Actualizarcancer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_6 } = req.params;
            try {
                const obCancer = new CAC_cancer_1.default();
                var datos = yield obCancer.Actualizarcancer(req.body, Campo_6);
                res.json({ message: 'Datos guardado con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
        });
    }
    CargarIdentificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_6 } = req.params;
            var datos = yield CAC_cancer_1.default.CargarIdentificacion(Campo_6);
            res.json(datos);
        });
    }
    buscarAfiliado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_6, campo_5 } = req.params;
            var datos = yield CAC_cancer_1.default.consultaAfiliado(Campo_6, campo_5);
            res.json(datos);
        });
    }
}
exports.cac_cancerControllers = new CAC_cancerControllers();
