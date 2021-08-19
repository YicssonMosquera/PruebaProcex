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
exports.logsErroresArtritisControllers = void 0;
const LogsErroresArtritis_1 = __importDefault(require("../dao/LogsErroresArtritis"));
class LogsErroresArtritisControllers {
    LogsErroresFrm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CAMPO_9 } = req.params;
            const LogsErrores = new LogsErroresArtritis_1.default();
            const erroresFrm = yield LogsErrores.LogsErroresFrm(CAMPO_9);
            res.json(erroresFrm);
        });
    }
}
exports.logsErroresArtritisControllers = new LogsErroresArtritisControllers();
