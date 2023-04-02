// let persona1 = new Person('simone', 'maccarone')
// console.log(persona1.toString())

console.log('----------TEST ALL ORDERS----------');
let order1 = new Order('cocco', 12, 2); /*----------------------*/console.log(order1.toString());
let order2 = new Order('coca cola', 6, 1); /*-------------------*/console.log(order2.toString());
let order3 = new Order('fanta', 6, 0.5); /*---------------------*/console.log(order3.toString());
let order4 = new Order('Pizza', 1, 5); /*-----------------------*/console.log(order4.toString());
let order5 = new Order('Carbonara in polvere', 5, 7); /*--  ----*/console.log(order5.toString());


console.log('----------TEST CLIENT----------');
let client1 = new Client('Marco', 'Valdo', [order1, order2], 'Via dodecaneso 3');/*------------*/console.log(client1.toString());

client1.addOrder(order3);/*------------*/console.log(client1.toString());

let client2 = new Client('Ciro', 'Trafficante', [order3, order4], 'Via dei ciucci')
let client3 = new Client('Gianmarco', 'Tocco', [order4, order5], 'Via delle Madonne')



console.log('----------TEST EMPLOYEE----------');
let employee1 = new Employee('Simone', 'Maccarone', [client2,client3],);/*------------*/console.log(employee1.toString());


