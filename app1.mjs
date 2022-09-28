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
//import UserController from "./userController.mjs";
import path, { resolve } from "path";
import process, { title } from "process";
import {input,toNumber} from "./utils.mjs";   
import news from "./news.mjs";   
import nunjucks from "nunjucks";
import userController from "./userController.mjs";
import { error } from "console";



    const BASE_URL = "http://localhost:3000";
    const app = express();
    const port = 3000;
    app.locals.BASE_URL = BASE_URL;
    app.use(express.static('assets'));
    // app.get('/',async(req,res)=>{
    //     // return res.status(200).send(`this is ${port}`);
    //     try{
    //         const a=10;
    //         return res.send(`welcome to a is ${a}`);
    //     }
    //     catch(err){
    //         return res.status(500).send(err.toString());

    //     }
    // })
    //console.log(path.dirname);

    const templateEngine = nunjucks.configure('view',{
        autoescape : true,
        express : app,
        noCache : false,
    });
    const rootPath = process.cwd();
    
    app.get('/',async(req,res) =>{
        try{
            const data = {
                // "fn":"ali",
                // "ln":"hasan",
                // "age":100,
                "title":"Home!",
                "news" :news
            };
            //let fn = Array.isArray(req.query.fn) ? '' : req?.query?.fn;
            // fn = fn ?? '';
            // fn = fn.trim();
            
            //const fn = req?.query?.fn.trim() ?? '';
            //const {fn} = req.query;
            // console.log(req.query);
            // return res.sendFile(rootPath+'/view/1.html');    
            res.render('index.html',data);
        }
        catch(e){
           return res.status(500).send(e.toString());
        }
    });

    app.get('/result',async(req,res)=>{
        try{
            const fn = input(req.query.fn);
            const ln = input(req.query.ln);
            let html = `hi <b>${fn} ${ln}</b> `;
            return res.send(html);
        }
        catch(e){
            return res.status(500).send(e.toString());
        }
    })

    app.get('/about-us',async(req,res)=>{
        try{
            return res.send('about us');
        }
        catch(e){
            res.status(500).send(e.toString());    
        }
    })

    app.get('/news/:id',async(req,res)=>{
        try{
            //const id = req.params.id;
            //const title = req.params.title;
            const id = toNumber(input(req.params.id));
            const id2 = parseInt(id);
            if(id2>0){
                const newsRow = news.find((item)=>item.id === id);
                console.log(newsRow);
                if(newsRow){

                    // res.send(`${newsRow.title}`)
                    const data = {
                        "news" : newsRow
                    };
                    res.render('news.html',data);
                }
                else{
                    res.send(`${id} news not found`);
                }
            }
            else{
                res.send('error input is not valid');
            }            
            
        }
        catch(e){
            res.status(500).send(e.toString()); 
        }
    })
   // app.get('/user',UserController.index);
   // app.get('/user/login',UserController.login);

    app.post('/a',async(req,res)=>{
        console.log(req);
        console.log(req.url);
        console.log(req.method);
        console.log(req.headers);
        res.send('welcome to post');
    })

    
app.get('/user/login',userController.login);
app.use(async(error,req,res,next)=>{
    const data = {
        "error": error,
    }
    return res.status(500).render('500.html');
})

app.use(async(req, res)=>{
    return res.status(404).render('404.html'); 
})

app.listen(port,async()=>{

});