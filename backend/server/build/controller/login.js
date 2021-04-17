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
exports.logincontrollers = void 0;
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const helpers_1 = require("../lib/helpers");
class Logincontrollers {
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { PKUsuario, password } = req.body;
            let JWT_Secret = 'procex';
            try {
                var query = "SELECT * FROM tblusuario WHERE PKUsuario =?";
                let usuario = yield database_1.default.query(query, [PKUsuario], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (result.length > 0) {
                            console.log(result);
                            let match = yield bcrypt_1.default.compare(password, result[0].password);
                            if (match) {
                                result = result[0];
                                delete result.password;
                                var token = jsonwebtoken_1.default.sign(JSON.stringify(result), JWT_Secret);
                                res.json({ signedUser: result, token: token });
                            }
                            else {
                                res.status(404).json({ text: "Contraseña no valida" });
                            }
                        }
                        else {
                            res.status(404).json({ text: "Usuario no valido" });
                        }
                    });
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron obtener Datos' });
            }
            ;
        });
    }
    crearusuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let NewUser = req.body;
            try {
                NewUser.password = helpers_1.helpers.encriptPassword(NewUser.password);
                var create = yield database_1.default.query('insert into tblusuario set ?', [req.body]);
                console.log(req.body);
                res.json({ message: 'Datos guardado con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
}
exports.logincontrollers = new Logincontrollers();
