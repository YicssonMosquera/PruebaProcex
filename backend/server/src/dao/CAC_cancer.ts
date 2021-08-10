import pool from '../database'

class CAC_cancer {

    public static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into cuenta_cancer set ? ', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public static getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                const Clientes = pool.query("select count(0) as numero_registro from cuenta_cancer", function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron Datos' });
            };
        });
    }

    public static CargarRegistroCancer(Tipodocumento, numerodocumeto, page, row) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT ID_CUENTA_CANCER, CAMPO_1, CAMPO_2, CAMPO_3, CAMPO_4, CAMPO_5, CAMPO_6, CAMPO_7, CAMPO_8 ";
                query += "from cuenta_cancer";
                query += " where CAMPO_5 LIKE '%" + Tipodocumento + "%' and CAMPO_6 LIKE '%" + numerodocumeto + "%' limit ?,? ";
                const Clientes = pool.query(query, [page, row], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se obtuvieron datos' });
            };
        });
    }

    public  Actualizarcancer(newDatos, Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('UPDATE cuenta_cancer set ? where cuenta_cancer.CAMPO_6 = ? ', [newDatos, Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });

    }

    public static CargarIdentificacion(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select * from cuenta_cancer where cuenta_cancer.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            };
        });
    }

    public static consultaAfiliado(NUMERO_IDENTIFICACION, TIPO_DOCUMENTO) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('select * from afiliado where afiliado.NUMERO_IDENTIFICACION = ? and TIPO_DOCUMENTO = ?  ', [NUMERO_IDENTIFICACION, TIPO_DOCUMENTO], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    //cargar Id cuenta cancer
    public getOne(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select ID_CUENTA_CANCER from cuenta_cancer where cuenta_cancer.CAMPO_6  = ? ", [Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result[0].ID_CUENTA_CANCER)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            };
        });
    }
}

export default CAC_cancer;