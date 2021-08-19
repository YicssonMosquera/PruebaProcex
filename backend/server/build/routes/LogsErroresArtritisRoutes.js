"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogsErroresArtritisControllers_1 = require("../controller/LogsErroresArtritisControllers");
class LogsErroresArtritisRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/erroresFrm/:CAMPO_9', LogsErroresArtritisControllers_1.logsErroresArtritisControllers.LogsErroresFrm);
    }
}
const logsErroresArtritisRoutes = new LogsErroresArtritisRoutes();
exports.default = logsErroresArtritisRoutes.router;
