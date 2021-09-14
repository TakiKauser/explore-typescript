"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 47;
    }
    getActualMillage() {
        const realMillage = this._millage - 10;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * (tax / 100);
        const total = this.price + taxAmount;
        return total;
    }
}
const tyota = new Car("tyota", 790000);
const totalPrice = tyota.getTotalPrice(17);
console.log(totalPrice);
console.log("class!");
