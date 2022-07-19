// Find Objects
// Given a search criteria object whose values will only be primitives (ints, strings, booleans) and a list of objects return any object that matches all the key value pairs in the search critera object

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];


function search1(criteria, search ) {
    let temp = []
    
    return temp
}


// console.log(search1(searchCriteria1, items))



// Given an array of objects, a searchFor string, and searchBy key that exists in the object return a new array of only those objects whose value for the given key starts with the given search string.
// You can assume the key will exist on the object and the value of that key will be a string.

// Bonus: make the search case insensitive.

// This kind of algorithm can be used in react onChange as you type into a search bar to live-filter a list.

const people = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "Eddy",
    lastName: "Lee",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
  {
    firstName: "Edward",
    lastName: "Kim",
  },
];

const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected3 = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Fawn",
  },
];

function search2(searchFor, searchBy, arr) {
    let temp = []
    for(let i in arr){
        for(let j in arr[i]){
            if(j == searchBy && arr[i][j].toLowerCase().startsWith(searchFor.toLowerCase())){
                temp.push(arr[i])
            }
        }
    }
    return temp;
}

console.log(search2(searchFor1, searchBy1, people))
// console.log(search2("do", "lastName", people))