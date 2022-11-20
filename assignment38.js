function spreadOpertor() {
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo, 7, 8, 9];
    console.log(numbersCombined);
}

function restOperator(...elements) {
    var sum = 0;
    for (let i of elements) {
        sum += i;
    }
    console.log(sum);
}

function destructuring() {
    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car, truck, suv] = vehicles;
    console.log(car);
    console.log(truck);
    console.log(suv);
}

spreadOpertor();
restOperator(2, 3, 4, 5, 67);
destructuring();