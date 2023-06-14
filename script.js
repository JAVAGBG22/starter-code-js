// BANK ACCOUNT
//alert("hejhej");
/* prompt(
  "Select a choice 1.) See balance 2.) Make deposit 3.) Withdrawal money 4.) See account name 5.) Exit"
); */

// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// this property should contain the name of the account holder

// - balance, should be the data type number
// this property should contain the total amount of the account

// - getBalance, should be a function
// this function should display the total amount of the account to the user

// - deposit, also a function
// this function should be able to deposit money onto the balance of the account

// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account

// - getAccountName, function as well
// this function should dispaly the account holders name to the user

// EXTRA: exitAccount, should be a function
// this function should exit the account

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// ett objekt som innehåller all vår logik
const account = {
  // properties
  accountName: "Helena Johansson",
  balance: 100,
  getAccountName: function () {
    //alert("Name of account holder: " + this.accountName);
    // template literal
    alert(`Name of account holder: ${this.accountName}`);

    atm();
  },
  getBalance: function () {
    alert(`Your current balance is: ${this.balance}`);
    atm();
  },
  deposit: function () {
    // se till att spara user input någonstans
    const amount = parseFloat(prompt("How much would you like to deposit?"));

    // efter att user input är sparat bör man kontrollera
    // så att user input är en giltlig input, alltså ett numer och inget annat.
    // user input bör inte vara 0 eller negativa tal
    // && och operatorn
    // || eller operatorn
    /* if (test || userTest) {
        // returneras om villkoret är true
    } */

    if (amount <= 0 || isNaN(amount)) {
      alert("Error: please enter a valid number!");
      this.deposit();
    } else {
      //this.balance = this.balance + amount;
      this.balance += amount;
      //console.log(this.balance);
      this.getBalance();
    }

    // om det är en korrekt user input då ska balance propertyn öka, alltså
    // summan som kom från user input ska plussas på balance property
    // kan vara god console.log(balance)
  },
  withdrawal: function () {
    const withdraw = parseFloat(prompt("How much would you like to withdraw?"));
    if (withdraw <= 0 || isNaN(withdraw)) {
      alert("Error: please enter a valid number!");
      this.withdrawal();
    } else {
      this.balance -= withdraw;
      //console.log(this.balance);
      this.getBalance();
    }
  },
  exitAccount: function () {
    const leave = confirm("You have selected exit. Are you sure?");
    if (leave) {
      window.close();
    } else {
      atm();
    }
  },
};

// let const

// en funktion som endast hanterar att visa rätt val baserat på user input
function atm() {
  const message = parseFloat(
    prompt(
      "Select a choice 1.) See balance 2.) Make deposit 3.) Withdrawal money 4.) See account name 5.) Exit"
    )
  );

  switch (message) {
    case 1:
      account.getBalance();
      break;
    case 2:
      account.deposit();
      break;
    case 3:
      account.withdrawal();
      break;
    case 4:
      account.getAccountName();
      break;
    case 5:
      account.exitAccount();
      break;
  }
}

atm();
