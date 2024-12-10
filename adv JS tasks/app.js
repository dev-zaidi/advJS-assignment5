// Global Scope
var question1='this is decalred with var';
let questionOne='this is decalred with let';
const QuestionOne='this is decalred with const';

function testingQuestion1(){
console.log(question1);
console.log(questionOne);
console.log(QuestionOne);

console.log(question1.charAt(0));
console.log(questionOne.charAt(5));
console.log(QuestionOne.toUpperCase());
}
testingQuestion1();
// This can be seen clearly that every variable can be accessed globally when they are decalred globally.

//==================================================================================================================
// Function scope
function testingQuestion2(){
    var question2='question 2';
    let questionTwo='question Two';
    const QuestionTwo='Question Two';
}

// console.log(question2);
// console.log(questionTwo);
// console.log(QuestionTwo);

// Accessing the variables declared with wether var, let or const is not possible. when they are decalred inside a function, they can't be accessed globally.

//==================================================================================================================
//Block Sope
if(true){
    var question3='block scope var question 3 output';
    let questionThree='block scope let question 3 output';
    const QuestionThree='block scope const question 3 output';    
}

console.log(question3);
// console.log(questionThree);
// console.log(QuestionThree);

// the variables declared with let and const are not accessible globally when declared inside a block, where as we can clearly see that the variable declared with var is accessible.


//==================================================================================================================
// Hoisting with var
console.log(questionFour);
var questionFour='this is hositing';

// when a variable is decalred with var, and hoisted, it gives undefined.

//==================================================================================================================
// Hoisting with let and const
// console.log(questionFive);
let questionFive='hositing with let';
// console.log(QuestionFive);
const QuestionFive='hoisting with const';

// app.js:62 Uncaught ReferenceError: Cannot access 'questionFive' before initialization
// Uncaught ReferenceError: Cannot access 'QuestionFive' before initialization at app.js:64:13
// above mentioned are the errors of being called without being initialized or before initialization- uncaught refernce error


//==================================================================================================================
// In computer programming, variable DECLARATION is the process of specifying a variable's name and data type, while variable ASSIGNMENT is the process of assigning a value to the variable

// Re-Declaration
var question6;
var question6;

// reDeclaration is possible when variable is declared using var.

let questionSix;
// let questionSix;

// reDeclaration is not possible when variable is declared using let and it shows an error- compile time error that a variable once decalred with let , can not be redeclared.

// const QuestionSix;
// const QuestionSix;

// just as let, reDeclaration is not possible when variable is decalred using const and it shows an erro- compile time erro tha a variable once decalred with const, can not be redecalred, other than that const requires initialization as well we cant just declare a variable using const without assigning a variable to it.



// variable decalred with var is redeclarable where as cas is no same with let and const

//==================================================================================================================
// ReAssignment
var question7=12;
var question7='hiba';

// when a variable is declared with var, it can be reassigned and it will attain the value it  was given at the last.

let questionSeven=14;
// let questionSeven='areej';

// when a variable is decalred with let, it can not be reassigned a value it will show u compile time error. in console, it says that the identifier has already been decalred.

const QuestionSeven=15;
// const QuestionSeven='zaidi';

// when a variable is declared with const, it can not be reassigned a value it will show u compile time error, in console, it says tha the identifier has already been decalred.

//==================================================================================================================
// Temporal Dead Zone(TDZ)
// In JavaScript, a temporal dead zone (TDZ) is a period when a variable is declared but not yet initialized and cannot be accessed. The TDZ occurs between the creation of a variable and when it is declared
if(true){
    // console.log(question8);
    let question8='temporal dead zone question with let';

    // console.log(questionEight);
    let questionEight='temporal deadzone question with const'
}

// it is giving the same error it was gving previously that it ca nnot access question8 before initialization for both let and const.
// TEMPORAL DEAD ZONE is related to time- specifically the order in which the code is executed.


//==================================================================================================================

// When to use var, let, and const
// question9

function example() {
    if (true) {
        var x = 10;  // var is function-scoped, not block-scoped
    }
    console.log(x); // Output: 10, because x is accessible outside the block
}
example();


let age = 25;  // The value can be changed
age = 30;      // Reassigning a new value is allowed
console.log(age); // Output: 30


const name = 'Alice';  // The value cannot be reassigned
// name = 'Bob';       // Error: Assignment to constant variable.
console.log(name); // Output: Alice



//==================================================================================================================
// String interpolation
let personsFirstName='Hiba';
let personsSecondName='Areej';
console.log(`Hello, My name is ${personsFirstName} ${personsSecondName}`);

//==================================================================================================================
// Multi-line Strings
console.log(`Address<br> House No. : B93 <br> Street : 7th <br> Area : Scheme 33`);


//==================================================================================================================
// Simple Expressions
let n1=50;
let n2=22;
console.log(`Sum of the number ${n1} and ${n2} is ${n1+n2}`);

//==================================================================================================================
// Function Calls
function multiply(num1=+prompt("Enter the first number:"), num2=+prompt("Enter the second number:")) {
    return num1 * num2;
  }

// let result = multiply(num1, num2);
// console.log(`The product of ${num1} and ${num2} is: ${result}`);
// i have commented it so it doesnt pop up alert again and again.


//==================================================================================================================
// Creating a Tagged Template
function printUserInput(name=prompt("Enter your name"),age=prompt("Enter your age")){
     return console.log(`Name of the user is ${name} and their age is ${age}`);
}
// printUserInput();


//==================================================================================================================
// Formatting
function formatting(userInput=prompt("Enter a String")){
    return  console.log(`Previously the string was: <br> ${userInput} <br> Now the function have changed it to upperCase: <br> ${userInput.toUpperCase()}`);
}
  
// formatting();


//==================================================================================================================
// Condittional logic

let rightnow=new Date;
// let rightNowHours=rightnow.getHours();
let rightNowHours=13;
let check = 
(rightNowHours>5 && rightNowHours< 12) ? `Good Morning`:
(rightNowHours>=12 && rightNowHours< 16) ? `Good Afternoon`:
(rightNowHours>=16 && rightNowHours< 21) ? `Good Evening`: `Good Night`
console.log(check);

//==================================================================================================================
// Loops within Template Literals:

let shoppingList=['Apples', 'Oranges', 'Strawberries', 'Pineapple','Cherry'];
for (var i=0;i<shoppingList.length;i++){
    console.log(`<br>${shoppingList[i]} <br>`)
}

//==================================================================================================================
// Escaping Backticks:
let backtick="``";
console.log(`This is how you can use ${backtick} - back ticks. `);

//==================================================================================================================
// Nested Template Literals
console.log(``);




//==================================================================================================================
// Simple Condition
/*let age=+prompt(`input your age`);
let canVote= age>=18 ? "Allowed to vote" : "Not Allowed to vote";
console.log(canVote); */



//==================================================================================================================
// Even or Odd
/*let number = +prompt(`Input a number to check wether its Even or Odd`);
let evenOrOdd= (number%2===0) ? 'Even' : 'Odd';
console.log(`The entered number ${number} is ${evenOrOdd}`) ;*/



//==================================================================================================================
// Grade evaluation
/*let score=+prompt(`Enter your Score:`);
let grade= (score>=90) ? 'A' :
(score>=80) ? 'B' :
(score>=70) ? 'C' :
(score>=60) ? 'D' : 'F';
console.log(grade);*/



//==================================================================================================================
// Login Status
/*let isLoggedIn=prompt(`Enter true or false`);
let statusMessage= (isLoggedIn=true) ? 'Welcome Back!' : 'Please Log in';
console.log(statusMessage);*/


//==================================================================================================================
// Discount Eligibility:
/*let isMember=prompt(`Enter true or false`);
let purchaseAmount=+prompt(`Enter the amount`)
let discount= (isMember==true && purchaseAmount>100) ? `${purchaseAmount*0.10} discount` : `0 discount`;
console.log(discount);*/


//==================================================================================================================
// Determine Max Value:
function maxValue(a=+prompt('enter first number'),b=+prompt(`Enter second number`)){

    return checkMax= (a>b) ? `${a} is Max`:`${b} is max`
}
/*let maximunvalue=maxValue();
console.log(maximunvalue);*/




//==================================================================================================================
// Greeting Message
function greet(name=prompt(`Enter your name:`)){
     return (name != '') ? `Hello, ${name}!`:`Hello Guest!`
}
/*let greeting=greet();
console.log(greeting);*/



//==================================================================================================================
// Mapping Values
let arrayOfNumbers=[1,2,3,4,5,6,7,8];
console.log(arrayOfNumbers.map(mapping));

function mapping(x){
    let checking = (x%2==0)? 2*x : 3*x;
    return checking;
}
//==================================================================================================================
//  Filtering Values
let arrayOfStrings=['ali','bisma','javeria','rohan','aun'];
let filtered=arrayOfStrings.filter(names=>names.length>3);
console.log(filtered);

//==================================================================================================================
// Copying an Array
let originalArray=[1,2,3,4,5,6];
let copiedArray=[...originalArray];

console.log(originalArray);
console.log(copiedArray);
// we can check that both do not have the same reference by adding a value to copied array and other one will not be affected.

copiedArray.push(34);
console.log(copiedArray);
// through the output we can judge that both the arrays do not have same reference


//==================================================================================================================
// Merging Arrays
let array1=[12,34,56];
let array2=[78,90];
let mergedArray=[...array1, ...array2];
console.log(mergedArray);


//==================================================================================================================
// Adding Elements to an Array
let numbers=[13,24,57,68];
numbers.push(10);
// numbers.push(...rest=prompt('enter values'));
console.log(numbers);


//==================================================================================================================
// Copying an Object
let originalObject={
    name:"Hiba",
    age:23,
    status:true
}

let copiedObject={...originalObject};
console.log(originalObject);
console.log(copiedObject);


//==================================================================================================================
// Merging Objects
let object1={
    bookTitle:'The wizard of OZ',
    bookStatus:true,
    bookPrice:123
}
let object2={
    title:'The Millionaire',
    status:false,
    bookPrice:456
}
// i have kept the bookPrice key same, lets see which value will it keep if we merge the objects.

let mergeObject={...object2, ...object1};
console.log(mergeObject);

// upon merging, it is taking the value of the same key, that is stated at the last.



//==================================================================================================================
// Updating Object Properties
let user={
    name:'Hiba',
    age:23,
    email:'hiba@gmail.com'
}

let updateUser={...user};
updateUser.email='hibaareej@gmail.com';
updateUser.address='Scheme 33';

console.log(updateUser);


//==================================================================================================================
// Passing Array Elements as Arguments

/*let numbers=[a=+prompt("1st number"),b=+prompt("2nd number"),c=+prompt("3rd number")];
function sum(...numbers){
    return sum= a+b+c;
}
let result=sum(1,2,3);
console.log(result);
*/


//==================================================================================================================
// Combining Multiple Arrays
let arrayA=['a','b','c','d'];
let arrayB=['e','f','g','h'];
let arrayC=['i','j','k','l'];
let combineArrays=[...arrayA,...arrayB,...arrayC];
console.log(combineArrays);

//==================================================================================================================
// Rest parameter with Spread operator
let multiply1=(a,...rest)=>{
let restArray=[...rest];
// using rest word but its a spread operator above
let multiplied=restArray.map(num=>num*a);
console.log(multiplied);
}
multiply1(5,2,3,4,5,6,7);

//==================================================================================================================
// Spread Operator with Nested Structures
let original=[1,2,[3,4,5,6],7,8,[9]];
let copy=[...original];
copy[3]=[12,34,56];
console.log(copy);
console.log(original);

//==================================================================================================================
// sum function
function sumEverything(...rest){
let sum=[...rest]
let sumFunc=sum.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sumFunc);
}
sumEverything(1,2,3,4);
sumEverything(12,45,67,89);
//==================================================================================================================
// average function
function averageOfEverything(...rest){
let avg=[...rest];
let avgFunc=avg.reduce((accumulator,currentValue)=>accumulator+currentValue,0)/(avg.length);
console.log(avgFunc);
}
averageOfEverything(1,2,3);
averageOfEverything(41,52,63);

//==================================================================================================================
//First and rest
let firstAndRest=[2,4,6,8,10];
let [first,...rest]=firstAndRest;
console.log(first);
console.log(rest);


//==================================================================================================================
//Skip and rest
let colors=['red','yellow','blue','green','orange'];
let [one, two, ...remainingColors]=colors;
console.log(remainingColors);


//==================================================================================================================
// Basic Destructring 
let details={
    name1:'Hiba',
    email:'hiba@gmail.com',
    age:23,
    address:'Karachi'
}
const {name1,email,...remainingKeys}=details;
console.log(name1);
console.log(email);
console.log(remainingKeys);

// here if we do not give default values for name and email, they will log undefined.

// ==================================================================================================================
// Nested Destructuring
let student={
    id:'123',
    name2:'Ali',
    grade:'A',
    info:{
        age:23,
        major:'CS'
    }
}

let {id,name2,...remaining}=student;
console.log(id);
console.log(name2);
console.log(remaining);

// ==================================================================================================================
// Renaming variables
let car={
    make:'XYAZ',
    model:'XYXZ',
    year:'2024'
}
let {make:carMake,model:carModel,year:carYear}=car;
console.log(carMake);


// ==================================================================================================================
// Default Values
let setting={
    theme:'ABC',
    language:undefined
}
let{theme,language="English"}=setting;
console.log(theme);
console.log(language);
// the value of key language will be attained from the object, default value will be used if the key is not assigned in the object.


// ==================================================================================================================
// Array of Arrays
let arrayOfArrays=[[1,2],[3,4],[5,6]];
let [[a],[b],[c]]=arrayOfArrays;
console.log(a);
console.log(b);
console.log(c);


// ==================================================================================================================
// Object within an Object
let profile={
    userNAme:'Hiba',
    detial:{
        email1:'hiba@gmail.com',
        address:'Karachi'
    }
}

let {userNAme,detial:{email1,address}}=profile;
console.log(userNAme);
console.log(email1);
console.log(address);


// ==================================================================================================================
// Mix of Arrays and Objects
let data={
    id3:'12',
    info3:[{name3:'Alice'},{age3:25}]
}
let {id3,info3:[{name3},{age3}]} = data;
console.log(id3);
console.log(name3);
console.log(age3);


// ==================================================================================================================
// Array parameters
printCoordinates=([x,y])=>{
    let[valueOfX,valueOfY]=[x,y]
    console.log(valueOfX);
    console.log(valueOfY);
} 
printCoordinates([2,3]);
printCoordinates([12,30]);

// ==================================================================================================================
// Object Parameters
displayUser=(({name4,age4})=>{
    let {nameValue,ageValue}={name4,age4};
    console.log(nameValue);
    console.log(ageValue);
});
displayUser({name4:'Sara',age4:12});
displayUser({name4:'Ali',age4:21});



// ==================================================================================================================
// List property names
let book={
    title:'A NEW BOOK',
    author:'well-Known',
    year:2024
}
console.log(Object.keys(book));

// ==================================================================================================================
// count properties
let students={
    name5:'Hiba',
    age5:23,
    grade:'A',
    school:'AMS'
}
let countProoperties=Object.keys(students)
console.log(countProoperties);
console.log(countProoperties.length);

// ==================================================================================================================
// Iterate over Keys
let product={
    nameOfProduct:'IceCream',
    price:100,
    category:'Edible'
}
let iterateOverKeys=Object.keys(product);
for (iterateOverKeys in product){
    console.log(`${iterateOverKeys}: ${product[iterateOverKeys]}`);
};

// ==================================================================================================================
// List property values
let movie={
    title:'Movie Of the Year',
    director:'Well-Known',
    year:2024,
    genre:'Action'
}

console.log(Object.values(movie));


// ==================================================================================================================
// sum Values
let scores={
    math:89,
    science:87,
    english:90
}
let scoreArray=Object.values(scores);
let sumOfScores=scoreArray.reduce(function (sum,value){
    return sum+value})
console.log(scoreArray);
console.log(sumOfScores);

// ==================================================================================================================
// Iterate over Values
let user1={
    username:'Hiba',
    email2:'hiba@gmail.com',
    location:'Karachi'
}
let iterateOverValues=Object.values(user1);
for(iterateOverValues in user1){
    console.log(`${user1[iterateOverValues]}`);
}


// ==================================================================================================================
// List Entries
let cars={
    make1:"ABCD",
    model1:'EFGH',
    year1:2024
}
let carsEntries=Object.entries(cars);
console.log(carsEntries);

// ==================================================================================================================
// Convert Object into Array
let person={
    fNAme:"Hiba",
    lName:"Areej",
    age6:23
}
person=Object.entries(person);
console.log(person);

// ==================================================================================================================
// Iterate over Entries
let settings={
    themes:"123",
    notifications:"456",
    privacy:"789"
}
let settingArray=Object.entries(settings);
for(settingArray in settings){
   console.log(`${settingArray}:${settings[settingArray]}`);
}


// ==================================================================================================================
// Filter Keys
let inventory={
    apple:2,
    bananas:4,
    oranges:56,
    grapes:78
}
let filterKeys=Object.values(inventory);
let filteredArray=filterKeys.filter(num=>num>10);
console.log(filteredArray);


// ==================================================================================================================
// Transform Values
let temperature={
    morning:'16',
    afternoon:'19',
    evening:'28'
}
let temperatureEntries=Object.entries(temperature);
let convertedToFerenhite=temperatureEntries.map(([key,value])=>{
    let ferenhite=(value * 9) / 5 + 32;
    return [key,ferenhite]
});
console.log(temperature);
console.log(`${convertedToFerenhite}`);

let aaaaa=['👀'];
console.log(aaaaa);

let results=fetch('https://jsonplaceholder.typicode.com/posts');
console.log(results);


// ==================================================================================================================
// Key-Value swap
let roles={
    admin:'the admin guy',
    editor:'the editor',
    viewer:'the view guy',
}
let roles2=Object.entries(roles);
let roles3=roles2.map(([key,value])=>{return [value,key]})
console.log(roles3);


// ==================================================================================================================
// Filter and Map

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterAndMap=(array,filterFunction,mapFunction)=>{
    return arrayOfArrays.filter(filterFunction).map(mapFunction)}
const isOdd = (num) => num % 2 !== 0;
const square = (num) => num * num;
const result = filterAndMap(number, isOdd, square);
console.log(result);

// ==================================================================================================================
// Sort and Reduce
let word=['apple','date','banana','cherry'];
const sortAndReduce=(arrayVar,sortFunction,reduceFunction)=>{
    return arrayVar.sort(sortFunction).reduce(reduceFunction)
}
const isSorted=(a,b)=>a.localeCompare(b);
const isReduced=(acc,curr)=>acc+curr;

const resultedArray=sortAndReduce(word,isSorted,isReduced);
console.log(resultedArray);

// ==================================================================================================================
// Simple callBack
greet=(aName,aFn)=>{
    return aFn(aName);
}

const printGreeting=(nameGiven)=>{
    console.log(`Welcome ${nameGiven}`);
}
greet('hiba',printGreeting);

// ==================================================================================================================
// Asynchronous CallBack
fetchData=(url)=>{
    return fetch(url)
}
setTimeout(fetchData('https://fakestoreapi.com/products/1')
.then(res=>res.json())
.then(displayData=>console.log(displayData))
,9000)

// ==================================================================================================================
// Simple Arrow Function
add=(a,b)=>{
    return a+b
}
console.log(add(3,5));


// ==================================================================================================================
// Arrow function with Array methods
const anArr=[1,2,3,4,5];
const newArr=anArr.map((keys)=>{
    return keys*keys
});
console.log(newArr);


// ==================================================================================================================
// varaible scope

const outer=()=>{
    const x=5;
     const inner=()=>{
        return console.log(x);
    }
    inner();
}
outer();
// it is displaying the value of x in console



// ==================================================================================================================
// closure
createCounter=()=>{
    let count=1;
    console.log(count);
    
    //inner function 
    const aNewFn=()=>{
        return count++
    }

    // calling inner function
    aNewFn();
    console.log(count);
    
}
createCounter();


// ==================================================================================================================
// Simple Default Parameters
greetings=(nameForGreeting,message="Hello")=>{
    console.log(`${message} ${nameForGreeting}`);
}
greetings('hiba','hi');
greetings('hiba');

// ==================================================================================================================
// Default parameters with other arguments
calcualteArea=(width=10,height=5)=>{
    return width*height
}
console.log(calcualteArea());


// ==================================================================================================================
// Square Number
aNewArray=[1,2,3,4,5];
const resultOfANewArray=aNewArray.map((e)=>{return e*e});
console.log(resultOfANewArray);



// ==================================================================================================================
// Convert to Uppercase
let words=['apple','banana','cherry'];
const resultOfWords=words.map((e)=>{return e.toLocaleUpperCase()})
console.log(resultOfWords);



// ==================================================================================================================
// Filter Even Numbers
let numbers1=[1,2,3,4,5,6,8,,9,10];
let resultOfNumbers1=numbers1.filter((e)=>{if (e%2===0) return e});
console.log(resultOfNumbers1);



// ==================================================================================================================
// Filtering Long Words
let words1=['apple','banana','cherry','date'];
let resultOfwords1=words1.filter((e)=>{if (e.length>5) return e});
console.log(resultOfwords1);



// ==================================================================================================================
// Log Numbers
let nums=[1,2,3,4,5].forEach((e)=>{ return console.log(e);});


// ==================================================================================================================
//Log with Lengths
let words2=['apple','banana','cherry','date'].forEach((e)=>{return console.log(e.length)}) 
 

// ==================================================================================================================
// sum of numbers
let anArray2=[1,2,3,4,5];
let resultOfAnArray2=anArray2.reduce((acc,sum)=>{ return acc+sum},0);
console.log(resultOfAnArray2);


// ==================================================================================================================
// Concatenate Strin,
const words3=['Hello','World','this','is','JavaScript'];
let resultOfWords3=words3.reduce((acc,e)=>{return acc+" "+e })
console.log(resultOfWords3);


// ==================================================================================================================
// Check For Even Numbers
const number2=[1,3,5,7,8];
let resultOfNumber2=number2.some((e)=>{if (e%2===0) return e});
console.log(resultOfNumber2);


// ==================================================================================================================
// check for long numbers
const words4=['apple','banana','cherry','date'];
let resultOfWords4=words4.some((e)=>{if (e.length>5) return e});
console.log(resultOfWords4);


// ==================================================================================================================
// Find the first even number
const number3=[1,3,5,7,8];
let resultOfNumber3=number3.find((e)=>{if(e%2===0) return e})
console.log(resultOfNumber3);
    

// ==================================================================================================================
// Find Long Word
let words5=['apple','banana','cherry','date'];
let resultOfWords5=words5.find((e)=>{if (e.length>5) return e});
console.log(resultOfWords5);


// ==================================================================================================================
// find index of first even number
const number4=[1,3,5,7,8];
let resultOfNumber4=number4.findIndex((e)=>{if (e%2===0) return e});
console.log(resultOfNumber4);


// ==================================================================================================================
// find index of long word
const words6=['apple','banana','cherry','date'];
let resultOfWords6=words6.findIndex((e)=>{if(e.length>5) return e});
console.log(resultOfWords6);


// ==================================================================================================================
// simple Promise
const delayed=new Promise((resolve,reject)=>{
    setTimeout( resolve(`Hello World`),2000);
   })
  

delayed
.then(res=>console.log(res))
.catch(err=>console.log(err));


// ==================================================================================================================
// Promise Chain
const fetchD=()=>{
    return new Promise((resolve,reject)=>{
        const dataToFetch={
            greeting:'Hello People',
            salutation:'Sir, Maam'
        }
        resolve(dataToFetch);
    })
};
fetchD()
.then(
    (data)=>{
        console.log(data);
        console.log(Object.keys(data));  
    }
)
// ==================================================================================================================
// Error Handling
const fetchUserData=()=>{
    return new Promise((resolve,reject)=>{
        const userData={
            userName:'name',
            userQualification:'BSCS',
            userAge:23,
        }
    if (!userData.userAge){
        reject('user data is missing the age property')
    }
    else{
        resolve(userData)
    }});
}
fetchUserData()
    .then(
    (data)=>{
        console.log(data);
    })
    .catch(
    (error)=>{
        console.log(error);
    }
    );

// ==================================================================================================================
// Simulate Network request
const getWeather=()=>{
    // not using the fetch method, instead using set time out
    return new Promise((resolve,reject)=>{
            // using a random number to generate true or false as per fetch-> success or failure in fetching
        setTimeout(()=>{
            const trueValue= Math.random()>0.9;
            if (trueValue){
                const resultData={
                    temperature:12,
                    humidity:8
                }
                resolve(resultData);
            }
            else{
                reject('unsuccessful Fetching...');
            }
        })

    });
};

getWeather()
.then(
    (data)=>{console.log(data);
    }
)
.catch(
    (error)=>{
        console.log(error);
        
    }
);

// ==================================================================================================================
// Simple async Function

// making a delay function
function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    })
}
// this delay function will delay the process by given time in paratmeres
const sayHello=async()=>{
    await delay(2000);
    // here, await will perform delay function that is wait for delay function's execution that reuslts in delay of given time and then perform the below code
    console.log('"Hello, World!"');
}
sayHello();

// ==================================================================================================================
// Fetch data with async await
const getUSerData=async ()=>{
   try {
    const dataResult=await fetchUserData();
    console.log(dataResult);
    
   } catch (error) {
    console.log(error);
   }
}
getUSerData();

// ==================================================================================================================
// Fetch with process Data
const fetchUser=()=>{
    return new Promise((resolve,reject)=>{
        const user1={
            name6:'Fecth&Process',
            question:'third-Last',
            userName:'Hiba',
            age:23,
        }
        resolve(userData1);
    })
}

const fetchPosts=()=>{
    return new Promise((resolve,reject)=>{
        const UserPost=[{id:1,heading:'post1'},{id:2,heading:'post2'},{id:3,heading:'post3'},{id:4,heading:'post4'}];
        resolve(UserPost);
    })
}


const getUserAndPost=async()=>{
    try {
        const person1=await fetchUser();
    console.log(person1);
    const posts=await fetchPosts();
    console.log(posts);
    } catch (error) {
        console.log();
        
    }
}
getUserAndPost();

// Function that returns a promise resolving with user data
function fetchUser() {
    return new Promise((resolve) => {
        const userData = { name: "Hiba", age: 23 };
        resolve(userData);
    });
}

// Function that returns a promise resolving with user posts
function fetchPosts(user) {
    return new Promise((resolve) => {
        const posts = [
            { id: 1, title: "Post 1", content: "This is the first post." },
            { id: 2, title: "Post 2", content: "This is the second post." }
        ];
        resolve(posts);
    });
}

// Async function to get user and their posts
async function getUserAndPosts() {
    try {
        const user = await fetchUser();
        console.log("User data:", user);

        const posts = await fetchPosts(user);
        console.log("User posts:", posts);
    } catch (error) {
        console.error("Error fetching user or posts:", error);
    }
}

// Call the getUserAndPosts function
getUserAndPosts();