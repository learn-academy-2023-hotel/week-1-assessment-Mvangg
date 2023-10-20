// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// b) Verify and explain:

// --------------------1) What will this log?

// const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: --> Output 10. Console.log(cohort.length) is running a statement to ouput the total number of characters in the string, starting with 1 and including spaces as characters. 

// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: --> Output o. console.log(greeting[4]) states to run and pull index 4 of the string. Index starting with 0 and including spaces as an element/item as well. 

// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: a
// b) Verify and explain: My answer was wrong because the elements/items in the array languages are strings thus it is reading each string as a whole "" vice counting each characters as I had assumed. Ruby is the outcome because it sits at index 1. 

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: outcome will be ["SATURDAY", "SUNDAY"]
// b) Verify and explain: My answer was incorrect because .toUpperCase() is used to convert a string to uppercase, not an array. weekendDays = ["saturday", "sunday"] is an array, not a string. Thus outcome was an error. To showcase the outcome to be ["SATURDAY", "SUNDAY"], the statement would look something more like the below:

// const newWeekendDays = [] // creating a blank variable to utilize in the future.
// for(let i = 0; i < weekendDays.length; i++){ // creating a for loop to perform the iteration in the array. For this for loop, it is starting at index [0], stopping at the end of weekendDays array, and the increment is every one. 
    // newWeekendDays.push(weekendDays[i].toUpperCase()) // (weekendDays[i].toUpperCase()) states that all indexes in the array weekendDays will be upper case. newWeekendDays.push states to add array weekendDays which have now been uppercased to its array. 
// } console.log(newWeekendDays) // --> ["SATURDAY", "SUNDAY"]


// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: Error?
// b) Verify and explain: (This one took a while to understand.) typeof will let the user know what type of data the expression or value is. I assumed it would not work because dataTypes.length would crash with request typeof. In this statement, typeof is working off of dataTtypes.length which outputs number because .length would output the amount of elements/items in dataTypes as requested in numeric form. Therefore output is numbers. 