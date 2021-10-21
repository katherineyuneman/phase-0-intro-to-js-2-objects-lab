let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
console.log(employee);

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj };
    newObj[key] = value;
    //console.log(newObj);
    return newObj;
}

console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway"));


function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
   obj[key] = value;
   return obj;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","12 Broadway");


console.log(employee.streetAddress);

//

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj}
    delete newObj[key];
    return newObj;
}

console.log(deleteFromEmployeeByKey(employee,"streetAddress"));

//

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"))