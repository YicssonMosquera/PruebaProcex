"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SoportesControllers_1 = require("../controller/SoportesControllers");
const multer_1 = __importDefault(require("../lib/multer"));
class SoportesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', multer_1.default.single('soporte'), SoportesControllers_1.soportesControllers.GuardarSoporte);
        this.router.post('/soporte', SoportesControllers_1.soportesControllers.Cargarsoporteporusuario);
        this.router.get('/:Documento_hemofilia', SoportesControllers_1.soportesControllers.getNumeroRegistro);
    }
}
const soportesRoutes = new SoportesRoutes();
exports.default = soportesRoutes.router;
