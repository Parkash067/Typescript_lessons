/**
 * Created by PK on 8/2/2015.
 */

//https://tutorialstown.com/typescript-constructor-with-super-keyword/
//http://www.johnpapa.net/typescriptpost3/

//step#1
/*class biodata
{
 firstname:string;
  lastname:string;
    age:number;
    eat(){
        document.writeln("Behaviour: Human being can eat"+"<br><br><br>");
    }

}

class boy extends biodata{
    firstname="parkash";
    lastname="kumar";
    age=22;
}

let info :biodata=new biodata();
let boy1:boy=new boy();
document.write("First Name: "+ boy1.firstname+"<br>");
document.write("Last Name: "+ boy1.lastname+"<br>");
document.write("Age: "+ boy1.age+"<br>");
boy1.eat();*/


//step#2
/*class biodata
{
    firstname:string;
    lastname:string;
    age:number;
    eat(){
        document.writeln("Behaviour: Human being can eat"+"<br><br><br>");
    }
    constructor(firstname:string,lastname:string,age:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;

    }

}

class ali extends biodata
{
    skills:string;
    constructor(firstname:string,lastname:string,age:number,skills:string)
    {
        this.skills=skills;

        super(firstname, lastname, age);
    }

}
//let info :biodata=new biodata("parkash","kumar",20);
let boy:ali=new ali("parkash","kumar",20,"html,css,js,php");

document.write("Skills: "+boy.skills);*/


//step#3
// a class declaration. This is a base class.
/*
class MarkSheet {

    // properties declaration of different types.
    studentName: string;
    tsMarks: number;
    aspMarks: number;

    /!* function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default. *!/
    getName(): string {
        return (this.studentName);
    }

    /!* function declaration which returns total marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class. *!/
    totalMarks(): number {
        return 300;
    }

    /!* function declaration which returns obtain marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class.*!/
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks);
    }

    /!* function declaration which returns percentage. It has number as its return type, 2 number type parameters and public access by default. *!/
    percentage(total: number, obtain: number): number {
        return obtain / total * 100.0;

    }
}

/!* Following is another class BcsMarksheet declaration, notice its syntax here it is inheriting a MarkSheet class means BcsMarksheet class is a derived or child class of MarkSheet and MarkSheet class is a base or parent class of BcsMarkSheet, so all the public members of base MarkSheet class is now exists in derived BcsMarksheet class and can be access through BcsMarksheet object reference. *!/
class BcsMarksheet extends MarkSheet {

// 2 properties are declared in this derived class.
    htmlMarks: number;
    javaMarks: number;

    /!* following functions is re-implemented in this class. This process is called function overriding. *!/
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks + this.htmlMarks + this.javaMarks);
    }

    /!* following functions is re-implemented in this class. This process is called function overriding. *!/
    totalMarks(): number {
        return 400;
    }
}

// object creation of Bcs mark sheet with default constructor.
var bcsMarksheet: BcsMarksheet = new BcsMarksheet();

/!* Following statements call the different functions of above class through its derived class reference (reference variable) and also print them. *!/
document.write("Bcs Mark sheet: <br/>");

bcsMarksheet.studentName = "Abc";
bcsMarksheet.tsMarks = 85;
bcsMarksheet.aspMarks = 70;
bcsMarksheet.htmlMarks = 65;
bcsMarksheet.javaMarks = 55;

document.write("Student name: " + bcsMarksheet.getName() + "<br/>");
document.write("TypeScript marks: " + bcsMarksheet.tsMarks + "<br/>");
document.write("Asp marks: " + bcsMarksheet.aspMarks + "<br/>");
document.write("Html marks: " + bcsMarksheet.htmlMarks + "<br/>");
document.write("Java marks: " + bcsMarksheet.javaMarks + "<br/>");
document.write("Total marks: " + bcsMarksheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + bcsMarksheet.obtMarks() + "<br/>");
document.write("Percentage: " + bcsMarksheet.percentage(bcsMarksheet.totalMarks(), bcsMarksheet.obtMarks()));
*/


//step#4
class Animal {
    name:string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(meters: number =0) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
    bite(){
        console.log("bites");
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 45) {
        alert("Galloping...");
        super.move(meters);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meters = 1) {
        alert("Jumping...");
        super.move(meters);
    }
}

let a: Animal = new Snake("Python");
a.move(5);//Snake move method is called not Animals, this is because of polymorphism
let animal:Animal=new Animal("turtle");
animal.move();
/*
let a1: Animal = new Horse("Rocket");
let h: Horse = a1;//no explicit casting needed because has same methods and properties (structural type)

let s1: Snake = <Snake> a;//explicit casting needed because Snake has an additional method bite()

let h1 : Horse = new Cat("Kitten");//why is this allowed? Because it has same properties and methods (structural type) not because of inheritance
*/


