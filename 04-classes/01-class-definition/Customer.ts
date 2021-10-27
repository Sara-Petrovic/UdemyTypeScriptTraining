class Customer{
    firstName: string; //public je po difoltu
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName =theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("Sara", "Saric");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);