function last(arr, n) {
    var res = [];
    var l = arr.length;
    if (n == null)
        res = arr[l - 1];
    else
        res = arr.slice(Math.max(l - n, 0));
    console.log(res);
}

last([7, 9, 0, -2]);
last([7, 9, 0, -2], 3);
last([7, 9, 0, -2], 6);
