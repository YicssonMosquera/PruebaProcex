import { Request, Response, json, request } from 'express'
import pool from '../database'

class Validacionhemofila {

    isObligatorio(validacion:any){
        if(validacion == "S"){
           return true
        }
        return false
       
    }
    isnoObligatorio(validacion:any){
        if(validacion == "N"){
           return true
        }
        return false
       
    }
    isVoid(valorcampo:any){
        if(valorcampo.trim().length != 0){
            return true;
        }

        return false;
    }

    
    isMaxMin(campo:any, min:any, max:any,){
        if(campo.trim().length < min || campo.trim().length > max ){
            return true
        }
        return false
    }
    ismax(campo:any,max:any){
        if(campo.trim().length > max){
            return true
        }
            return false
    }
    isRango(valores:any,campo:any){
        let validacion = valores.split('-');
        if(campo >= validacion[0]  && campo <= validacion[1]){
            return true
        }
        return false
    }
    isCohincidencia(valores:any,campo:any){
        let validacion = valores.split(',');
        if(validacion.includes(campo)){
            return true
        }
        return false
    }
    isRangocohincidencia(valores:any,campo:any){
        let validacion = valores.split(',');
        let validacion2 = valores.split('-');
        if(campo >= validacion2[0]  && campo <= validacion2[1] || validacion.includes(campo)){
            return true
        }
        return false
    }

    validacioncampo30(valores:any,campo:any){
        let validacion = valores.split(',');
        let validacion2 = valores.split('-');
        if(campo >= validacion2[0]  && campo <= validacion2[1] ||campo >= validacion2[2]  && campo <= validacion2[3]  || validacion.includes(campo)){
            return true
        }
        return false
    }
}

export const  validacionhemofila = new Validacionhemofila();