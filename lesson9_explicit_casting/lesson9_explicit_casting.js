/**
 * Created by PK on 7/20/2015.
 */
//step#1
var a = "parkash";
console.log(typeof a);
a = 2;
console.log(typeof a);
a = "pakistan";
console.log(typeof a);
var b = true;
b = 3;
//step#2
var number_array = [1, 3, 4, 5, 6];
number_array[2] = "parkash";
for (var i = 0; i < number_array.length; i++) {
    document.write(i + "=" + number_array[i] + "<br>");
}
document.write("<hr>");
//step#3
var string_array;
string_array = [1, "string", true];
for (var i = 0; i < string_array.length; i++) {
    document.write(i + "=" + typeof string_array[i] + "<br>");
}
//step#4
var aray = [1, 3, "parkash"];
//step#5
var duck_type = { name: "parkash", age: 22 };
console.log(duck_type);
duck_type = { name: "parkash" };
console.log(duck_type);
/*duck_type={address:"pib colony"};//error*/
duck_type = { name: "parkash", age: 22, sex: "male" };
console.log(duck_type);
//step#6
var complex_type = { name: "parkash", id: 067 }; // once you define object with <any> then you can add,update and remove property easily
console.log(complex_type);
complex_type = { shape: "circle", dimension: "2D" };
console.log(complex_type);
complex_type = { shape: "square" };
console.log(complex_type);
//# sourceMappingURL=lesson9_explicit_casting.js.map