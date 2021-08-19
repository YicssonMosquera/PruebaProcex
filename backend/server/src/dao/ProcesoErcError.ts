import pool from '../database'

class ProcesoErcError {

    public static guardar(ErcError) {
        try {
            pool.query('insert into bd_proceso_erc_error_frm set ?', ErcError, function (err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public static actualizarEstado(Estado,ID_PROCESO_ERC_ERROR ) {
        try {
            pool.query('update bd_proceso_erc_error_frm set VIGENTE = ? where ID_PROCESO_ERC_ERROR = ? ', [Estado,ID_PROCESO_ERC_ERROR], function (err, result, fields) {
                if (err) throw err;
            });
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

    public getVigente(userName, ID_PROCESO_ERC_ERROR) {
        return new Promise(function (resolev, reject) {
            try {
                var query = "select ID_PROCESO_ERC_ERROR, ID_CUENTA_ERC, USUARIO_CREACION  from bd_proceso_erc_error_frm where VIGENTE = 'S' and USUARIO_CREACION = ? and ID_CUENTA_ERC = ? ";
                pool.query(query, [userName,ID_PROCESO_ERC_ERROR], function (err, result, fields) {
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


export default ProcesoErcError;