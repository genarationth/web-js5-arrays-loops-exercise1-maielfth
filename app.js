
// #### 1.1 let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
//     - What is the length of the array?
//     - Write a function called myAlphabetLength which console.logs the length of the array.


let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(myAlphabet.length);




// #### 1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets. 
//     - Console.log each item in the array. Also console.log the index for each planet.


let Planets = ['Neptune','Earth','Pluto','Sun','Mars'];

Planets.forEach(function(star){
    console.log(star);
});

Planets.indexOf(function(star){
    console.log(star)
});


// #### 1.3 Console.log each item in this array: let myArr = [ 1, 2, 'One', true]; 

let myArr = [ 1, 2, 'One', true]; 
myArr.forEach(function(members){
   console.log(members); 
});
