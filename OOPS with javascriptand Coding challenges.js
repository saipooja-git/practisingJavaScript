// //BAsic class
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`hello my name is ${this.name} and iam ${this.age} year's old`);
//     }
// }

// const Person1 = new Person('Pooja',24);
// Person1.greet();

// //inheritance

// class Person2{
//     constructor(name,age){
//         this.name =name;
//         this.age=age;
//     }
//     greet(){
//              console.log(`hello my name is ${this.name} and iam ${this.age} year's old`);
//             }
//         }

//         class Student extends Person2{
//             constructor(name,age,studentId){
//                 super(name,age);
//                 this.studentId=studentId;
//             }
//             study(){
//                 console.log(`${this.name} is studying `);
//             }
//         }
//         const Person3 = new Student('Pooja',24,'S565577');
//          Person3.greet();
//          Person3.study();

// //Encapsulation

// class Person4{
//     #name;
//     constructor(name,age){
//         this.#name=name;
//         this.age=age;
//     }
//     greet(){
//          console.log(`hello my name is ${this.name} and iam ${this.age} year's old`);
//         }
//     getName(){
//         return this.#name;
//     }
//     setName(newName){
//         this.#name=newName;
//     }
// }

// const person5 = new Person4('Saipooja',24);
// person5.greet();
// person5.getName();
// person5.setName('Puja');
// person5.greet();

// //Polymorphism
// class Animal{
//     makeSound(){
//         console.log("Some generic sound");
//     }
// }
// class Dog extends Animal{
//     makeSound(){
//         console.log("Bark");
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//         console.log("meow");
//     }
// }
// const animals = [new Animal(),new Dog(),new Cat()];
// animals.forEach(animal=>animal.makeSound());

// //abstraction

// class Shape{
//     constructor(name){
//         if(new.target===Shape){
//             throw new Error("cannot instantiate the abstract class");
//         }
//         this.name=name;
//     }
//     calculateArea(){
//         throw new Error("Method calculateArea must be implemented");
//     }
// }
// class Circle extends Shape{
//     constructor(radius){
//         super('Circle');
//         this.radius=radius;
//     }
//     calculateArea(){
//         return Math.PI*this.radius*this.radius;
//     }
// }

// const myCircle = new Circle(2);
// console.log(`${myCircle.name}: ${myCircle.calculateArea()} `)


// Summary
// Classes and Objects: Creating reusable blueprints for objects.
// Inheritance: Extending existing classes to create new ones.
// Encapsulation: Restricting direct access to some of an object's components.
// Polymorphism: Allowing objects of different classes to be treated as instances of the same class through a common interface.
// Abstraction: Hiding complex implementation details and exposing only the essential features.
// Method Overloading
// Method overloading is a feature that allows a class to have multiple methods with the same name but different parameters. However, JavaScript does not natively support method overloading as some other languages like Java or C#. Instead, you can achieve similar functionality through default parameters, rest parameters, and type checking within the method.

// Example: Simulating Method Overloading
// class Calculator {
//     add(a, b, c) {
//         if (typeof c !== 'undefined') {
//             return a + b + c;
//         }
//         return a + b;
//     }
// }

// const calc = new Calculator();
// console.log(calc.add(1, 2));    // Output: 3
// console.log(calc.add(1, 2, 3)); // Output: 6

// In the above example, the add method checks the number of arguments and behaves accordingly, simulating method overloading.

// Method Overriding
// Method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. The subclass method should have the same name and parameters as the method in the superclass.

// Example: Method Overriding
// class Animal {
//     makeSound() {
//         console.log('Some generic animal sound');
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log('Bark');
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         console.log('Meow');
//     }
// }

// const animals = [new Animal(), new Dog(), new Cat()];
// animals.forEach(animal => animal.makeSound());
// // Output:
// // Some generic animal sound
// // Bark
// // Meow

// When the makeSound method is called on an instance of Dog or Cat, the overridden method is executed.

// Method Overloading:

// Same method name with different parameter lists.
// Not natively supported in JavaScript.
// Can be simulated using default parameters, rest parameters, and type checking.

// Method Overriding:

// Subclass provides a specific implementation for a method that is already defined in the superclass.
// Fully supported in JavaScript through prototype inheritance.

// class Car{
//     constructor(make,speed){
//         this.make=make;
//         this.speed=speed;
//     }
//     accelerate(){
//         this.speed+=10;
//         console.log(speed);
//     }
//     brake(){
//         this.speed-=5;
//         console.log(speed);
//     }
// }
// const bmw1 = new Car();



// const Car=  
//     function(make,speed){
//         this.make=make;
//         this.speed=speed;
//     };
//     //In JavaScript, the prototype property allows you to add methods to a constructor function
//     Car.prototype.accelerate= function(){
//         this.speed+=10;
//         console.log(`${this.make} is going at ${this.speed}Km/h`);
//     }

//     Car.prototype.brake=function(){
//         this.speed-=10;
//         console.log(`${this.make} is going at ${this.speed}Km/h`);
//     }
// const bmw = new Car('BMW',120);
// const mercedes = new Car('MERCEDES',95);
// bmw.accelerate();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// bmw.brake();

// Class Declaration
// A class declaration is the most common way to define a class. It uses the class keyword followed by the class name.

// Example:
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     getArea() {
//         return this.height * this.width;
//     }
// }

// Creating an instance
// const rect1 = new Rectangle(10, 20);
// console.log(rect1.getArea()); // Output: 200

// Class Expression
// A class expression is another way to define a class. It can be named or unnamed (anonymous).

// Example (Named Class Expression):
// const Square = class Square {
//     constructor(side) {
//         this.side = side;
//     }

//     getArea() {
//         return this.side * this.side;
//     }
// };

// Creating an instance
// const sq1 = new Square(10);
// console.log(sq1.getArea()); // Output: 100

// // Example (Anonymous Class Expression):
// const Triangle = class {
//     constructor(base, height) {
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         return 0.5 * this.base * this.height;
//     }
// };

// // Creating an instance
// const tri1 = new Triangle(10, 5);
// console.log(tri1.getArea()); // Output: 25


// Class Declaration:

// Uses the class keyword followed by the class name.
// Cannot be used before it is declared (not hoisted).
// Always has a name.
// Class Expression:

// Can be named or anonymous.
// Cannot be used before it is defined (not hoisted).
// Useful for defining classes in functional scopes or in places where a declaration might not be appropriate.

// console.log(new Circle()); // ReferenceError: Cannot access 'Circle' before initialization

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
// }

// setters and getters
// const account ={
//     owner: 'jonas',
//     movements: [200,300,500,400],
//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         return this.movements.push(mov);
//     },
// };

// console.log(account.latest);

// account.latest=50;
// console.log(account.movements);

// console.log(account.latest);

// __proto__ is a property in JavaScript that allows you to access or modify the prototype of an object. The prototype is an internal property that points to another object from which it can inherit properties and methods.

// Usage of __proto__
// Accessing the Prototype

// You can use __proto__ to access the prototype of an object.


// const obj = {};
// const proto = obj.__proto__;
// console.log(proto); // Output: {} (the prototype of an empty object is Object.prototype)
// Setting the Prototype

// You can use __proto__ to set the prototype of an object. This is less common but can be useful in certain situations.

// const animal = {
//     eats: true
// };

// const rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // set rabbit's prototype to animal

// console.log(rabbit.eats); // Output: true (inherited from animal)
// Important Points
// Modern Alternative: Object.getPrototypeOf and Object.setPrototypeOf

// While __proto__ is widely supported, it is considered deprecated in favor of the standardized Object.getPrototypeOf and Object.setPrototypeOf methods.

// const animal = {
//     eats: true
// };

// const rabbit = {
//     jumps: true
// };

// // Setting prototype using Object.setPrototypeOf
// Object.setPrototypeOf(rabbit, animal);

// console.log(Object.getPrototypeOf(rabbit)); // Output: { eats: true }
// console.log(rabbit.eats); // Output: true
// Performance Considerations: Modifying an object's prototype with __proto__ or Object.setPrototypeOf can have negative performance implications and should be used judiciously.

// Prototype Chain: When accessing a property or method on an object, JavaScript will first look at the object itself. If it doesn't find the property, it will follow the prototype chain until it either finds the property or reaches the end of the chain (null).

// Example: Understanding Prototype Chain

// const animal = {
//     eats: true
// };

// const rabbit = {
//     jumps: true,
//     __proto__: animal // setting the prototype
// };

// console.log(rabbit.jumps); // Output: true (own property)
// console.log(rabbit.eats);  // Output: true (inherited from animal)
// console.log(rabbit.hasOwnProperty('eats')); // Output: false (inherited property)
// Summary
// __proto__ is a way to access or set the prototype of an object.
// It's better to use Object.getPrototypeOf and Object.setPrototypeOf for these tasks.
// Modifying prototypes can affect performance and should be done carefully.
// JavaScript uses the prototype chain to resolve properties and methods, starting from the object itself and moving up the chain.

//Object.create
// const personProto = {
//     calcAge(){
//         console.log(2037-this.birthYear);
//     },
// };

// const steven= Object.create(personProto);
// steven.birthYear=2002;
// steven.calcAge();

// Object.create is a method in JavaScript that creates a new object, using an existing object as the prototype of the newly created object. This is a powerful feature for creating objects with specific prototypes and can be useful for creating complex inheritance structures.

// Syntax
// Object.create(proto, [propertiesObject])
// proto: The object to be used as the prototype for the new object.
// propertiesObject (optional): An object whose enumerable own properties specify property descriptors to be added to the newly-created object.
// Basic Example
// Here's a basic example demonstrating how Object.create works:


// const animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walks");
//     }
// };

// const rabbit = Object.create(animal);
// rabbit.jumps = true;

// console.log(rabbit.eats); // Output: true (inherited from animal)
// console.log(rabbit.jumps); // Output: true (own property)
// rabbit.walk(); // Output: Animal walks (inherited method)
// In this example:

// The animal object is used as the prototype for the rabbit object.
// The rabbit object inherits properties and methods from the animal object.
// Additional properties can be added to the rabbit object.
// Using the propertiesObject Argument
// The propertiesObject argument allows you to define properties with specific descriptors (e.g., writable, enumerable, configurable). Here's an example:


// const animal = {
//     eats: true
// };

// const rabbit = Object.create(animal, {
//     jumps: {
//         value: true,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

// console.log(rabbit.jumps); // Output: true
// console.log(rabbit.eats);  // Output: true (inherited from animal)
// In this example:

// The jumps property is added to the rabbit object with specific property descriptors.
// Advantages of Object.create
// Prototypal Inheritance: Object.create allows you to create an object with a specific prototype, making it a powerful tool for implementing prototypal inheritance.

// More Control Over Property Descriptors: When adding properties to the new object, you can specify property descriptors to have more control over how the properties behave.

// Creating Null-Prototyped Objects: You can create objects with null as their prototype, which can be useful for creating objects without any inherited properties or methods.


// const obj = Object.create(null);
// console.log(Object.getPrototypeOf(obj)); // Output: null
// Example: Inheriting from a Prototype
// Here's a more complex example demonstrating inheritance:

// const vehicle = {
//     type: "vehicle",
//     start() {
//         console.log(`Starting the ${this.type}`);
//     }
// };

// const car = Object.create(vehicle, {
//     type: {
//         value: "car",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

// car.start(); // Output: Starting the car
// In this example:

// The car object inherits from the vehicle object.
// The type property is overridden in the car object.
// Summary
// Object.create creates a new object with a specified prototype.
// It allows for precise control over property descriptors.
// It is useful for implementing prototypal inheritance and creating objects with specific prototypes.
// The propertiesObject argument can be used to define properties with specific descriptors.
// By understanding and using Object.create, you can create more flexible and powerful inheritance structures in your JavaScript code.
//coding challenge 2

// class Car{ 
//     constructor(make,speed){
//         this.make=make;
//         this.speed=speed;
//     }
//     //In JavaScript, the prototype property allows you to add methods to a constructor function
//     accelerate= function(){
//         this.speed+=10;
//         console.log(`${this.make} is going at ${this.speed}Km/h`);
//     }

//     brake=function(){
//         this.speed-=10;
//         console.log(`${this.make} is going at ${this.speed}Km/h`);
//     }
//     get speedUS(){
//         return this.speed/1.6;
//     }
//     set speedUS(speed){
//       this.speed = speed*1.6;

//     }
// }
// const bmw = new Car('BMW',120);
// const mercedes = new Car('MERCEDES',95);
// const ford = new Car('FORD',120);
// bmw.accelerate();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// bmw.brake();
// ford.accelerate();
// ford.brake();
// ford.speedUS =30;
// console.log(ford);

// //Inheritance between classes -constructor functions

// In JavaScript, when you want to reuse functionality defined in one constructor function within another constructor function, you can use the call or apply method. These methods allow you to invoke a function (usually a constructor function) and explicitly specify the value of this and arguments to be passed to the function.

// Using call Method
// The call method is used to call a function with a given this value and arguments provided individually.

function Person(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
};
Person.prototype.calAge = function(){
    console.log(2037-this.birthYear)
};

function Student(name, birthYear, studentId) {
    // Reusing Person's initialization logic
    Person.call(this, name, birthYear);
    
    this.studentId = studentId;
};
Student.prototype = Object.create(Person.prototype);    
Student.prototype.introduce = function(){
    console.log(`My name is ${this.name} and my id is ${this.studentId}`);
};

const student1 = new Student('Alice', 1990, 'S12345');
console.log(student1.name); // Output: Alice
console.log(student1.birthYear); // Output: 1990
console.log(student1.studentId); // Output: S12345
console.log(student1);
student1.introduce();   
console.log(student1.__proto__);
console.log(student1.__proto__.__proto__);

//coding challenge 3
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}
        //In JavaScript, the prototype property allows you to add methods to a constructor function;

        Car.prototype.accelerate= function(){
            this.speed+=10;
            console.log(`${this.make} is going at ${this.speed}Km/h`);
        };
    
        Car.prototype.brake = function() {
            this.speed -= 10;
            console.log(`${this.make} is going at ${this.speed} Km/h`);
        };

     const ev = function(make,speed,charge){
        Car.call(this,make,speed);
        this.charge=charge;
     };
     ev.prototype =Object.create(Car.prototype);
     ev.constructor.prototype=ev;
     ev.prototype.chargeBattery = function(chargeTo){
        this.charge=chargeTo;
     }
     ev.prototype.accelerate = function(){
        this.speed+=20;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed}Km/h and its charge is ${this.charge}`);
     }
     const tesla = new ev('TESLA',120,24);
     tesla.accelerate(); // Output: "TESLA is going at 130 Km/h"
     tesla.brake();
    tesla.chargeBattery(70);
    console.log(tesla);
    tesla.accelerate();

    class Person1 {
        constructor(name, birthYear) {
            this._name = name; // Use the setter
            this.birthYear = birthYear;
        }
    
        calAge1() {
            return 2037 - this.birthYear;
        }
    
        set name(name) {
            this._name = name;
        }
    
        get name() {
            return this._name;
        }
    
        greet() {
            console.log(`${this.name} is ${this.calAge1()} years old`);
        }
    }

    class Student2 extends Person1{ 
        constructor(name,birthYear,sid){
            super(name,birthYear); //Person1.call(this,name,birthYear); --> for constructor classes
            this.sid=sid;
        }
        introducE()
        {
           console.log(`${this.name}'s id is ${this.sid} `);
    }
    }
    const sai = new Student2('Poojaaa',1999,'S565577');
    // sai.calAge1();
    sai.greet();
    sai.introducE();

    // inheritance using object.create

    const personProto = {
        calAge(){
            console.log(2037-this.birthYear);
        },
        init(firstName,doB){
            this.firstName=firstName;
            this.doB=doB;
        },
    };

    const studentProto =Object.create(personProto);
    studentProto.init = function(firstName,doB,course){
        personProto.init.call(this,firstName,doB);
        this.course=course;
    };
    studentProto.introducE=function(){
        console.log(`${this.firstName}'s course is ${this.course} `);
    };
    const jay = Object.create(studentProto);
    jay.init('jay',2010,'cs');
jay.introducE();

//coding chalenge 4
class Carcl
    {
        constructor(make, speed) {
    this.make = make;
    this.speed = speed;
}
        accelerate(){
            this.speed+=10;
            console.log(`${this.make} is going at ${this.speed}Km/h`);
        }
    
        brake(){
            this.speed -= 10;
            console.log(`${this.make} is going at ${this.speed} Km/h`);
        }
    }

     class EV extends Carcl{
        #charge;
       constructor (make,speed,charge){
        super(make,speed);
        this.#charge=charge;
     }
    
     chargeBattery(chargeTo){
        this.charge=chargeTo;
     }
     accelerate(){
        this.speed+=20;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed}Km/h and its charge is ${this.charge}`);
     }
    }
     const tessla = new EV('Rivian',120,24);
     tessla.accelerate(); // Output: "TESLA is going at 130 Km/h"
     tessla.brake();
    tessla.chargeBattery(70);
    console.log(tessla);
    tessla.accelerate();

    // ES6 is an advanced version of JavaScript, with some advanced features