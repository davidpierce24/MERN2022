// Given an array of objects representing people, and a string representing a bad habit return a "santasNaughtyList" containing the first and last names of all the people who have the matching bad habit so that santa knows how much coal he needs.

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["FN1 LN1", "FN3 LN3"];

const badHabit2 = "shows up late";
const expected2 = ["FN2 LN2", "FN3 LN3"];

const badHabit3 = "doesn't do algorithms";
const expected3 = [];



function hab(habit, arr) {let temp = [];for(let i in arr){for(let j in arr[i]){if(j == "habits" && arr[i][j].includes(habit)){temp.push(`${arr[i].firstName} ${arr[i].lastName}`)}}}return temp}

console.log(hab(badHabit1,students ))
console.log(hab(badHabit2,students ))
console.log(hab(badHabit3,students ))

// for(const [key,val] of Object.entries(students[0])){
    //     console.log(key,val)
    // }



// function hab(habit, arr) {
//     let temp = [];
//     for(let i in arr){
//         for(let j in arr[i]){
//             if(j == "habits" && arr[i][j].includes(habit)){
//                 temp.push(`${arr[i].firstName} ${arr[i].lastName}`)
//             }
//         }
//     }
//     return temp
// }