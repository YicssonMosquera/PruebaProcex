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
exports.cac_HemofiliaControllers = void 0;
const CAC_Hemofilia_1 = __importDefault(require("../dao/CAC_Hemofilia"));
class CAC_HemofiliaControllers {
    Guardarhemofilia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            var almacenar = yield CAC_Hemofilia_1.default.Guardarhemofilia(req.body);
            res.json(almacenar);
        });
    }
    Actualizarhemofilia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_6 } = req.params;
            console.log(Campo_6);
            const oHemofilia = new CAC_Hemofilia_1.default();
            const hemofilia = yield oHemofilia.Actualizarhemofilia(req.body, Campo_6);
            res.json(hemofilia);
        });
    }
}
exports.cac_HemofiliaControllers = new CAC_HemofiliaControllers();
