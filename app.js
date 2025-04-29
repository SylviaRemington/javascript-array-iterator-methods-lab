// <!-- RE-REVIEWING AGAIN 4/27/25 and on -->

//Still need to complete Exercise 3 -- haven't figured thiis out yet correctly.
//Still need to complete Exercise 5 -- haven't figured thiis out yet correctly either.
//Still need to complete Level Up Exercise 1 exercise
//Still need to complete Level Up Exercise 2 exercise

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];

  
  const people = [
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William',
  ];

  

  const travelMethods = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
  ];
  

  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 },
  ];
  

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
  ];
  
//   ❗️ These arrays MUST be placed above ALL of the exercises you will be completing below!

//__________________________________________________________________________________________

/*
Exercise 1: Array.prototype.filter()

Filter the array of inventors into a new array containing only the inventors 
born in the 1500's.

- You have an array of inventors, each with a birth year listed by the property 
  'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between 
  the years 1500 and 1599.
*/

let veryOldInventors = [];

// Complete the exercise in the space below:

veryOldInventors = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year < 1600;
})

//First attempt - I realized I didn't need to make a new variable since putting the filtered items
//into the veryOldInventors array.
// const inventorsBornInFifteenHundreds = veryOldInventors.filter ((inventor) => {
// return inventors.year //also need to use inventor (singular) in order to get individual array and not all the arrays
// }) 

//Second attempt - realized I didn't need to write let again. Can't re-declare something that has been declared before.
// let veryOldInventors = inventors.filter((inventor) => {
//     return inventor.year >= 1500 && inventor.year < 1600;
// })

// Check your work:
console.log('Exercise 1 my result: ', veryOldInventors);
console.log('Exercise 1 correct result: ', [
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
]);

//__________________________________________________________________________________________

/*
Exercise 2: Array.prototype.map()

Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.

- For each inventor, return an object in this format: 
  { first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an 
  inventor with only their first and last names.

Hint: Return a new object literal from the callback that looks like:
      { first: "First Name", last: "Last Name" }
*/

let inventorNames = [];


// Complete the exercise in the space below:

inventorNames = inventors.map(function(inventor) {
    return {
        first: inventor.first,
        last: inventor.last
    }
})

// First attempt - I was returning a string rather than an object; thus, need to change it to an object.
// inventorNames = inventors.map((inventor) => {
//     return inventor.first + " " + inventor.last;
// })

// Check your work:
console.log('Exercise 2 my result: ', inventorNames);
console.log('Exercise 2 correct result: ', [
  { first: 'Albert', last: 'Einstein' },
  { first: 'Isaac', last: 'Newton' },
  { first: 'Galileo', last: 'Galilei' },
  { first: 'Marie', last: 'Curie' },
  { first: 'Johannes', last: 'Kepler' },
  { first: 'Nicolaus', last: 'Copernicus' },
  { first: 'Max', last: 'Planck' },
  { first: 'Katherine', last: 'Blodgett' },
  { first: 'Ada', last: 'Lovelace' },
  { first: 'Sarah E.', last: 'Goode' },
  { first: 'Lise', last: 'Meitner' },
  { first: 'Hanna', last: 'Hammarström' },
]);

// Also here are three other ways to do this exercise:
// With REGULAR ARROW FUNCTION:
// inventorNames = inventors.map((inventor) => {
//     return { first: inventor.first, last: inventor.last };
//   });
//   console.log(inventorNames);

//   WITH ARROW FUNCTION WITH DESTRUCTURING:
//   inventorNames = inventors.map(({ first, last }) => {
//     return { first, last };
//   });
//   console.log(inventorNames);

//   SHORT VERSION WITH IMPLICIT RETURN WITH DESTRUCTURING:
//   inventorNames = inventors.map(({ first, last }) => ({ first, last }));
//   console.log(inventorNames);


//__________________________________________________________________________________________

/*
Exercise 3: Array.prototype.sort()

Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).

Information regarding sort from 
*/

let sortedByBirthYear = [];

// Complete the exercise in the space below:
sortedByBirthYear = inventors.sort ((inventor) => {
    // if inventor.year //seems like I should do a forEach... 
    // and maybe need to do an if... else if
    //but not sure on the equation to create this...
})

// Check your work:
console.log('Exercise 3 my result: ', sortedByBirthYear);
console.log('Exercise 3 correct result: ', [
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
]);

//__________________________________________________________________________________________

/* 
Exercise 4: Array.prototype.find()

Use Array.prototype.find() to identify the inventor with the first name 'Ada' 
from an array of inventor objects

- You have an array of objects, each representing an inventor with various 
  properties including their first name.
- Utilize the Array.prototype.find() method to locate the object for the 
  inventor with the first name 'Ada'.
- Assign the found inventor object to the variable inventorNamedAda
*/

let inventorNamedAda = {};

// Complete the exercise in the space below:

inventorNamedAda = inventors.find((inventor) => {
    return inventor.first === "Ada";
})

// Check your work:
console.log('Exercise 4 my result: ', inventorNamedAda);
console.log('Exercise 4 correct result: ', {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852,
}); 

//Also, here is the array iterator method of find from the lesson:
// find an element in an array:
// array.find((element) => {
  // search criteria 
// });

//__________________________________________________________________________________________

/*
Exercise 5: Array.prototype.map()

Use the Array.prototype.map() method to reformat each name in the 'people' 
array. The goal is to convert names from "Last, First" format to "First Last" 
format.

Hint: Use the String.prototype.split() method to separate the first and last 
      names. You can split the string using ', ' as the separator.
      After splitting the names, rearrange them to the "First Last" format.

PLAIN ENGLISH QUESTION:
The question is asking you to: Look at each name in the people array.
Each name is written like this: "Smith, John". You need to flip it to look like this instead: "John Smith".
You should use the .map() method to go through the whole array, one name at a time.
The hint is telling you:
Use .split(', ') to break each name into two parts: last name and first name.
Then rearrange those two parts into a new string with first name first, then last name.
You're not changing the original array — you're creating a new one with the updated format.
*/

let firstLast = [];

// Complete the exercise in the space below:
Not sure how to do this one yet. 
// firstLast = people.map (()) //JUST STARTED THIS PART... need to come back to it to figure it out.


// Check your work:
console.log('Exercise 5 my result: ', firstLast);
console.log('Exercise 5 correct result: ', [
  'Carl Becker',
  'Samuel Beckett',
  'Mick Beddoes',
  'Henry Beecher',
  'Ludwig Beethoven',
  'Menachem Begin',
  'Hilaire Belloc',
  'Saul Bellow',
  'Robert Benchley',
  'Peter Benenson',
  'David Ben-Gurion',
  'Walter Benjamin',
  'Tony Benn',
  'Chester Bennington',
  'Leana Benson',
  'Silas Bent',
  'Lloyd Bentsen',
  'Ric Berger',
  'Ingmar Bergman',
  'Luciano Berio',
  'Milton Berle',
  'Irving Berlin',
  'Eric Berne',
  'Sandra Bernhard',
  'Yogi Berra',
  'Halle Berry',
  'Wendell Berry',
  'Erin Bethea',
  'Aneurin Bevan',
  'Ken Bevel',
  'Joseph Biden',
  'Ambrose Bierce',
  'Steve Biko',
  'Josh Billings',
  'Frank Biondo',
  'Augustine Birrell',
  'Elk Black',
  'Robert Blair',
  'Tony Blair',
  'William Blake',
]);

//Also, from lesson for map array iterator method: 
// callback function parameters
// array.map((element, index, array) => {
// });

// element - The current element
// index - The index of the current element (optional)
// array - The array the iterator method was called upon (optional, and you probably won’t ever use it)
// Remember, the callback function we write will be called once for each element in the array. 
// Under the hood, the engine will be passing arguments for each of these three parameters 
// once for every iteration through the array.


// Another example: 
// const array = ['apple','banana','orange'];
// const mappedArray = array.map((element, index, array) => {
//   return `element is: ${element}, index is: ${index}, array is ${array}`;
// });
// console.log(mappedArray)
// [ 'element is: apple, index is: 0, array is apple,banana,orange',
//   'element is: banana, index is: 1, array is apple,banana,orange',
//   'element is: orange, index is: 2, array is apple,banana,orange' ]


// As we loop through the array, element is being supplied different values as an argument. 
// The index is also changing as we move through the array. The array itself is static, 
// as it always references the array itself.

// 📚 A note on parameter naming:
// It is considered best practice to choose a clear, singular name for the element parameter. 
// If dealing with an array called students, then the singular student is a logical choice.


// EXAMPLE:
// const students = [];

// let mappedArray = students.map((student) => {
  
// });

//__________________________________________________________________________________________


/*
  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 },
  ];

Exercise 6: Array.prototype.some()

Determine if there is at least one person in the devs array who is 18 years 
old or older.

- You have an array of people with their respective ages.
- Use the Array.prototype.some() method to check if any person in the array is 
  18 years old or older.
- Store the result (true or false) in the variable 'isAdultPresent'. 

Also addtl notes below Exercise 6 from GA Lab page:
You can use a static year value to solve problems 6 and 7. 
As a small level up opportunity, check out how to dynamically get today’s year using 
the Date() constructor.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
*/

let isAdultPresent = null;

// Complete the exercise in the space below:
isAdultPresent = devs.some((dev) => {
    return dev.year >=2007; //This works if you use a blanket 2025; however, I need to find out 
    // how to be more specific and relate it to an exact date.
})
console.log(isAdultPresent);

// Check your work:
console.log('Exercise 6 my result: ', isAdultPresent);
console.log('Exercise 6 correct result: ', true);


//__________________________________________________________________________________________

// const devs = [
//     { name: 'Alex', year: 1988 },
//     { name: 'Dani', year: 1986 },
//     { name: 'Matt', year: 1970 },
//     { name: 'Wes', year: 2015 },
//   ];

/*
Exercise 7: Array.prototype.every()

Use Array.prototype.every() to determine if every person in the devs array is 
19 years old or older.

- You have an array of individuals, each with their year of birth represented
  by the 'year' property.
- Use the Array.prototype.every() method to verify if every individual in the
  array is at least 19 years old.
- Store the result (true or false) in the variable 'isEveryone19OrOlder'.

*/

// let isEveryone19OrOlder = null;

// Complete the exercise in the space below:

let isEveryone19OrOlder = devs.every((dev) => {
    return dev.year > 2006;
})


// Check your work:
console.log('Exercise 7 my result: ', isEveryone19OrOlder);
console.log('Exercise 7 correct result: ', false);


//__________________________________________________________________________________________

// const comments = [
//     { text: 'Love this!', id: 523423 },
//     { text: 'Super good', id: 823423 },
//     { text: 'You are the best', id: 2039842 },
//     { text: 'Ramen is my fav food ever', id: 123523 },
//     { text: 'Nice Nice Nice!', id: 542328 },
//   ];

/*
Exercise 8: Array.prototype.find()

Use Array.prototype.find() to identify and retrieve the comment object with 
a specific ID 823423 from an array of comment objects.

- Assign the found comment object to the variable 'commentById'.
*/

let commentById = {};

// Complete the exercise in the space below:

commentById = comments.find((comment) => {
    return comment.id === 823423;
})

// Check your work:
console.log('Exercise 8 my result: ', commentById);
console.log('Exercise 8 correct result: ', { text: 'Super good', id: 823423 });


//__________________________________________________________________________________________

/*
Exercise 9: Array.prototype.findIndex()

Determine the index of the comment that has a specific ID 123523 in an array 
of comment objects.

- Store the index in the variable 'idx'.
*/

// let idx = null;

// Complete the exercise in the space below:

let idx = comments.findIndex((comment) => {
    return comment.id ===123523;
})

// Check your work:
console.log('Exercise 9 my result: ', idx);
console.log('Exercise 9 correct result: ', 3);


//__________________________________________________________________________________________

//LEVEL UP TIME!!!!

/*
Level Up exercise 1: Array.prototype.reduce()

Calculate the combined lifespan of all the inventors using 
Array.prototype.reduce()

- Each object in the array includes these properties: 
  'first', 'last', 'year' (birth year), and 'passed' (year of death).
- Use the Array.prototype.reduce() method to calculate the sum of the total 
  years lived by all the inventors.
- Store the total sum in the variable 'totalYearsLived'.

Hints:

- Inside the reduce callback function, calculate the lifespan of each inventor 
  (passed - year).
- Accumulate this lifespan in the 'totalYearsLived' variable.
- Remember, reduce takes a callback function and an initial value for the 
  accumulator.
*/

let totalYearsLived = 0;

// Complete the exercise in the space below:

totalYearsLived = inventors.reduce((accumulatedValueHere?, inventor))//need to research this reduce method more

// Check your work:
console.log('Level Up 1 my result: ', totalYearsLived);
console.log('Level Up 1 correct result: ', 861);

//__________________________________________________________________________________________

// const travelMethods = [
//     'car',
//     'car',
//     'truck',
//     'truck',
//     'bike',
//     'walk',
//     'car',
//     'van',
//     'bike',
//     'walk',
//     'car',
//     'van',
//     'car',
//     'truck',
//   ];
  
/*
Level Up exercise 2: Array.prototype.reduce()

Tallying travel methods using Array.prototype.reduce(). 

Count the number of times each travel method appears in the 'travelMethods'
array.

- The resulting object should have keys as the travel methods 
  ('car', 'truck', 'bike', etc.) and values as their respective counts.
- Store this object in the variable 'travelMethodCounts'.

Hints:
- Inside the reduce function, check if the travel method already exists as a key
  in your accumulator object. If it does, increment its count. If not, add it 
  to the object and give it a value of 1.
- Since you want to return an object, be sure to pass an empty {} for the 
  initial value of the "accumulator".
*/

let travelMethodCounts = {};

// Complete the exercise in the space below:

travelMethodCounts = travelMethods.reduce(())//need to research this reduce method more

// Check your work:
console.log('Level Up 2 my result: ', travelMethodCounts);
console.log('Level Up 2 correct result: ', {
  car: 5,
  truck: 3,
  bike: 2,
  walk: 2,
  van: 2,
});




