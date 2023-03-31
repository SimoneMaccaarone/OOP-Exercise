class Client extends Person {
    constructor(name, surname, orders, address) {
        super(name, surname);
        this.orders = orders;
        this.address = address;
    }
    toString() {
        return `CLIENT:${super.toString()}\nORDERS:\n${this.ordersToString()}\nTOTAL PAYMENT:${this.totalOrdersPrice()}€\nADDRESS:${this.address}`
    }
    ordersToString() {
        let str = ''
        for (let i=0; i<this.orders.length; i++) {
            str+=this.orders[i].toString()+'\n-------------------\n';
        }
        return str;
    }

    totalOrdersPrice() {
        let totalOrdersPrice = 0
        for (let i=0; i<this.orders.length; i++) {
            totalOrdersPrice+=this.orders[i].totalPrice();
        }
        return totalOrdersPrice;
    }

    addOrder(order){
        this.orders.push(order);
    }

}

