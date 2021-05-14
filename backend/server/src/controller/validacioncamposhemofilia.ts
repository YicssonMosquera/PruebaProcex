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
            return false
        }
        return true
    }
    ismax(campo:any,max:any){
        if(campo.trim().length > max){
            return false
        }
            return true
    }
}

export const  validacionhemofila = new Validacionhemofila();