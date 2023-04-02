// let persona1 = new Person('simone', 'maccarone')
// console.log(persona1.toString())

console.log('---------- TEST ALL ORDERS ----------');
let order1 = new Order('Zucchine', 12, 2); /*-------------------*/console.log(order1.toString());
let order2 = new Order('Coca-Cola', 6, 1); /*-------------------*/console.log(order2.toString());
let order3 = new Order('Caramelle', 6, 0.5); /*-----------------*/console.log(order3.toString());
let order4 = new Order('Pizza', 1, 5); /*-----------------------*/console.log(order4.toString());
let order5 = new Order('Carbonara in polvere', 5, 7); /*--------*/console.log(order5.toString());
let order6 = new Order('Neve Speciale',1, 80); /*---------------*/console.log(order6.toString());
let order7 = new Order('Whisky', 5, 20); /*---------------------*/console.log(order7.toString());



console.log('---------- TEST CLIENT ----------');
let client1 = new Client('Dario', 'Greggio', [order1, order2], 'Via Terronia');/*------------*/ //console.log(client1.toString());
let client2 = new Client('Skippy62', 'Able', [order3, order4,order1,order2], 'Via dei Ciucci');
let client3 = new Client('Gianmarco', 'Tocco', [order1, order5], 'Via delle Madonne');
let client4 = new Client('Ciro', 'Trafficante', [order5,order1,order3], 'Via Pinnacoli Pendenti');
let client5 = new Client('Diprè', 'Avofatto', [order5,order6, order7], 'Via della Dipendenza');
let client6 = new Client('Barbara','Fisher',[order3],'Via Sampierdarena')
let client7 = new Client('Gino','Buonvino',[order7],'Via Brombeis')

console.log('!!! Add & Remove ORDERS !!!');

client1.addOrder(order3);/*------------------*/console.log('addOrder3\n',client1.toString()); // aggiunta e console.log del prodotto 3 
client1.removeOrder(order3);/*------------*/console.log('removeOrder3\n',client1.toString()); // rimozzione e console.log del prodotto 3


console.log('---------- TEST ALL EMPLOYEE ----------');
let employee1 = new Employee('Simone', 'Maccarone', [client1,client3,client5]);/*-------*/console.log(employee1.toString());

let employee2 = new Employee('CiccioGamer', '80FAME', [client2,client4],);/*------------*/console.log(employee2.toString());

let employee3 = new Employee('Mario','Fallito',[client6]);/*----------------------------*/console.log(employee3.toString());

console.log('!!! Add & Remove CLIENTS !!!');
employee3.addClient(client7);/*---------------*/console.log('_-_- addClient7 -_-_-\n',employee3.toString())
employee3.removeClient(client7);/*------------*/console.log('_-_- removeClient7 -_-_-\n',employee3.toString())













// console.log('----------TEST ALL MANAGER----------');
// let manager1 = new Manager('Xx_P!pp0','D3StR0y€R_xX',[employee1,employee2,employee3])
