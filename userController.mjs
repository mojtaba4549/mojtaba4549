// import BaseControler from "./BaseController.mjs";


// class UserController extends BaseControler{

//     async index(req,res){
//         return res.send('i am index of user');
//     }
//     async login(req,res){
//         try{
//             a=10;
//             return res.send('i am login');
//         }
//         catch(err){
//             return super.toError(res, err);
//         }
        
//     }
// }


// export default new UserController();'

import BaseControler from "./BaseController.mjs";

class userController extends BaseControler
{
    constructor(){
        super();

    }
    test(){
        return "test";
    }
    async login(req,res){
        try{
            const r = this.test();

            
            return res.send("loin!!!" + r);
        }
        catch(e){

        }
    }
}



export default new userController();