"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agregar4505Controllers_1 = require("../controller/agregar4505Controllers");
class Agregar4505Routes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', agregar4505Controllers_1.agregar4505controllers.Guardar4505);
        this.router.post('/prueba', agregar4505Controllers_1.agregar4505controllers.prueba);
        this.router.get('/', agregar4505Controllers_1.agregar4505controllers.cargar4505);
    }
}
const agregar4505Routes = new Agregar4505Routes();
exports.default = agregar4505Routes.router;
