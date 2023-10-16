// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// // Expected outcome: "cherry"

// Pseudo code:
// I need to create a conditional statement (if/else) 
// It needs to state that if the length of fruit1 is greater than fruit 2 then output fruit 1.
// HOWEVER, if fruit 1 is not greater than fruit 2, output fruit 2 instead. 

// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// }   else console.log(fruit2)


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code: 
// I need to combine the two arrays which are [2, 5, 2, 2, 4] and [6,, 3, 5, 3] into one array.
// Once the two arrays are combined, I need to run a .length to count the elements/items in the final array. 
// The output will come out as 9 since there are 9 elements/items in the whole array now.
// The below is the process into one whole line:

// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length) // --> 9

// // The below is the process using a new variable to show the outcome of the combined two original variables's length.

// var combineRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(combineRuns) // --> [2, 5, 2, 2, 5, 6, 3, 5, 3]
// console.log(combineRuns.length) // --> 9


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

// const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code:
// I need to create a new variable that will turn currentCohort from a string to an array by utilizing .split . This will turn it from "Golf 2023" to --> [G, o, l, f,  , 2, 0, 2, 3]
// I need to reverse (blackflip) the order of the array from [G, o, l, f,  , 2, 0, 2, 3] to [3, 2, 0, 2,  , f, l, o, G].
// Lastly, I need to create another variable with the now blackflipped array to be a blackflipped string. --> 3202 floG

// var newCohort = currentCohort.split("")
// newCohort.reverse()
// var newerCohort = newCohort.join("")
// console.log(newerCohort) // --> 3202 flog

// The below is one whole statement with all combined and including only one new variable.

// var newCohort = currentCohort.split("").reverse().join("") // this states that newCohort will equal currentCohort, turned into an array, reverse the array, then turn the array into a string.
// console.log(newCohort) // --> 3202 flog

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

// const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
// I need to establish a for loop that will let the loop know to start at index 0 of the stockExchange array, end with the last element/item in the array, and the increments of continuing in the array.
// I need to create a conditional statement evaluate which element/item in the array will be an odd number by utilizing a modulo and a comparison operator, in this case what is the complete opposite of 0.
// I need to run the statement and output the statement.

// for (let i = 0; i < stockExchange.length; i++){ // this states that within the for loop, let's start with index = 0; let's keep going until index is less than the variable's length; and let's keep going to the next index (until the condition is met).
//     if (stockExchange[i] % 2 !== 0){ // this states that each element/item in the index should be divided by it's 
//         console.log(stockExchange[i])
//     }
// }