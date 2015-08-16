/**
 * Created by PK on 8/15/2015.
 */
//step#1
/*
class  car{
    static name:string="civic";
    static model:number=2015;
    static pickup()
    {
        document.write("Hundred miles per hour");
    }
}
 document.writeln("Name: "+car.name);
document.writeln("<br>Model "+car.model);
car.name="Accord";
car.model=2019;
document.writeln("<br><br>Name: "+car.name);
document.writeln("<br>Model "+car.model);*/
//step#2
var a = 3;
var Calculator = (function () {
    function Calculator() {
    }
    Object.defineProperty(Calculator, "v1", {
        /* Following are “static” getter and setter accessors which are setting and returning two digit values. */
        get: function () {
            return Calculator._V1;
        },
        set: function (value) {
            Calculator._V1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calculator, "v2", {
        get: function () {
            return Calculator._V2;
        },
        set: function (value) {
            Calculator._V2 = value;
        },
        enumerable: true,
        configurable: true
    });
    /* Following are number return type functions. These functions are declared as “static” functions and perform basic calculator operations.*/
    Calculator.add = function () {
        return Calculator.v1 + Calculator.v2;
    };
    Calculator.substract = function () {
        return Calculator.v1 - Calculator.v2;
    };
    Calculator.multiply = function () {
        return Calculator.v1 * Calculator.v2;
    };
    Calculator.divide = function () {
        return Calculator.v1 / Calculator.v2;
    };
    return Calculator;
})();
/* Following statements call two static “set” accessors v1 and v2 and set different values to private properties for calculations. Notice: these two property “set” accessors are called through a class name (Calculator) reference. */
Calculator.v1 = 10;
Calculator.v2 = 5;
/* Following, property’s “get” accessors and different calculation functions are being called through a class name reference and also display different results. */
document.write("Addition: " + Calculator.v1 + " + " + Calculator.v2 + " = " + Calculator.add() + "<br/>");
document.write("Substraction: " + Calculator.v1 + " - " + Calculator.v2 + " = " + Calculator.substract() + "<br/>");
document.write("Multiplication: " + Calculator.v1 + " * " + Calculator.v2 + " = " + Calculator.multiply() + "<br/>");
document.write("Division: " + Calculator.v1 + " / " + Calculator.v2 + " = " + Calculator.divide());
//# sourceMappingURL=lesson8.js.map