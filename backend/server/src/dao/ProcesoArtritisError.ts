import pool from '../database'

class ProcesoArtritisError{ 
    public static  guardar(artritisError) {
        try {
             pool.query('insert into bd_proceso_artritis_error_frm set ?', artritisError, function(err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizarEstado(Estado,ID_PROCESO_ARTRITIS_ERROR ) {
        try {
            pool.query('update bd_proceso_artritis_error_frm set VIGENTE = ? where ID_PROCESO_ARTRITIS_ERROR = ? ', [Estado,ID_PROCESO_ARTRITIS_ERROR], function (err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public getVigente(userName, ID_PROCESO_ARTRITIS_ERROR) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_ARTRITIS_ERROR, ID_CUENTA_ARTRITIS, USUARIO_CREACION  from bd_proceso_artritis_error_frm where VIGENTE = 'S' and USUARIO_CREACION = ? and ID_CUENTA_ARTRITIS = ? ";
                pool.query(query, [userName,ID_PROCESO_ARTRITIS_ERROR], function (err, result, fields) {
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


export default ProcesoArtritisError;