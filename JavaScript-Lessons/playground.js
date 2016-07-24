"use strict";
function circleArea1(r)
{
    var PI = 3.14;
    return PI * r * r;
}
 
let circleArea2 = (r) => {
   const PI = 3.14;
   return PI * r * r;
};
let circleArea3 = (r) =>  3.14 * r * r ;
console.log(circleArea1(7));
console.log(circleArea2(7));
console.log(circleArea3(7));
let a = 2;
let b = 3;

let name = 'Juan';
console.log('My favorite person is '+name+' OK');
console.log(`My favorite person is ${name} OK`);
console.log(`My favorite person is ${a + b} OK`);
console.log(`My favorite person is ${circleArea3(a + b)} 
OK`);


function addNumbers(a,b,c)
{
    console.log(a+b+c);
}

var nums = [3,4,5];
addNumbers(nums[0],nums[1],nums[2]);
addNumbers(...nums);

var meats = ['bacon','jam'];
var food = ['apples', ...meats, 'kiwi', 'rice'];

console.log(food);

class Person{

     constructor(name,age, weight){
         this.name = name;
         this.age = age;
         this.weight = weight;
     }

    displayName(){
        console.log(this.name);
    }

    displayAge(){
        console.log(this.age);
    }

     displayWeight(){
         console.log(this.weight);
     }
}

class Programmer extends Person{

    constructor(name, age, weight, language){
        super(name, age ,weight);
        this.language=language;

    }
    displayLanguage(){
        console.log(this.language);
    }

}

console.log('-------------------------------');
let juan = new Person('Juan',27,70);
juan.displayName();
juan.displayAge();
juan.displayWeight();


console.log('-------------------------------');
let juan2 = new Programmer('Juan',87,870,'SQL');
juan2.displayWeight();
juan2.displayAge();
juan2.displayName();
juan2.displayLanguage();

/*Generator*/
function* sampleGenerator(){
    yield 'apples';
    yield 'bacon';
    console.log('This is teh line after bacon');
    yield 'corn';
}

let sample = sampleGenerator();
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next());
console.log(sample.next());

console.log('-------------');

function* getNextId(){
    let id = 0;
    while( id < 3)
        yield id++;
}

let createUser = getNextId();
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log('ok, I have to go');
console.log(createUser.next().value);
console.log(createUser.next().value);
console.log(createUser.next().value);









