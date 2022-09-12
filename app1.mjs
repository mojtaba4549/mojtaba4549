// import * as lib from './lib.mjs';

// const r = lib.sum(10,20);
// console.log(lib.Price);
// lib.test();
// console.log(r);
// lib.updatePrice(100);
// console.log(lib.Price);


// let data = new Map();

// data.set("fn","ali");
// data.set("ln","reza");
// console.log(data);
// console.log(typeof data);

// console.log(data.get("fn"));
// console.log(data.get("ln"));

// console.log(data.size);


// console.log(data.keys());

// data.delete('')
// console.log(data.has("fn"zxcc

// function test(status)
// {
//     return new Promise(function(resolve, reject)=>{
//         setTimeout(()=>{
//             if(status == 1){
//                 const users = [
//                     {"username":"ali","user_id":1},
//                     "username":"reza","user_id":2}
//                 ];
//                 resolve(users);
//             }
//         })
//     }
// }



//  class car
//  {
//     model = 'car-1000';
//     #year = 1991;
    
//     constructor(test){
//         console.log("constractor is called");
//         //console.log(test);
//         console.log(this.model);
//         console.log(this.#year);
//         console.log(this.test);
//     }
//     move(){
//         console.log("car is moving");
//     }
//     break(){
//         console.log("car is breaking");
//     }

//  }
    
// let car1 = new car();
// //let car2 = new car('ali');

//  //console.log(car1.break());

//  car1.move();



import express from "express";

    const app = express();
    const port = 3000;

    app.get('/',async(req,res)=>{
        // return res.status(200).send(`this is ${port}`);
        try{
            const a=10;
            return res.send(`welcome to a is ${a}`);
        }
        catch(err){
            return res.status(500).send(err.toString());

        }
    })


    app.post('/a',async(req,res)=>{
        console.log(req);
        console.log(req.url);
        console.log(req.method);
        console.log(req.headers);
        res.send('welcome to post');
    })

    





app.listen(port,async()=>{

});