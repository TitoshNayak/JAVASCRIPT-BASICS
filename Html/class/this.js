//Using the this keyword we going to creat a program
/*
class Emmployee {
    emp_id = 500;
    constructor(a, b) {
      this.acc_Name = a;
      this.acc_Loc = b;
      console.log("constructor executing only once");
    }
    get_id() {
      console.log("Your Employee Id  is:", this.emp_id);
    }
  }
  
  let c1 = new Employee("kavitha", "Bangalore");
  c1.get_id();
  c1.get_id();
  c1.get_id();
  c1.get_id();
  */


  //program is written using fat arrow method

  class BankCutomer {
    min_Bal = 1000;
    constructor(a, b) {
      this.acc_Name = a;
      this.acc_Loc = b;
      console.log("your program is executed now only once");
    }
    getBal = () => {
      console.log("Your Bal is :", this.min_Bal);
      console.log(this);
    };
  }
  
  let c1 = new BankCutomer("titosh", "Bangalore");
  c1.getBal();
 