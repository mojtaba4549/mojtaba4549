 
 export function input(field){
   try{
    if(!Array.isArray(field)) {
        if(typeof field === 'string')
            return field.trim();
        else
            return '';
    }  
    else 
        return '';
}
    catch(e){
        return '';
    }

}


export function toNumber(str){
    try{
        const ret = Number(str);
        return isNaN(ret)? 0 : ret;
    }
    catch(e){
        return 0;
    }
}
