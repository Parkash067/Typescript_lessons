/**
 * Created by PK on 7/17/2015.
 */
// syntax for variable declaration in ts
// var variable_name : data_type = value; e.g
//step#1
var myname = "parkash";
//myname=2;  error
//myname=true; error
//myname=[]  error
/*
all above three lines are showing error because ts is strongly typed language therefore it is not allowing us to
pass a value of one type variable to other
 */
//step#2:more data types
var bool = true;
bool = false;
console.log("bool: " + bool);
var number = 3;
var another_number = number++;
console.log("number: " + number);
console.log("another number: " + another_number);
var a;
console.log("before assignation value of a: " + a);
a = "2";
console.log("after assignation value of a:" + a);
//step#3 :Inference type
var mystring = "abc";
mystring = 2; // error again we didn't define the type of
// variable but in ts what type of data is passed to variable  it becomes its data type according to type of data.
var b = true;
var c = b;
c = false;
//# sourceMappingURL=lesson2_strongly_typed.js.map