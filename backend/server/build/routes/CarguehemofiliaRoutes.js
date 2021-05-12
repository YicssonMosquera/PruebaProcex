"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarguehemofiliaControllers_1 = require("../controller/CarguehemofiliaControllers");
const multer2_1 = __importDefault(require("../lib/multer2"));
class CargahemofiliaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', multer2_1.default.single('hemofilia'), CarguehemofiliaControllers_1.carguehemofiliacontrollers.GuardarSoporte);
        // this.router.get('/:Documento_hemofilia',soportesControllers.Cargarsoporteporusuario)
    }
}
const cargahemofiliaRoutes = new CargahemofiliaRoutes();
exports.default = cargahemofiliaRoutes.router;
