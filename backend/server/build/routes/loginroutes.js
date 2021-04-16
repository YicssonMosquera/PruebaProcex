"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controller/login");
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', login_1.logincontrollers.Login);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
