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
        //this.router.post('/',carguehemofiliacontrollers.guardarcargahemofilia)
        this.router.post('/guardar', CarguehemofiliaControllers_1.carguehemofiliacontrollers.guardarHemofilia);
    }
}
const cargahemofiliaRoutes = new CargahemofiliaRoutes();
exports.default = cargahemofiliaRoutes.router;
