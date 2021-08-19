import pool from '../database'
var moment = require('moment');
class CAC_Artritis {
    public static guardarDatos(newDatos) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into cuenta_artritis set ?', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }
    public consultarDatos(page, row, NoIdentificacion, primerNombre, primerApellido, TipoIdentificaion) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "SELECT C.CAMPO_9, C.CAMPO_4, C.CAMPO_5, C.CAMPO_6, C.CAMPO_7, C.CAMPO_8, C.CAMPO_9, C.CAMPO_10, C.CAMPO_11  ";
                query += "FROM cuenta_artritis C  where C.CAMPO_4 LIKE '%" + primerNombre + "%' and C.CAMPO_6 LIKE '%" + primerApellido + "%'  and C.CAMPO_8 LIKE '%" + TipoIdentificaion + "%'  and C.CAMPO_9 LIKE '%" + NoIdentificacion + "%' limit ?,? "
                pool.query(query, [page, row], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);

                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public getNumeroRegistro() {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select count(0) as numero_registro from cuenta_artritis ";
                pool.query(query, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public getOne(CAMPO_9) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("SELECT * FROM cuenta_artritis where CAMPO_9 = ? ", [CAMPO_9], function (err, result, fields) {
                    if (err) throw err;
                    console.log(result)
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            };
        });
    }

    public getOne2(CAMPO_9) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select ID_CUENTA_ARTRITIS from cuenta_artritis where cuenta_artritis.CAMPO_9  = ? ", [CAMPO_9], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result[0].ID_CUENTA_ARTRITIS)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            };
        });
    }

    public actualizarDatos(newDatos, CAMPO_9) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('UPDATE cuenta_artritis set ? where cuenta_artritis.CAMPO_9 = ? ', [newDatos, CAMPO_9], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });

    }

    public consultaAfiliado(Campo_9, Campo_8 ) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('select * from afiliado where afiliado.NUMERO_IDENTIFICACION = ? and TIPO_DOCUMENTO = ?  ', [Campo_9, Campo_8 ], function (err, result, fields) {
                    if (err) throw err;
                    for (let index = 0; index < result.length; index++) {
                        const element = result[index];
                        element.FECHA_NACIMIENTO = moment(new Date(element.FECHA_NACIMIENTO)).format('YYYY-MM-DD')
                        element.FECHA_AFILIACION = moment(new Date(element.FECHA_AFILIACION)).format('YYYY-MM-DD')
                        resolev(element)
                    }
                }); 
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public  consultarCAC(Campo_9, Campo_8 ) {
        return new Promise(function (resolev, reject) {  
            try {
                pool.query('select * from cuenta_artritis where cuenta_artritis.C8_CAMPO_9 = ? and cuenta_artritis.C7_CAMPO_8 = ? ', [Campo_9, Campo_8], function (err, result, fields) {
                    if (err) throw err;
                    for (let index = 0; index < result.length; index++) {
                        const element = result[index];
                        element.CAMPO_7 = moment(new Date(element.CAMPO_7)).format('YYYY-MM-DD')
                        element.CAMPO_16 = moment(new Date(element.CAMPO_16)).format('YYYY-MM-DD')
                        resolev(element)
                    }
                }); 
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

}

export default CAC_Artritis;