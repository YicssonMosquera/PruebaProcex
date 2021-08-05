import pool from '../database'

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
}


export default CAC_Hemofilia;

