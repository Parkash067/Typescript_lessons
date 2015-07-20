/**
 * Created by PK on 7/20/2015.
 */
/*
 https://tutorialstown.com/duck-typing-in-typescript/
 Duck-typing in TypeScript

 Duck-typing:

 Duck-typing is a method/rule for checking the type compatibility for more complex variable types.

 TypeScript compiler uses the duck-typing method to compare one object with other object by comparing that the both
 objects have the same type matching properties/variables names or not. If both objects are different from one another
 and have different property names then the TypeScript compiler will generates the compile-time error through the duck-typing
 method/rule.

 Duck-typing feature gives type safety in TypeScript code.

 Through the duck-typing rule TypeScript compiler checks that an object is same as other object or not.

 According to duck-typing method, the both objects must have matching same properties/variables types.

 Duck-typing is a powerful feature which brings strong typing concepts in TypeScript code.
*/
//step#1
/*let complex_type={name:"parkash",age:22};
/!*complex_type={name:"zain"};//error because object must have same number of properties as declared at the time of declaration
complex_type={age:22};//error because object must have same number of properties as declared at the time of declaration*!/
console.log(complex_type);
complex_type={age:21,name:"zain"};
console.log(complex_type);
complex_type={name:"parkash",age:22,address:"pib-colony"};
console.log(complex_type);
complex_type={name:"parkash",age:22,sex:"male"};
console.log(complex_type);*/
//Note: from above examples we can see that object must have those properties which we declared at the time of creation of objects.
//step#2
// Following is an object creation with different properties and it is assigned to a local variable bookList
var bookList = { book: "Typescript", id: 1 };
/* In following statements re-assigning another object with same properties to bookList variable. Notice each new object
declaration has same properties as well as also a new property. This is possible through duck-typing rule. */
bookList = { book: "JavaScript", id: 2, price: 1000 };
bookList = { book: "PHP.5.0", id: 3, price: 2000, isbn: 2054 };
/*bookList.author="chromevox";// not allowed*/
bookList["author"] = "chromvox";
console.log(bookList);
document.write("Author" + bookList.author + "<br>");
document.write("Book: " + bookList.book + " <br/>");
document.write("Id: " + bookList.id);
//# sourceMappingURL=lesson8_duck_typing.js.map