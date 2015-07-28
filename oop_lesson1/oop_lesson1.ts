/**
 * Created by PK on 7/28/2015.
 */
  /* for concept visit this link */
//https://tutorialstown.com/typescript-classes-and-objects/
/*
Syntax of a class declaration:

class ClassName{

    Members (any class member)

}

class ClassName:

A class declaration with class keyword and its name.
{:

    A class definition starting scope.
    Members (any class member):

    This statement is called class members. The class members can be properties, functions,  anything else etc.
}:*/
//step#1
/* class boy{
     name:string="parkash";
     age:number=22;
 }

//syntax defining an object
// var object_name:class_name=new class_name
var obj:boy=new boy;
document.write("Name: "+obj.name+"<br>");
document.write("Age: "+obj.age+"<br>");*/

//this can be done also like this
/*
 class boy
 {
     name:string;
     age:number;
 }
var obj:boy=new boy;
obj.name="parkash";
obj.age=22;
document.write("Name: "+obj.name+"<br>");
document.write("Age: "+obj.age+"<br>");
*/


/*
class MarkSheet { // declare a class MarkSheet, start its scope.

    /!* Following is the initialization of string and number type class attributes/properties, here these attributes are called fields. *!/
    studentName: string = "Abc";
    address: string = "Xyz";
    tsMarks: number = 95;
    aspMarks: number = 80;

} // End class definition scope.

/!* Following statement creates the object of a class MarkSheet or creates an actual mark sheet. *!/
var markSheet: MarkSheet = new MarkSheet();

/!* Following statements print the different kind of information of a Mark sheet by using the reference variable
(markSheet) of type MarkSheet class followed by dot operator (.), dot operator links a class member with a reference variable. *!/
document.write("Mark sheet object: <br/>");

document.write("Student name: " + markSheet.studentName + "<br/>");
document.write("Address: " + markSheet.address + "<br/>");
document.write("TypeScript marks: " + markSheet.tsMarks + "<br/>");
document.write("Asp.net marks: " + markSheet.aspMarks);
*/

//step#2
/*class calculator{
    firstnumber:number=2;
    secondnumber:number=4;
    add()
    {
        return this.firstnumber+this.secondnumber;
    }
}
var calculate:calculator=new calculator();
var result=calculate.add();
console.log("Result is: "+result);*/

// this can be done as
/*class calculator{
    firstnumber:number=2;
    secondnumber:number=4;
    add(a=this.firstnumber,b=this.secondnumber)
    {
        return a+b;
    }
}
var calculate:calculator=new calculator();
var result=calculate.add(2,3);
console.log("Result is: " +result);*/


//step#3
/*class biodata{
    name:string;
    age:number;
    constructor()
    {
        this.name="parkash";
        this.age=22;
    }
}
var info:biodata=new biodata();
document.writeln("Name: "+info.name +"<br>");
document.writeln("age: "+info.age+"<br>");*/

//this can be also done as
/*class biodata{
    name:string;
    age:number;
    constructor(name_of_person:string,age_of_person:number)
    {
        this.name=name_of_person;
        this.age=age_of_person;
    }
}
var info:biodata=new biodata("parkash",22);
document.writeln("Name: "+info.name +"<br>");
document.writeln("age: "+info.age+"<br>");*/

//step#4
/*
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);
console.log(p3);*/

//step#5
/*class MarkSheet { // declare a class MarkSheet, start its scope.

    /!* Notice, in this example we do not initialize class fields in this class, we just declared these fields. *!/
    studentName: string;
    address: string;
    tsMarks: number;
    aspMarks: number;

    /!* Following is a declaration of a parametrized constructor with four parameters, it initializes four properties or initialize a Mark sheet object with values. *!/
    constructor(studentName: string, address: string, tsMarks: number, aspMarks: number) {
        this.studentName = studentName;
        this.address = address;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
    }

} // End class definition scope.

/!* Class constructor is automatically called when Marksheet object or instance is created, NOTICE: class constructor is called after new keyword as MarkSheet() and also four arguments are being passed to the constructor. *!/
var markSheet: MarkSheet = new MarkSheet("Abc", "Xyz", 95, 80);

/!* Following statements print the different kind of information of a Mark sheet by using the reference variable (markSheet) of type MarkSheet class followed by dot operator (.), dot operator links a class member with a reference variable. *!/
document.write("Mark sheet object: <br/>");

document.write("Student name: " + markSheet.studentName + "<br/>");
document.write("Address: " + markSheet.address + "<br/>");
document.write("TypeScript marks: " + markSheet.tsMarks + "<br/>");
document.write("Asp.net marks: " + markSheet.aspMarks);*/


//step#6
/*class greeter{
    name:string;
    constructor(person:string)
    {
        this.name=person;
    }
    greet()
    {
        return "Welcome "+this.name;
    }
}
var greeting:greeter=new greeter("Parkash");
console.log(greeting.greet());*/



