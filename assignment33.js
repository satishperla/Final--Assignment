function filter_array_values(arr) {
    arr = arr.filter(filterOperation);
    console.log(arr);
}

function filterOperation(element) {
    if (element !== false || element !== null || element !== 0 || element !== "")
        return element;
}

filter_array_values([58, '', 'abcd', true, null, false, 0]);
filter_array_values([32, "", true, false]);
