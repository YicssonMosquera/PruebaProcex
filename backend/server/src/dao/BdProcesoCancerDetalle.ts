import pool from '../database'

class BdProcesoCancerDetalle{ 
    public static  guardar(newDatos) {
        try {
            pool.query('insert into bd_proceso_cancer_detalle set ?', [newDatos])
        }
        catch (error) {
            //res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }

}


export default BdProcesoCancerDetalle;