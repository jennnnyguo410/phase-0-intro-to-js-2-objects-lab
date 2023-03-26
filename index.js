// Write your solution in this file!
const employee = {
    name: "Jenny",
    streetAddress: "2 Fenton Street",
};

function updateEmployeeWithKeyAndValue(employee, key, vlaue) {
    return {
        ...employee,
        [key]: vlaue
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, vlaue) {
    employee[key] = vlaue;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, vlaue) {
    const newObj = { ...employee };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, vlaue) {
    delete employee[key];
    return employee;
}