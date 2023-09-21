class Account {

    constructor(accountHolderName, balance = 0) {
  
      this.accountNumber = Account.generateAccountNumber();
  
      this.accountHolderName = accountHolderName;
  
      this.balance = balance;
  
    }
    static generateAccountNumber() {
  
      return Math.floor(Math.random() * 1000000000000); 
  
    }
    deposit(amount) {
  
      if (amount > 0) {
  
        this.balance += amount;
  
        console.log(`Deposited ${amount} into account #${this.accountNumber}`);
      
  
      } else {
  
        console.log("Invalid deposit amount.");
  
      }
  
    }
    withdraw(amount) {
  
      if (amount < this.balance) {
  
        this.balance -= amount;
  
        console.log(`Withdrawn ${amount} from account #${this.accountNumber}`);
  
      } else {
  
        console.log("Insufficient balance or invalid withdrawal amount.");
  
      }
  
    }
    getAccountDetails() {
  
      console.log(`Account #${this.accountNumber}`);
  
      console.log(`Account Holder: ${this.accountHolderName}`);
  
      console.log(`Balance: ${this.balance}`);
  
    }
  
  }
  class Bank {
    constructor(bankName) {
      this.bankName = bankName;
      this.accounts = [];
  
    }

    createAccount(accountHolderName) {
      const account = new Account(accountHolderName);
      this.accounts.push(account);
      console.log(`Account created successfully. Account #${account.accountNumber}`);
  
    }

  totalBankBalance() {
  
    let total = 0;

    this.accounts.forEach(account => { total += account.balance;

    });

    console.log(`Total Bank Balance: ${total}`);

  }
  getAllAccounts() {
  
    console.log(`Accounts at ${this.bankName}:`);

    this.accounts.forEach(account => {

      account.getAccountDetails();

      console.log("-------------------");

    });

  }
     
  
  }

  const myBank = new Bank("MyBank");
  myBank.createAccount("Rohit G");
  const rohitAccount = myBank.accounts[0];
  rohitAccount.deposit(1000);
  rohitAccount.withdraw(500);
  rohitAccount.getAccountDetails()
  myBank.getAllAccounts();
  myBank.totalBankBalance();
 
  
  
 myBank.createAccount("Monu");
  const monuAccount=myBank.accounts[1];
  monuAccount.deposit(9900);
  monuAccount.withdraw(1000);
  monuAccount.getAccountDetails();
  


  
