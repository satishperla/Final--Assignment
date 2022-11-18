function mostFrequentElement(arr) {
    var frequency = 0;
    var temp = 0;
    var element;
    var l = arr.length;
    for (var i = 0; i < l; i++) {
        for (var j = i; j < l; j++) {
            if (arr[i] == arr[j])
                temp++;
            if (frequency < temp) {
                frequency = temp;
                element = arr[i];
            }
        }
        temp = 0;
    }
    console.log(element + " " + frequency + " " + "times");
}

mostFrequentElement([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 'a', 2, 4, 9, 3])