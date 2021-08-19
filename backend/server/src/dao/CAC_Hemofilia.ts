import pool from '../database'
var moment = require('moment');

class CAC_Hemofilia {

   public static Guardarhemofilia(newDatos){
        return new Promise(function (resolev, reject) {
            try {
                pool.query('insert into Cuenta_hemofilia set ?', newDatos, function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

    public Actualizarhemofilia(newDatos, Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('UPDATE Cuenta_hemofilia set ? where Cuenta_hemofilia.CAMPO_6 = ?' , [newDatos, Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });

    }

    public getOne(Campo_6) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query("select ID_CUENTA_HEMOFILIA from Cuenta_hemofilia where Cuenta_hemofilia.CAMPO_6 = ? ", [Campo_6], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result[0].ID_CUENTA_HEMOFILIA)
                });
            }
            catch (error) {
                // res.status(404).json({ error: 'No se puedieron Datos' });
            };
        });
    }

    public static consultaAfiliado(Campo_6, Campo_5 ) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('select * from afiliado where afiliado.NUMERO_IDENTIFICACION = ? and TIPO_DOCUMENTO = ?  ', [Campo_6, Campo_5 ], function (err, result, fields) {
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

    public  consultarCAC(Campo_6, Campo_5 ) {
        return new Promise(function (resolev, reject) {
            try {
                pool.query('select * from cuenta_hemofilia where cuenta_hemofilia.CAMPO_6 = ? and cuenta_hemofilia.CAMPO_5 = ? ', [Campo_6, Campo_5 ], function (err, result, fields) {
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


export default CAC_Hemofilia;

