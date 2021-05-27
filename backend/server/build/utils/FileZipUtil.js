"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdmZip = require('adm-zip');
class FileZipUtil {
    static getFileTxt(fileZip, body, cb) {
        var longitud = fileZip.size;
        var ruta = fileZip.path;
        var body = body.User;
        var nombre = fileZip.originalname;
        var zip = new AdmZip(fileZip.path);
        var zipEntries = zip.getEntries();
        zipEntries.forEach(function (zipEntry) {
            cb(zipEntry.getData().toString('utf8'), longitud, ruta, nombre, body);
        });
    }
    static getEntries(fileZip) {
        console.log(fileZip);
        var zip = new AdmZip(fileZip.path);
        var zipEntries = zip.getEntries();
        return zipEntries;
    }
}
exports.default = FileZipUtil;
