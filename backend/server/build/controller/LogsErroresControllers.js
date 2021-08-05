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
exports.logsherrorescontrollers = void 0;
const LogsErrores_1 = __importDefault(require("../dao/LogsErrores"));
const crearExcel_1 = __importDefault(require("../logica/crearExcel"));
class LogsHerroresControllers {
    cargarErroresTipoB(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUMERO_RADICACION } = req.params;
            const Logsherrores = new LogsErrores_1.default();
            const HerroresTipob = yield Logsherrores.cargarErroresTipoB(NUMERO_RADICACION);
            res.json(HerroresTipob);
        });
    }
    cargarErroresExcel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUMERO_RADICACION } = req.params;
            const Logsherrores = new LogsErrores_1.default();
            const HerroresTipob = yield Logsherrores.cargarErroresLogsExcel(NUMERO_RADICACION);
            crearExcel_1.default.generateExcel(HerroresTipob, res);
            res.json(HerroresTipob);
        });
    }
    cargarErroresTipoA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUMERO_RADICACION } = req.params;
            const Logsherrores = new LogsErrores_1.default();
            const HerroresTipoA = yield Logsherrores.cargarErroresTipoA(NUMERO_RADICACION);
            res.json(HerroresTipoA);
        });
    }
    LogsErroresFrm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_6 } = req.params;
            const Logsherrores = new LogsErrores_1.default();
            const HerroresFrm = yield Logsherrores.LogsErroresFrm(CAMPO_6);
            res.json(HerroresFrm);
        });
    }
}
exports.logsherrorescontrollers = new LogsHerroresControllers();
