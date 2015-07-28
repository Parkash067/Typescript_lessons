/**
 * Created by PK on 7/25/2015.
 */
//step#1 tuple  syntax ()=>
var add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));
//step#2
var add1 = function (x, y) { return (typeof (x + y)); };
console.log(add1(true, "helo"));
/*var myFunction = f => { this.x = "x"; };// showing undefined
var fun=new myFunction("demo");
console.log(fun);*/
//this code eqquivalent to below code
/*
 var myfun=function(f) {
 // this.x="x";
 this.x=f;
 }
 var fun1 = new myfun("helo");
 console.log(fun1.x);*/
var myFunction = function (f) { return "x"; };
var fun = myFunction("demo");
console.log(fun);
//# sourceMappingURL=lesson15.js.map