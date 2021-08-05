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

}

export default CAC_cancer;