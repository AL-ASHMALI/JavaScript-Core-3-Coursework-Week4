function sales(carsSold) {
    let totals = {}; 

    carsSold.forEach((car) => {
        if (car.make !== totals[car.make]) {totals[car.make] = 0}; 
    }); 

    carsSold.forEach((car) => {
        (totals[car.make] += car.price); 
        return totals; 
    }); 

    return totals;
}

module.exports = sales;
