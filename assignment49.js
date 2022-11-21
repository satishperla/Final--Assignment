
function reduceAndreduceRight(arr) {
    console.log(arr.reduce(myFunc));
    console.log(arr.reduceRight(myFunc));
}

function myFunc(total, num) {
    return total - num;
}

reduceAndreduceRight([175, 50, 25]);
reduceAndreduceRight([100,300,400]);