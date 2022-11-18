function swapCase(str) {
    var newarray = [];
    var l = str.length;
    for (var i = 0; i < l; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newarray[i] = str[i].toUpperCase();
        } else {
            newarray[i] = str[i].toLowerCase();
        }
    }
    console.log(newarray.join(""));
}


swapCase('tHE qUICK bROWN fOX');
swapCase('iT iS the nEW bEginnInG');