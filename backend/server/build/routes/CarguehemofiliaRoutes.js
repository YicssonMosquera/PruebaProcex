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
        this.router.post('/guardarHMFile', multer2_1.default.single('file'), CarguehemofiliaControllers_1.carguehemofiliacontrollers.guardarHemofiliaFile);
        this.router.post('/', CarguehemofiliaControllers_1.carguehemofiliacontrollers.consultarCargue);
        this.router.get('/', CarguehemofiliaControllers_1.carguehemofiliacontrollers.consultarNombreArchivo);
    }
}
const cargahemofiliaRoutes = new CargahemofiliaRoutes();
exports.default = cargahemofiliaRoutes.router;
