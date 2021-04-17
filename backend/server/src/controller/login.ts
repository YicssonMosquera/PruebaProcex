import { Request, Response, json, request } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import {helpers} from '../lib/helpers';


class Logincontrollers{
    public async Login(req: Request, res: Response) {
        let { PKUsuario, password } = req.body
        let JWT_Secret = 'procex';
        try {
          
            var query = "SELECT * FROM tblusuario WHERE PKUsuario =?"
            let usuario = await pool.query(query, [PKUsuario], async function (err, result, fields) {
                if (result.length > 0) {
                    console.log(result)
                    let match = await bcrypt.compare(password, result[0].password);
                    if (match) {
                        result  = result[0];
                        delete result .password;
                        var token = jwt.sign(JSON.stringify(result), JWT_Secret);
                        res.json({ signedUser: result, token: token });
                        
                    }
                    else {
                        res.status(404).json({ text: "Contraseña no valida" });
                    }
                }
                else {
                    res.status(404).json({ text: "Usuario no valido" });
                }
               
            });
        }
        catch (error) {
            res.status(404).json({ error: 'No se puedieron obtener Datos' });
        };
    }

     public async crearusuario (req: Request, res: Response){
        let NewUser = req.body;
        try {
            NewUser.password = helpers.encriptPassword(NewUser.password);
            var create = await pool.query('insert into tblusuario set ?', [req.body]);
            console.log(req.body)
            res.json({ message: 'Datos guardado con exito' });

        }
        catch (error) {
            res.status(404).json({ error: 'No se pudieron almacenar datos' });
        };
    }


}
export const  logincontrollers = new Logincontrollers();