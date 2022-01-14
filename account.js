
class Account {
    constructor(name, balance) {

       this.id =  Account.incrementId++
       
       this._name = name
       this._balance = balance
    }
    static incrementId = 0;
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
        return this._balance = (this._balance + amount) - anotherAccount
        } else {
                return 'Amount exceeded balance.'
        }
    }
    toString() {
        return 'hello'
    }
      }
    


let savingAcc = new Account ('Saving account', 2000)
let gago = new Account('cdc', 454)
console.log(savingAcc)
console.log(gago.debit(500))
