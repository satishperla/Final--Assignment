function sortArray(arr) {
    var l = arr.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    };
    console.log(arr);
}

sortArray([3, 8, 7, 6, 5, -4, -3, 2, 1]);
sortArray([-5, 9, 3, 5, 1, 7, 2, -4]);