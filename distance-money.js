const priceFinding = (kg) =>{
    let price = 5;
    
    
    let totalPrice = price * kg;
    if (kg >20) {
        let kilo = kg-20;
        totalPrice = 100 + (kilo*3) 

    }
    if (kg > 50) {
        let upKilo = kg-50
        totalPrice = 190 + (upKilo*2)
    }
    return totalPrice;
    
}

console.log(priceFinding(205));

