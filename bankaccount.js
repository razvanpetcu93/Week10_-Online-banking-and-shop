// BankAccount class
class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Insufficient balance.");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  // SavingsAccount subclass
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Insufficient balance.");
      }
    }
  }
  
  // CheckingAccount subclass
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, transactionLimit) {
      super(accountNumber, balance);
      this.transactionLimit = transactionLimit;
    }
  
    withdraw(amount) {
      if (amount <= this.balance && amount <= this.transactionLimit) {
        this.balance -= amount;
      } else {
        console.log("Transaction limit exceeded or insufficient balance.");
      }
    }
  }
  
  
  const savingsAccount = new SavingsAccount("SA001", 5000, 0.03);
  const checkingAccount = new CheckingAccount("CA001", 3000, 1000);
  
  console.log("Initial balances:");
  console.log("Savings Account:", savingsAccount.getBalance());
  console.log("Checking Account:", checkingAccount.getBalance());
  
  savingsAccount.deposit(1000);
  checkingAccount.deposit(500);
  
  console.log("Balances after deposit:");
  console.log("Savings Account:", savingsAccount.getBalance());
  console.log("Checking Account:", checkingAccount.getBalance());
  
  savingsAccount.withdraw(2000);
  checkingAccount.withdraw(1500);
  
  console.log("Balances after withdrawal:");
  console.log("Savings Account:", savingsAccount.getBalance());
  console.log("Checking Account:", checkingAccount.getBalance());
  
  savingsAccount.withdraw(5000); // Should display "Insufficient balance."
  checkingAccount.withdraw(2000); // Should display "Transaction limit exceeded or insufficient balance."
  