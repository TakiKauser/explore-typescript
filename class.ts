class Car {
    model: string;
    price: number;

    private _millage: number;

    constructor(model: string, price: number){
        this.model = model;
        this.price = price;
        this._millage = 47;
    }

    getActualMillage(): number {
        const realMillage = this._millage - 10;
        return realMillage;
    }

    getTotalPrice(tax: number): number {
        const taxAmount = this.price * (tax / 100);
        const total = this.price + taxAmount;
        return total;
    }
}

const tyota = new Car("tyota", 790000);
const totalPrice: number = tyota.getTotalPrice(17);
console.log(totalPrice);
console.log("class!");