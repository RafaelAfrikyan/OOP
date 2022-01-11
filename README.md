## OOP

### 01. [Coffe Shope](coffeShope.js)

Properties:
- name: a string (basically, of the shop)
- menu: an array of items (of object type), with each item containing the item (name of the item), type
- (whether food or a drink) and price. orders: an empty array

#### Methods:

  - addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
  - Otherwise, return "This item is currently unavailable!"
  - fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
empty, return "All orders have been fulfilled!"
  - listOrders: returns the list of orders taken, otherwise, an empty array.
  - dueAmount: returns the total amount due for the orders taken.
  - cheapestItem: returns the name of the cheapest item on the menu.
  - drinksOnly: returns only the item names of type drink from the menu.
  - foodOnly: returns only the item names of type food from the menu.
  - IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

### 02. [Accounts](account.js)

```js
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is
$1400.
```

### 03. [Autor, Book](getter.js)

```js
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
```

### 04. [Person, Student](personStudent.js)

Write classes: Person class and Student class. Person should have:

```js
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
```