/*
class sal {
    min_Bal = 5000;
    name = "nayak";
  }
  console.log(new sal());
  console.log(new sal());
  */
/*
  class Bank {
    min_Bal = 500;
    constructor(a) {
      this.acc_Name = a;
    }
  }
  let c1 = new Bank("Nayak");
  console.log(c1);
  console.log(c1.acc_Name);
  
  let c2 = new Bank("Sai");
  console.log(c2);

//h

  class Building {}

console.log(new Building());

console.log(new Building());
console.log(new Building());
console.log(new Building());
console.log(new Building()); 

*/

///With constructor concept
class Bank {
  constructor() {
    console.log("Constructor method execute only once");
  }
  getBalance() {
    console.log("Your Balance Amount: 10000");
  }
}

let c1 = new Bank();
c1.getBalance();
c1.getBalance();
c1.getBalance();