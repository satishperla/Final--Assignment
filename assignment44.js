//Object using Object Literal

let empdetails = {
    "empid": "123456",
    details: {
        firstName: "Satish",
        lastName: "Perla",
        level: "Associate"
    },
    getAuthorName: function () { return this.details.firstName + ' ' + this.details.lastName + ' ' + this.details.level }
};

console.log("Object using Object Literal: ");
console.log(empdetails.empid);
console.log(empdetails.getAuthorName());

// Object values

let empdetails_obj = { firstNameobj: 'Satish', lastNameobj: 'Perla' }

console.log("Using Object.values() method: ");
console.log(Object.values(empdetails_obj));

//Property name and its values

console.log("Object Properties: " + Object.getOwnPropertyNames(empdetails_obj) + "  "+ "Object Values: " + Object.values(empdetails_obj));

