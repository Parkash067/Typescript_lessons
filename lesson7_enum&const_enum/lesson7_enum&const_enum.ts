/**
 * Created by PK on 7/19/2015.
 */

/*
what is enum?
enum is a specific datatype which is used to specify numeric form into human readable form
*/

//step#1
enum doorstate
{
    open,
    close,
    ajar
}
console.log("The state of a door is: "+doorstate.open);
//alternate way to write this
console.log("The state of a door is: "+doorstate["open"]);

var door_state=doorstate.ajar;
console.log("type of door_state variable: "+typeof door_state);
// to access the state of a door we write this
console.log("The state of a door is: "+doorstate[2]);
//typescript set the value of states by default starting from 0

//step#2
enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;


//step#3
enum Color1 {Red = 1, Green=-2, Blue};
var colorName: string = Color1[-2];   // alternate way var colorname= Color1[1];

console.log("value of color_name: "+colorName);
console.log(Color1.Blue);


/* ============ ******** constant Enum *********** ============  */
// const enum is efficient then only enum because it only generates corresponding js which state is in use
const enum button
{
   off,
    on
}
console.log("constant enum: "+button.on);
console.log("constant enum: "+button["on"]);
//console.log("constant enum: "+button.off);

//console.log("constant enum"+button[2]);// error: constant enum doesn't allow this