"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogsHerroresControllers_1 = require("../controller/LogsHerroresControllers");
class LogsHerroresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', LogsHerroresControllers_1.logsherrorescontrollers.aaaa);
        this.router.get('/herrorestipob/:NUMERO_RADICACION', LogsHerroresControllers_1.logsherrorescontrollers.cargarHerroresTipoB);
        this.router.get('/herrorestipoa/:NUMERO_RADICACION', LogsHerroresControllers_1.logsherrorescontrollers.cargarHerroresTipoA);
    }
}
const logsherrores = new LogsHerroresRoutes();
exports.default = logsherrores.router;
