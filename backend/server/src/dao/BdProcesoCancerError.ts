import pool from '../database'

class BdProcesoCancerError{ 
    public static  guardar(cancerError) {
        try {
             pool.query('insert into bd_proceso_cancer_error set ?', cancerError, function(err, result, fields) {
                if (err) throw err;             
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

}


export default BdProcesoCancerError;