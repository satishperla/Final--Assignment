function first(arr, n) {
    var res = [];
    if(n== null)
    res=arr[0];
    else
        res = arr.splice(0, n);

    console.log(res);
}

first([7, 9, 0, -2]);
first([],3);
first([7, 9, 0, -2],3);
first([7, 9, 0, -2],6);
first([7, 9, 0, -2],-3);
