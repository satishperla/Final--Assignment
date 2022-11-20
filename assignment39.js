function testFunction(str) {
    var char = /[$]/;
    try {
        if (char.test(str)) {
            throw "Invalid Name";
        }
        else
            console.log("Valid Name");
    }
    catch (e) {
        console.log(e);
    }
    finally {
        console.log("Finally is running ")
    }

}

testFunction('justaname');
testFunction('just$aname');