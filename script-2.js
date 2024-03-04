function discountCalculator() {
    basePrice = prompt("Hi, to calculate you discount we need to go through three steps: \n 1/3: What is the base price of the product that you want to buy:")
    if (isNaN(basePrice)) {
        alert("You sly fox! You ought to write a number!")
    } else {
        discountCode = prompt("2/3: Write down the discount code, if you have one (attention! you need to write the code EXACTLY as it is, otherwise it won't work)");
        productAmount = prompt("3/3: How many items of the product are you planning to purchase?")
        if (isNaN(productAmount)) {
            alert("You sly fox! You ought to write a number!")
        } else {
            if (discountCode == "NEWYEAR") {
                basePrice = basePrice * 0.8;
            } else if (discountCode == "BLACKFRIDAY") {
                basePrice = basePrice * 0.7;
            } else if (discountCode == "SUMMERSALE") {
                basePrice = basePrice * 0.85;
            } else {
                basePrice = basePrice * 0.95;
            }
            console.log(basePrice);
            if (Number(productAmount) >= 3 && basePrice >= 1000) {
                basePrice = basePrice * 0.85;
            } else if (Number(productAmount) >= 3) {
                basePrice = basePrice * 0.95;
            } else if (basePrice >= 1000) {
                basePrice = basePrice * 0.9;
            }
            alert("So, your final price will be " + basePrice + " UAH per product");
        }
    }
}
discountCalculator();