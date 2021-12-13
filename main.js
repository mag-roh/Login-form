// let, const(block level significance/scope)
/*
const age=30;
age=31;
console.log(age);*/
// syring, numbers, boolean, null, undefined
/*const name='John';//string
const age=30;//numbers
const rating=4.5;//decimal(not present,just a number)
const isCool=true;//boolean
const x=null;//not true object typeof
const y=undefined;//or let z;

console.log(typeof y);*/

//Stirng
/*
Concatenation
const name='John';
const age=30;
console.log('My name is ' + name + ' and I am ' + age);
const hello = `My name is ${name} and I am ${age}`;//template string
console.log(hello);
*/
//a property doesnt have a parenthesis otherwise its a method.
//method is a function associated with an object
/*
string properties
const s='Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
console.log(s.split(' '));
*/
//Arrays
/*const numbers=new Array(1,2,3,4,5);
console.log(numbers);

const fruits=['apples', 'oranges', 'pears'];
console.log(fruits);
fruits[3]='grapes';
fruits.push('mangoes');
fruits.unshift('strawberries');
console.log(fruits[1]);
fruits.pop();
console.log(Array.isArray(fruits));
console.log(Array.isArray('Hello'));
console.log(fruits.indexOf('oranges'));
console.log(fruits);
*/

//Objects
/*
const person ={
  firstName : 'John',
  lastName : 'Doe',
  age : 30,
  hobbies : ['music','movies','sports'],
  address : {
    street : '50 main st',
    city : 'Boston',
    state : 'MA'
  }
}
console.log(person);
console.log(person.firstName);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//const {firstName,lastName}=person; //pulling objects from person
//console.log(firstName);
const {firstName,lastName,address:{city}}=person;
console.log(city);

person.email='john@gmail.com';
console.log(person);
*/
//array object

/*
const todos = [
  {
    id : 1,
    text :'Take out trash',
    isCompleted : true
  },
  {
    id : 2,
    text :'Meeting with boss',
    isCompleted : true
  },
  {
    id : 3,
    text :'Dentist apponitment',
    isCompleted : false
  }
];
console.log(todos);
console.log(todos[1].text);
*/
//in json we have double quotes around the keys and the strings and it doent have any single quotes
//converting to json
/*
const todos = [
  {
    id : 1,
    text :'Take out trash',
    isCompleted : true
  },
  {
    id : 2,
    text :'Meeting with boss',
    isCompleted : true
  },
  {
    id : 3,
    text :'Dentist apponitment',
    isCompleted : false
  }
];
const toJSON = JSON.stringify(todos);
console.log(toJSON);
*/
//for
/*
for(let i=0;i<10;i++)
{
  console.log(i);
  console.log(`For loop number: ${i}`);
}
*/
//while
/*
let i=0;
while(i<10)
{
  console.log(`While loop number: ${i}`);
  i++;
}
*/
//looping through Arrays
/*
const todos = [
  {
    id : 1,
    text :'Take out trash',
    isCompleted : true
  },
  {
    id : 2,
    text :'Meeting with boss',
    isCompleted : true
  },
  {
    id : 3,
    text :'Dentist apponitment',
    isCompleted : false
  }
];
*/
/*
for(let i=0;i<todos.length;i++)
{
  console.log(todos[i].text);
}
for(let todo of todos)
{
  console.log(todo);
  console.log(todo.text);
  console.log(todo.id);
}
*/
//higher order array operations
//forEach(loops through array),map(allows us to create new array from an array),filter(allows to create a new array based on a condition)
/*
todos.forEach(function(todo){
  console.log(todo.text);
});
const todoText=todos.map(function(todo){
  return todo.text;
});
console.log(todoText);

const todoCompleted=todos.filter(function(todo){
  return todo.isCompleted===true;
});
console.log(todoCompleted);

const todoCompleted=todos.filter(function(todo){
  return todo.isCompleted===true;
}).map(function(todo){
  return todo.text;
});
console.log(todoCompleted);
*/
//if condition
/*
const x='10';
if(x==10)//== just matches the value and not the data type
{
  console.log('x is 10');
}
if(x===10)//=== matches the value and the data type
{
  console.log('x is 10');
} else if(x>10)
{
  console.log('x is greater than 10')
}
else{
  console.log('x is not 10');
}
*/
/*
const x=4;
const y=11;
if(x>5 || y>10)//one or the other
{
  console.log('x is more than 5 and y is more than 10');
}
*/
/*
const x=4;
const y=11;
if(x>5 && y>10)//both have to be true
{
  console.log('x is more than 5 and y is more than 10');
}
if(x>5)
{
  if(y>10)
}
*/
//ternary operator
/*
const x=10;
const color=x>10 ? 'red':'blue';
console.log(color);
*/
//swich break case
/*
const x=10;
const color=x>10 ? 'red':'blue';
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}
*/
//function
/*
function addNums(num1,num2) {
  console.log(num1+num2);
}
addNums(5,4);
addNums();
*/
/*
function addNums(num1=1,num2=1) {
  console.log(num1+num2);
}
addNums();
addNums(5,5);
*/
/*
function addNums(num1=1,num2=1) {
  return num1+num2;
}
console.log(addNums());
*/
/*
const addNums=(num1=1,num2=1)=> { //arrow function introduced in ES6
  return num1+num2;
}
console.log(addNums());
*/
/*
const addNums=(num1=1,num2=1)=> num1+num2;//syntax for a single function statement
console.log(addNums());
*/
/*
const addNums=(num1=1,num2=1)=> console.log(num1+num2);//syntax for a single function statement
addNums();
*/
/*
const addNums=num1 => num1+5;//for a single parameter
console.log(addNums(1));
*/
//todos.forEach((todo)=>console.log(todo)); for arrays
//constructor function
/*
function Person (firstName, lastName, dob) { //always name of constructor starts with a capital letter
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;//can be turned into a date object using date constructor
} //in a method, this method refers to the owner of the method, used alone this refers to the global object, in a function this refers to the owner function(in this example it is Person)
//instantiate an object
const person1=new Person('John', 'Doe', '4-3-1999');
const person2=new Person('Mary', 'Smith', '4-4-1999');
console.log(person1);
console.log(person2.firstName);
*/
/*
function Person (firstName, lastName, dob) { //always name of constructor starts with a capital letter
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);//can be turned into a date object using date constructor
} //in a method, this method refers to the owner of the method, used alone this refers to the global object, in a function this refers to the owner function(in this example it is Person)
//instantiate an object
const person1=new Person('John', 'Doe', '4-3-1999');
const person2=new Person('Mary', 'Smith', '4-4-1999');
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
*/
//adding functions to Objects
/*
function Person (firstName, lastName, dob) { //always name of constructor starts with a capital letter
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear=function()
  {
    return this.dob.getFullYear();
  }
  this.getFullName = function()
  {
    return this.firstName + " " + this.lastName;// or `${this.firstName} ${this.lastName}`;
  }
}
//instantiate an object
const person1=new Person('John', 'Doe', '4-3-1999');
const person2=new Person('Mary', 'Smith', '4-4-1999');

console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/
//Adding methods or functions to prototype
/*
function Person (firstName, lastName, dob) { //always name of constructor starts with a capital letter
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function()
{
    return this.firstName + " " + this.lastName;// or `${this.firstName} ${this.lastName}`;
}
//instantiate an object
const person1=new Person('John', 'Doe', '4-3-1999');
const person2=new Person('Mary', 'Smith', '4-4-1999');

console.log(person1.getBirthYear());
console.log(person2.getFullName());
*/
//ES6(class,already has the methods inside prototype)(syntactic sugar)
/*
class Person {
   constructor(firstName, lastName, dob) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.dob = new Date(dob);
   }
   getBirthYear() {
     return this.dob.getFullYear();
   }
   getFullName() {
       return this.firstName + " " + this.lastName;// or `${this.firstName} ${this.lastName}`;
   }

}
//instantiate an object
const person1=new Person('John', 'Doe', '4-3-1999');
const person2=new Person('Mary', 'Smith', '4-4-1999');

console.log(person1.getBirthYear());
console.log(person2.getFullName());
//method is a function inside a class
*/

//DOM is the document object model and is like the tree structure of the whole document
/*
console.log(window);//the parent object of the browser
alert(1);
window.alert(1);
*/
//single element selectors
/*
console.log(document.getElementById('my-form'));
const form=document.getElementById('my-form');
console.log(form);

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));//jquery is used to select other form elements except id and query selector works mostly like jquery
console.log(document.querySelector('h1'));//if there are multiple elements then it only selects the first one,most commonly used for single selections
//multiple element selectors
console.log(document.querySelectorAll('.item'));//returns node list on which array methods can be used, most commonly used for multiple selections
console.log(document.getElementsByClassName('item'));//only for classes, return HTML collections and array methods cannot be used in them.
console.log(document.getElementsByTagName('li'));//only for tags
*/
//looping through items
/*
const items=document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
*/
//DOM manipulations
/*
const ul = document.querySelector('.items');
//ul.remove();//  to remove the unordered list
//ul.lastElementChild.remove();//remove last child
ul.firstElementChild.textContent='hello';//edit first child
ul.children[1].innerText='Brad';//.innnerText same as textContent
ul.lastElementChild.innerHTML='<h1>Hello</h1>';//to add HTML dynamically

const btn=document.querySelector('.btn');
btn.style.background='red';//to change the style of an HTMl element, to manipulate the UI in real time
*/
/*
const btn=document.querySelector('.btn');
btn.addEventListener('click',(e)=> {//e is the event parameter,always used when you use an event
 e.preventDefault();//to prevent the default behaviour,here it is to prevent the default form behaviour(i.e submitting the form data)
  console.log(e.target);//to get the element where the event is present i.e the button in this case
console.log(e.target.className);// to get the events class name
console.log(e.target.id);//to get the id of the event(if present)
});
*/
//changing other stuff after the click
/*
const btn=document.querySelector('.btn');
btn.addEventListener('click',(e)=> {//e is the event parameter,always used when you use an event
 e.preventDefault();
 document.querySelector('#my-form').style.background='#ccc';
 document.querySelector('body').classList.add('bg-dark');
 document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});
*/
//changing stuff on mouse hover
/*
const btn=document.querySelector('.btn');
btn.addEventListener('mouseover',(e)=> {//e is the event parameter,always used when you use an event
 e.preventDefault();
 document.querySelector('#my-form').style.background='#ccc';
 document.querySelector('body').classList.add('bg-dark');
 document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});
*/
//changing stuff on mouse out
/*
const btn=document.querySelector('.btn');
btn.addEventListener('mouseout',(e)=> {//e is the event parameter,always used when you use an event
 e.preventDefault();
 document.querySelector('#my-form').style.background='#ccc';
 document.querySelector('body').classList.add('bg-dark');
 document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});
*/
//form script
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit)//naming the function onSubmit and declaring it later
function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value);//to get the value in the name field
  if(nameInput.value==='' || emailInput.value==='') {
    //alert('Please enter fields');
    msg.classList.add('error');//to add the class in the html
    msg.innerHTML='Please enter all fields';
    setTimeout(() => msg.remove(),3000);//to make the error message diasappear after 3 seconds
  }
  else
  {
    //console.log('Success');
    const li=document.createElement('li');// to create element of list type
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));//to create a text node and then append it together
    userList.appendChild(li);//append the created name list to the user list
    //clear fields
    nameInput.value='';
    emailInput.value='';
  }
}
/*
addEventListener('DOMContentLoaded',()):to check if all the HTML content of the site is loaded or not before reading the JSHFH
document.createElement('div');to create a div element in the document
square.setAttribute('id',i);setting id as an attribute
innerHTML property sets or returns the HTML content (inner HTML) of an element.
*/
