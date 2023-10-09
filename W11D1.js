/*
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/


// extract just the keys from an object?
// console.log(

//   Object.values(insertData1) // returns an array of arrays of the key-value pairs
// );



// // loop over an obj?
// for (let key in obj) {
    
    // }
    // // loop over an array?
    // for (let element of array) {
        //   element;
        // }
        
        
        
        const table = "users";
        const insertData1 = { first_name: "John", last_name: "Doe" };
        const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";
        // R.I.O.T.
        // DRIVER 🚗
        // PRESENTER 🧑‍🏫
        // NAVIGATOR 🧭
        function insert(tableName, columnValuePairs) {
                const keys = Object.keys(columnValuePairs)
                const values = Object.values(columnValuePairs)
                const valueWithQuote = "'" + values.join("','")+ "'"
                const query = `INSERT INTO ${tableName} (${keys}) VALUES (${valueWithQuote});`
                return query
            
            }
            console.log(insert(table,insertData1))
            
            // Bonus:
            const insertData2 = {
                first_name: "John",
                last_name: "Doe",
                age: 30,
                is_admin: false,
            };
            const expectedB =
            "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, -1);";
            
function insertBonus(tableName,columnValuePairs){
    const keys = Object.keys(columnValuePairs)
    const values = Object.values(columnValuePairs)
    const valuesCustom = values.map((value) => typeof value === 'string' ? `'${value}'`: typeof value === true ? value = 1 :  value===false ? -1 :value)
    const query = `INSERT INTO ${tableName} (${keys}) VALUES (${valuesCustom});`
    return query
    
}

console.log(insertBonus(table,insertData2))


