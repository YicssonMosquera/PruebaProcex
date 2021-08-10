import pool from '../database'

class ProcesoCancerErrorFrm{ 
    public static  guardar(cancerError) {
        try {
             pool.query('insert into bd_proceso_cancer_error_frm set ?', cancerError, function(err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizarEstado(Estado,ID_PROCESO_CANCER_ERROR ) {
        try {
            pool.query('update bd_proceso_cancer_error_frm set VIGENTE = ? where ID_PROCESO_CANCER_ERROR = ? ', [Estado,ID_PROCESO_CANCER_ERROR], function (err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public getVigente(userName, ID_PROCESO_CANCER_ERROR) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_CANCER_ERROR, ID_CUENTA_CANCER, USUARIO_CREACION  from bd_proceso_cancer_error_frm where VIGENTE = 'S' and USUARIO_CREACION = ? and ID_CUENTA_CANCER = ? ";
                pool.query(query, [userName,ID_PROCESO_CANCER_ERROR], function (err, result, fields) {
                    if (err) throw err;
                    resolev(result);
                });
            }
            catch (error) {
                //res.status(404).json({ error: 'No se pudieron almacenar datos' });
            };
        });
    }

}


export default ProcesoCancerErrorFrm;