//Multi line, multi parameter Arrow function

const sum = (a, b) => {
    const c = 20;
    var addition = a + b + c;
    return addition;
}

//One parameter, single line Arrow function
const oneParam = (name) => "My Name is: " + name 

//No parameter, single line code
const noParam = () =>  "This function has no parameters" 


console.log(sum(1, 2));
console.log(oneParam("Satish"));
console.log(noParam());
