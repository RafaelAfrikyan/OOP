class Author {
    constructor (name, email, gender) {
        this._name = name
        this._email = email
        this._gender = gender
    }
    toString () {
        if(this.gender === 'female'){
        return 'Ms. ' + this._name;
        } else {
            return 'Mr. ' + this._name;
        }
    }
    get gender (){
        return this._gender
    }
    get name () {
        return this._name
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title
        this._author = author
        this._price = price
        this._quantity = quantity
       
    }
    getProfit() {
        return this._price * this._quantity
    }
    set author (arg){
        if(!isNaN(arg)) {
            arg = 'throws error'
        } else {
        arg = arg.toUpperCase() }
    }
    get author (){
        return arg;
    }
    
}

let author1 = new Author ("J. K. Rowling", "abc@gmail.com", "male");




console.log(author1.toString());

console.log(author1.name = 12)

