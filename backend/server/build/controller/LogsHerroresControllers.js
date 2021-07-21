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
const LogsHerrores_1 = __importDefault(require("../dao/LogsHerrores"));
class LogsHerroresControllers {
    cargarHerroresTipoB(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUMERO_RADICACION } = req.params;
            const Logsherrores = new LogsHerrores_1.default();
            const HerroresTipob = yield Logsherrores.cargarHerroresTipoB(NUMERO_RADICACION);
            res.json(HerroresTipob);
        });
    }
    cargarHerroresTipoA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUMERO_RADICACION } = req.params;
            const Logsherrores = new LogsHerrores_1.default();
            const HerroresTipoA = yield Logsherrores.cargarHerroresTipoA(NUMERO_RADICACION);
            res.json(HerroresTipoA);
        });
    }
    aaaa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('hola');
        });
    }
}
exports.logsherrorescontrollers = new LogsHerroresControllers();
