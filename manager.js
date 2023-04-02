class Manager extends Person{
    constructor(name,surname, employees){
    super(name,surname);
    this.employees= employees;
    }

    toString(){
        return `NAME:${super.toString()}\nNUMBER OF EMPLOYEES:${this.manager.length}\nNUMBER OF CLIENTS:${this.clients.length}\nTOTAL EARNINGS:${'----------'}€}`
    }

    sumOfAllClientsforManager(){
        
    }
}