// class BaseControler{
//     constructor(){
//         if(this.constructor === BaseControler){
//             throw new Error("BaseControler is abstract class can not instance");
//         }
//     }     
//     toError(res,error){
//         res.status.send(error.toString()); 
//     }
// }
// export default BaseControler
import autoBind from "auto-bind";
export default class BaseControler 
{
    constructor(){
        autoBind(this);
        if(this.constructor === BaseControler){
            throw new Error("BaseControler is abstract class can not instance");
        }
    }
}