"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarguehemofiliaControllers_1 = require("../controller/CarguehemofiliaControllers");
class CargahemofiliaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // this.router.post('/',multer2.single('hemofilia'),carguehemofiliacontrollers.GuardarSoporte) 
        this.router.post('/', CarguehemofiliaControllers_1.carguehemofiliacontrollers.get);
    }
}
const cargahemofiliaRoutes = new CargahemofiliaRoutes();
exports.default = cargahemofiliaRoutes.router;
