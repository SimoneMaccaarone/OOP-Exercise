// let persona1 = new Person('simone', 'maccarone')
// console.log(persona1.toString())

console.log('----------TEST ORDERS----------');
let order1 = new Order('cocco', 12, 2);
console.log(order1.toString());

let order2 = new Order('coca cola', 6, 1);
console.log(order2.toString());

let order3 = new Order('fanta', 6, 0.5);



console.log('----------TEST CLIENT----------');
let client1= new Client('Marco', 'Valdo', [order1,order2],'via dodecaneso 3');

console.log(client1.toString());

client1.addOrder(order3);

console.log(client1.toString());



console.log('----------TEST EMPLOYEE----------');
let employee1 = new Employee('Simone','Maccarone','','' );
console.log(employee1.toString());