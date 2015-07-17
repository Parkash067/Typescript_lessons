/**
 * Created by PK on 7/17/2015.
 */
console.log("lesson 1");
document.write("lesson1");
document.writeln("lesson1");

//In above all lines there is no error

console.log(2);
document.write(2);// error, In ts its argument must be in the string form


//to overcome this prolem we can use to string method
 document.write((2).toString());