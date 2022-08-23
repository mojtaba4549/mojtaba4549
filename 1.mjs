//const user = {console.log(r
//     "fn":"ali",
//     test : function(){
//         console.log("test1 is call!!!");
//         console.log(this.fn);
//         let thisparent = this;
//         // function test2(){
//         //     console.log("test2 is call!!!");
//         //     console.log(thisparent.fn);

//         // }
//         const test2= () =>{
//             console.log("test2 is call");
//             console.log(this.fn);
//         }
//         test2();
//     }
// };


// user.test();
// function calc(a,b){
//     const ret={};
//     ret['+']=a+b;
//     ret['-']=a-b;
//     ret['*']=a*b;
//     return ret;
// }

// const result = calc(2,5);

// console.log(result);
// console.log(result['*']);
// console.log(result['+']);
// function countDown(number)
// {
//     console.log(number);
//     let nextNumber = number - 1;
//     if(nextNumber > 0)
//         countDown(number - 1);

// }

// countDown(10);


// 


// const cat = {"type":"cat"};
// const dog={"type":"dog"};

// const run = function(a,b)
// {
//     console.log("run is called!!!");
//     console.log(a);
//     console.log(b);

//     console.log(this);

// }


// run.apply(cat);
// let car = {
//     speed : 5,
//     start :function(){
//         console.log(`speed is ${this.speed}`);

//     }
// }

// let aircraft ={
// speed : 10,
//     fly:function(){
//         console.log(`speed is ${this.speed}`);

//     }
// }

// const r = car.start.bind(aircraft);
// r();

// function test()
// {
//     let a = 10;
//     console.log("test is call !!!");
//     function test2()
//     {
//         console.log("test2 is call !!!");
//         console.log(a);
//     }
//     return test2();
// }

// const x = test();
// x();


// const f = [30,40,50,60,80];

// console.log(f);

// // f.unshift(10,20);

// console.log(f);

// function test(a){
//     console.log('test is call !!!');
//     console.log(a);

// }
// const r = f.find((data)=>{
//     console.log('data is :');
//     console.log(data); 
// });

// function test(a){
//     console.log('test is call');
//     console.log(a);
// }
// const r = f.find((data)=>{
//     console.log('data is :');
//     console.log(data);
// });

// const r = f.findIndex((item)=>item == 30);
// console.log(r);



// const r = users.find((item)=> item.username =="meisam");
// console.log(r);


const f =[30,40,50,60];
console.log(f);

// function test(a){
//     console.log(test);
//     console.log(a);

// const r = f.find((item)=>item == 40);
//     console.log('data is: ');
//     console.log(data);
//     return true;
// });

// console.log(r);
const users = [
    {"username":"ali","user_id":"1"},
    {"username":"reza","user_id":"2"},
    {"username":"meisam","user_id":"3"},
    {"username":"hasan","user_id":"4"},
    {"username":"gholam","user_id":"5"}
];
const data = [];
users.find((item)=> {
    if(item.user_id > 2)
        data.push(item);
});
console.log('finished');
console.log(data);