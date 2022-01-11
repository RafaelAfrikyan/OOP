
class Account {
    constructor( name, balance) {

       this.id =  function foo (id) {
            return function(num) {
                return id;
                id+=num;
                
            } 
       }(0)(1)

       this._name = name
       this._balance = balance
    }
    get name () {
        return this._name
    }
    
    get balance() {
        return this._balance
    }
    
    credit (amount) {
        return this._balance += amount
    }

    debit(amount) {
        if(this._balance < amount) {

            return 'Amount exceeded balance.'
            
        } else {
            return this._balance = this._balance - amount
        }
    }
    transferTo(anotherAccount, amount) {
        if(amount < this._balance) {
        return this._balance = (this._balance - amount) + anotherAccount
        } else {
                return 'Amount exceeded balance.'
        }
    }
    static identifyAccounts(accountFirst, accountSecond) {

    }
}

let savingAcc = new Account ('Saving account', 2000)
let gago = new Account('cdc', 454)
console.log(savingAcc)
console.log(gago)
