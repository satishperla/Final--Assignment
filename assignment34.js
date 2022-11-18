function array_range(initial, len) {
    var arr = new Array;
    for (var i = 0; i < len; i++, initial++) {
        arr[i] = initial;
    }
    console.log(arr);
}

array_range(1, 4);
array_range(-6, 4);
array_range(9, 7);

