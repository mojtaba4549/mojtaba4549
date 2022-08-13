const user = {
    "fn":"ali",
    test : function(){
        console.log("test1 is call!!!");
        console.log(this.fn);
        let thisparent = this;
        // function test2(){
        //     console.log("test2 is call!!!");
        //     console.log(thisparent.fn);

        // }
        const test2= () =>{
            console.log("test2 is call");
            console.log(this.fn);
        }
        test2();
    }
};


user.test();
