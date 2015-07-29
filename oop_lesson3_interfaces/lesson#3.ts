/**
 * Created by PK on 7/29/2015.
 */
 //for concepts read this link https://tutorialstown.com/typescript-interfaces/
//step#1
/*interface Ihuman{
    name:string;
    age:number;
    eat();
}
//those properties and method declare in interface must be in class also.
class human implements Ihuman{
    name:string="paraksh";
    age:number=20;
    eat(){
return console.log(this.name+" is a human. he can eat also. His age is "+this.age);
    }
}

var Human:human=new human();
Human.eat();*/

//step#2
/*interface Icalculator{
    first_number:number;
    second_number:number;
    calculate():number

}

class calculator implements Icalculator{
    first_number=2;
    second_number=44;
    calculate():number{
        return this.first_number+this.second_number;
    }
}
 let calculate:calculator=new calculator();
 let result=calculate.calculate();
document.write("The sum of number is: "+result);*/

//step#3
//unnamed object
/*function printLabel(labelledObj: {label: string}) {
    console.log(labelledObj.label);
    console.log(typeof labelledObj);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);*/

//step#4
/*interface addition{
    num1:number;
    num2:number;
}

function add(Inum1:addition)
{
    console.log(Inum1.num1+Inum1.num2);
}

var num_obj={name:"parkash",num1:1,num2:3};
add(num_obj);*/

//step#5
/*
interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel1(myObj);
*/


//*********************************************************************************************
//step#6
/* An interface declaration which has different types of functions and properties declaration.*/
/*
interface IMarksheet {

    studentName: string;
    tsMarks: number;
    aspMarks: number;
    htmlMarks: number;

    getName(): string;
    totalMarks(): number;
    obtMarks(): number;
}

/!* An another interface declaration which has a function declaration.*!/
interface IMarksheetComponent {

    percentage(total: number, obtain: number): number;
}

/!* a class declaration which implements two interfaces at once IMarksheet and IMarksheetComponent. This class is responsible to must implements all the functions and properties of these interfaces. *!/
class MarkSheet implements IMarksheet, IMarksheetComponent {

    // properties declaration of different types.
    studentName: string;
    tsMarks: number;
    aspMarks: number;
    htmlMarks: number;

    // parameterized constructor which creates a marksheet object.
    constructor(studentName: string, tsMarks: number, aspMarks: number, htmlMarks: number) {
        this.studentName = studentName;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
        this.htmlMarks = htmlMarks;
    }

    /!* function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default. *!/
    getName(): string {
        return (this.studentName);
    }

    /!* function declaration which returns total marks. It has number as its return type, empty parameter-list and public access by default. *!/
    totalMarks(): number {
        return 300;
    }

    /!* function declaration which returns obtain marks. It has number as its return type, empty parameter-list and public access by default. *!/
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks + this.htmlMarks);
    }

    /!* function declaration which returns percentage. It has number as its return type, 2 number type parameters and public access by default. *!/
    percentage(total: number, obtain: number): number {
        return obtain / total * 100.0;

    }
}

/!* object creation of mark sheet 1, provide different kinds of information as arguments to its constructor. *!/
var markSheet: MarkSheet = new MarkSheet("ABC", 85, 70, 80);

/!* Following statements call the different functions of above class through its class reference (reference variable) and also print them. *!/
document.write("<table border='1'>");
document.write("<tr><td>"+"Marksheet:"+" </td></tr>");
document.write("</table>");
document.write("Student name: " + markSheet.getName() + "<br/>");
document.write("TypeScript marks: " + markSheet.tsMarks + "<br/>");
document.write("Asp marks: " + markSheet.aspMarks + "<br/>");
document.write("Html marks: " + markSheet.htmlMarks + "<br/>");
document.write("Total marks: " + markSheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + markSheet.obtMarks() + "<br/>");
document.write("Percentage: " + markSheet.percentage(markSheet.totalMarks(), markSheet.obtMarks()));
*/
//step#7 // interface_optional parameters
/*interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    var newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

var mySquare = createSquare({color: "black",width:100});
console.log(mySquare);*/

//step#8
/*
 interface SquareConfig {
 color?: string;
 width?: number;
 }

 function createSquare(config: SquareConfig): {color: string; area: number} {
 var newSquare = {color: "white", area: 100};
 if (config.color) {
 newSquare.color = config.collor;  // Type-checker can catch the mistyped name here
 }
 if (config.width) {
 newSquare.area = config.width * config.width;
 }
 return newSquare;
 }

 var mySquare = createSquare({color: "black"});  */


//step#9 function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myresult=mySearch("parkash","pr");
document.write(""+myresult);

/*For function types to correctly type-check, the name of the parameters do not need to match.
 We could have, for example, written the above example like this:

 var mySearch: SearchFunc;
 mySearch = function(src: string, sub: string) {
 var result = src.search(sub);
 if (result == -1) {
 return false;
 }
 else {
 return true;
 }
 }
 */