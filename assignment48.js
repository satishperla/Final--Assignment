function usingReduce(arr){

    console.log(arr.reduce(sum,0));
    console.log(arr.reduce(sub));
    console.log(arr.reduce(avg,0));



function sum(total,number){

    return total+Math.round(number);

}

function sub(total,number){
    return total-number;
}

function avg(total,number){
 return (total + Math.round(number) / arr.length);
}
}

usingReduce([175, 50, 25]);
usingReduce([100,300,400]);
