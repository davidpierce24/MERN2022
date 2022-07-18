// Printing keys and values
// Given an object, return an array of arrays containing the key and value of each entry
// Ex: given object
// const obj1 = {
//      name: "Pizza",
//      calories: 9001
// }
// return
// const result = [
//    ["name": "Pizza"],
//      ["calories", 9001]
// ]


function printEach(obj) {
    let temp = [];
    for(let i in obj){
        temp.push([i, obj[i]])
    }
    return temp;
}

const obj1 = {
name: "Pizza",
calories: 9001
}

console.log(printEach(obj1))


// Once you have that worked out, you can work on the next algorithm
// Insert SQL Statement
// Given a table name string and an object whose key value pairs represent column names and values for the columns return a SQL insert statement string
// Ex: 
// const table = "users";
// const insertData1 = { first_name: "John", last_name: "Doe" };
// const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

function easyQueries(table, obj) {
    let keys = [];
    let values = [];
    
    for(let i in obj){
        keys.push(i)
        values.push(obj[i])
    }
    
    let keyData = keys.join(", ").toString()
    let valueData = values.join(", ").toString()
    
    
    return `INSERT INTO ${table} (${keyData}) VALUES (${valueData});`
}

console.log(easyQueries("users", { first_name: "John", last_name: "Doe" }))