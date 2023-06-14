// BANK ACCOUNT

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

function atm() {
  const message = parseFloat(
    prompt(
      "Select a choice 1.) See balance 2.) Make deposit 3.) Withdrawal money 4.) See account name 5.) Exit"
    )
  );
}
