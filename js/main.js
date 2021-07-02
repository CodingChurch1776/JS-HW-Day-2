//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(person){
    person = person3
    return person3
}
console.log(favoriteFoods())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function createPerson(name, age){
    this.name = name;
    this.age = age;
    return this
}
console.log(createPerson('George', 25))
// Use an arrow to create the printInfo method
let printInfo = (person) =>{
    return person
}

// Create another arrow function for the addAge method that takes a single parameter
let addAge = (person) => {
    let i = Object.values(person)[1]
    return i++
}
// Adding to the age 
const person1 = new createPerson('Winnie', '27');
console.log(person1)
const person2 = new createPerson('Joe', '29');
console.log(person2)

console.log(addAge(person1))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
stringLength('hello')
.then( () => {
    console.log('Big Word')
})
.catch( () => {
    console.log('Small Number')
})

// =============JS CODEWARS #1 ============//
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/

function abbrevName(str){
    let names = str.split(' ');
    let result = `${names[0].charAt(0)}.${names[names.length - 1].charAt(0)}`;
    return result.toUpperCase()
}

// =============JS CODEWARS #2 ============//
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/


function positiveSum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++){
        if(i > 0){
        result += i;
        }
    return result
    }
}
positiveSum([10, 20, 30, 40])
 
OR

function positiveSum(arr) {
    let result = 0
    arr.forEach(number => {
        if (number > 0){
        result += number;
        }
    })
    console.log(result);
}
positiveSum([10, 20, 30, 40])