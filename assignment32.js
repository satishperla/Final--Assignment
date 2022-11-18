function move(arr, initial_index, final_index) {
    var l = arr.length;
    while (initial_index < 0) {
        initial_index += l;
    }
    while (final_index < 0) {
        final_index += l;
    }
    if (final_index >= l) {
        var pos = final_index - l + 1;
        while (pos--) {
            arr.push(undefined);
        }
    }
    arr.splice(final_index, 0, arr.splice(initial_index, 1)[0]);

    console.log(arr);

}

move([10, 20, 30, 40, 50], 0, 2);
move([10, 20, 30, 40, 50], -1, -2);
