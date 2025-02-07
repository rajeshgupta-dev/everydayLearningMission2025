// Bank Acount 

// using class and constructor fun

// class User {
//     constructor(name, balance) {
//       this.name = name;
//       this.balance = balance;
//     }
  
//     deposit(amount) {
//       this.balance += amount;
//     }
  
//     withdraw(amount) {
//       if (this.balance >= amount) {
//         this.balance -= amount;
//       } else {
//         console.log("Insufficient balance");
//       }
//     }
//   }
  
//   let user1 = new User("Raj", 100);
//   console.log(user1);
  
//   user1.deposit(50);
//   console.log(user1);
//   user1.withdraw(20);
//   console.log(user1);
  
//   user1.withdraw(200);
//   console.log(user1);

//   ============================================================
 
// using prototype

  function User(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  
  User.prototype.deposit = function(amount) {
    this.balance += amount;
  };
  
  User.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  };
  
  
  function BankAccount(name, balance) {
    User.call(this, name, balance);  
  }
  
  Object.setPrototypeOf(BankAccount.prototype, User.prototype);
  
  let user1 = new BankAccount("Raj", 100);
  console.log(user1); 
  
  user1.deposit(50);
  console.log(user1); 
  
  user1.withdraw(20);
  console.log(user1); 
  
  user1.withdraw(200); 
  console.log(user1); 
  