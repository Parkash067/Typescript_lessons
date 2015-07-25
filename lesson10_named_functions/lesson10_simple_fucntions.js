/**
 * Created by PK on 7/21/2015.
 */
//step#1 function with out arguments
function simple_fucntion() {
    return console.log("hlo this is step#1");
}
simple_fucntion();
//step#2 function with arguments
function argument_function(a, b, c) {
    return a + b + c;
}
document.write(argument_function(2, 3, 4) + "<br>");
document.write(argument_function("2", "3", "5") + "<br>");
document.write(argument_function(2, "3", "5") + "<br>");
document.write(argument_function("2", 3, "5") + "<br>");
document.write(argument_function("2", 3, 5) + "<br>");
document.write(argument_function("2", "3", 5) + "<br>");
document.write(argument_function(2, 3, "5") + "<br>");
//step#3
function strongly_type(a, b) {
    return a + b;
}
console.log(2, 3);
console.log("3" + 3);
//step#4
/*function return_strong_type():string{
    return <any>console.log("helo");
}
return_strong_type();*/
//step#5
function sum(a, b) {
    return "" + a + b;
}
var result = sum(5, 4);
console.log(result);
console.log(typeof result);
//step#6
function demo() {
    var a = "20";
    return console.log(typeof a);
}
demo();
//# sourceMappingURL=lesson10_simple_fucntions.js.map