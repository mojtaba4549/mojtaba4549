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
import {input} from "./utils.mjs"
class userController extends BaseControler
{
    constructor(){
        super();

    }
    test(){
        return "test";
    }
    async login(req,res){
        res.render("/user/login.html");
    }


    async postLogin(req,res){
        const username = input(req.body.username);
        const password = input(req.body.password);
        res.send(`hi ${username} ${password}`);
    }
}



export default new userController();