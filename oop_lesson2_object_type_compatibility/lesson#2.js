/**
 * Created by PK on 7/28/2015.
 */
//step#1
/*
class human{
    name:string;

    constructor(person:string)
    {
        this.name=person;
    }

    eat()
    {
        console.log(this.name +"is a human"+" .He likes to eat more");
    }
}

class Animal{
    name:string;

    constructor(animal_name:string)
    {
        this.name=animal_name;
    }

    eat()
    {
        console.log(this.name +"is a human"+" .He likes to eat meat");
    }
}
class alien
{
    name:string;
     constructor(alien_name:string)
     {
         this.name=alien_name;
     }
}
let h:human=new  human("Parkash");
let a:Animal=new Animal("tiger");
let a_lein=new alien("Jaadu");


let h1:Animal=new human("Zain");
console.log("Is h1 instance of human:"+ (h1 instanceof human));//true
console.log("Is h1 instance of Animal:"+ (h1 instanceof Animal));//false

//let obj:Animal=new alien("Jaadu");//error
let obj:alien=new Animal("Jaadu");
*/
//type checking
//final step
var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.eat = function () {
        console.log(this.name + " is a Human and is eating");
    };
    return Human;
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is a Animal and is eating");
    };
    return Animal;
})();
var Robot = (function () {
    function Robot(name) {
        this.name = name;
    } /*
    eat()
    {

    }*/
    return Robot;
})();
var h = new Human("Tom");
var a = new Animal("Goat");
var r = new Robot("R2-D2");
var r0 = new Animal("Donkey"); //how is this possible?
/*let a1: Animal=new Robot("Ak45"); //minimum matches the properties */
var isItRobot = r0 instanceof Robot;
console.log("Is Donkey a Robot: " + isItRobot); //false, giving the right results
var isItAnimal = r0 instanceof Animal;
console.log("Is Donkey a Animal: " + isItAnimal); //true, giving the right results
/* TypeScript is a structural type system which is different from Java, C#, etc. When we compare two different types,
 regardless of where they came from,
 if the types of each member are compatible, then we say the types themselves are compatible. */
var h2 = h;
h = a; //both have same properties and methods therefore are compatible
h.eat();
var a2 = a;
var r2 = r;
r = a;
console.log(a.eat());
/*
name = name
?    = eat()
*/
//Animal has a name, Robot also has a name
//a = r2;//Error, Robot does not have eat method
/*
name = name
 eat () = ?
*/
//Note: All left hand side properties must be present in right hand side.if any property is missing error will be occur 
//# sourceMappingURL=lesson#2.js.map