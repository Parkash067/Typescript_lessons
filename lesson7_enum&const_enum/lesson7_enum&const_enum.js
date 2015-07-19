/**
 * Created by PK on 7/19/2015.
 */
/*
what is enum?
enum is a specific datatype which is used to specify numeric form into human readable form
*/
//step#1
var doorstate;
(function (doorstate) {
    doorstate[doorstate["open"] = 0] = "open";
    doorstate[doorstate["close"] = 1] = "close";
    doorstate[doorstate["ajar"] = 2] = "ajar";
})(doorstate || (doorstate = {}));
console.log("The state of a door is: " + 0 /* open */);
//alternate way to write this
console.log("The state of a door is: " + 0 /* "open" */);
var door_state = 2 /* ajar */;
console.log("type of door_state variable: " + typeof door_state);
// to access the state of a door we write this
console.log("The state of a door is: " + doorstate[2]);
//typescript set the value of states by default starting from 0
//step#2
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = 1 /* Green */;
//step#3
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = -2] = "Green";
    Color1[Color1["Blue"] = -1] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[-2]; // alternate way var colorname= Color1[1];
console.log("value of color_name: " + colorName);
console.log(-1 /* Blue */);
console.log("constant enum: " + 1 /* on */);
console.log("constant enum: " + 1 /* "on" */);
//console.log("constant enum: "+button.off);
//console.log("constant enum"+button[2]);// error: constant enum doesn't allow this 
//# sourceMappingURL=lesson7_enum&const_enum.js.map