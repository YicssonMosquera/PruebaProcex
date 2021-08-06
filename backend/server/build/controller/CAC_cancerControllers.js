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
exports.cac_cancerControllers = void 0;
const CAC_cancer_1 = __importDefault(require("../dao/CAC_cancer"));
const database_1 = __importDefault(require("../database"));
class CAC_cancerControllers {
    guardarDatos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var datos = yield CAC_cancer_1.default.guardarDatos(req.body);
            res.json(datos);
        });
    }
    getNumeroRegistro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Clientes = yield database_1.default.query("select count(0) as numero_registro from cuenta_cancer", function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result[0].numero_registro);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se obtuvieron Datos' });
            }
            ;
        });
    }
    CargarRegistroCancer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Tipodocumento, numerodocumeto, page, row } = req.body;
            try {
                var query = "SELECT ID_CUENTA_CANCER, CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8 ";
                query += "from cuenta_cancer";
                query += " where CAMPO_5 LIKE '%" + Tipodocumento + "%' and CAMPO_6 LIKE '%" + numerodocumeto + "%' limit ?,? ";
                const Clientes = yield database_1.default.query(query, [page, row], function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se obtuvieron datos' });
            }
            ;
        });
    }
    Actualizarcancer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_6 } = req.params;
            try {
                yield database_1.default.query('UPDATE cuenta_cancer set ? where cuenta_cancer.CAMPO_6 = ? ', [req.body, Campo_6]);
                console.log(req.body);
                res.json({ message: 'Datos guardado con exito' });
            }
            catch (error) {
                res.status(404).json({ error: 'No se pudieron almacenar datos' });
            }
            ;
        });
    }
    CargarIdentificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Campo_6 } = req.params;
            try {
                const Clientes = yield database_1.default.query("select * from cuenta_cancer where cuenta_cancer.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                    console.log(result);
                });
            }
            catch (error) {
                res.status(404).json({ error: 'No se puedieron Datos' });
            }
            ;
        });
    }
}
exports.cac_cancerControllers = new CAC_cancerControllers();
