function elementInArray(arr, element) {
    var flag=false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            flag=true;
        }
    }
    console.log(flag);
}

elementInArray([1,5,3,2,9],2);
elementInArray([1,5,3,2,9],8);
