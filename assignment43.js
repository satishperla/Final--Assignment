function report(arr) {
    var sum = 0;
    var l = arr.length;
    var count = 0;
    for (var i = 0; i < l; i++) {
        sum += arr[i];
    }
    var average = sum / l;
    for (var i = 0; i < l; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    var percentage = (count * 100) / l;
    var frequency = [];
    for (var i = 0; i < 26; i++) {
        count = 0;
        for (var j = 0; j < l; j++) {
            if (i === arr[j]) {
                count++;
            }
        }
        frequency.push(count);
    }
    console.log("more-than-average: " + percentage);
    console.log("Frequency: " + frequency);

}

report([12, 18, 25, 24, 2, 5, 18, 20, 20, 21]);