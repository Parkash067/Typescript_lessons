/**
 * Created by PK on 7/22/2015.
 */
//step#1
/*let myfun=function(a,b){
    return a+b;
}
let result_myfun=myfun(2,3);
console.log(result_myfun);*/
//step#2
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var prod = function (a, b) {
    return a * b;
};
var divide = function (a, b) {
    return a / b;
};
var a = '-';
var result;
switch (a) {
    case '+':
        result = add(2, 3);
        console.log(result);
        break;
    case '-':
        result = subtract(3, 4);
        console.log(result);
        break;
    case '*':
        result = prod(10, 5);
        console.log(result);
        break;
    case '/':
        result = divide(36, 4);
        console.log(result);
        break;
    default:
        console.log("Invalid operation");
}
//step#3 function type  ()=>
var myfun = function () {
    return 2;
};
var demo = function (a, b) {
    return a + b;
};
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
//# sourceMappingURL=lesson11_anonymous_function.js.map