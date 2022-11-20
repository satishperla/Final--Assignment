function stockPrice() {
    var i = 0;
    var price = setInterval(stock = () => {
        i++;
        if (i === 5)
            clearInterval(price);

        var random_price = Math.floor(Math.random() * 100);
        console.log("Stock Price is : " + random_price);
    }, 3000);

}

stockPrice();