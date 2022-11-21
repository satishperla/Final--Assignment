function checkDate(date) {
    let dateformat = /^(0?[1-9]|1[0-2])[-/](0?[1-9]|[1-2][0-9]|3[01])[-/]\d{4}$/
    if (date.match(dateformat)) {
        console.log(true);
    }
    else
        console.log(false);
}

checkDate('12-19-1998');
checkDate('19-12-2003');
checkDate('saa');