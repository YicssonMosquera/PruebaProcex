import pool from '../database'

class DBProcesoHemofiliaErrorFrm{ 
    public static  guardar(hemofiliaerror) {
        try {
             pool.query('insert into bd_proceso_hemofilia_error_frm set ?', hemofiliaerror, function(err, result, fields) {
                if (err) throw err;
                
             
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizarEstado(Estado,ID_PROCESO_HEMOFILIA_ERROR ) {
        try {
            pool.query('update bd_proceso_hemofilia_error_frm set VIGENTE = ? where ID_PROCESO_HEMOFILIA_ERROR = ? ', [Estado,ID_PROCESO_HEMOFILIA_ERROR], function (err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public getVigente(userName, ID_CUENTA_HEMOFILIA) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_HEMOFILIA_ERROR, ID_CUENTA_HEMOFILIA, USUARIO_CREACION  from bd_proceso_hemofilia_error_frm where VIGENTE = 'S' and USUARIO_CREACION = ? and ID_CUENTA_HEMOFILIA = ?";
                pool.query(query, [userName,ID_CUENTA_HEMOFILIA], function (err, result, fields) {
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


export default DBProcesoHemofiliaErrorFrm;