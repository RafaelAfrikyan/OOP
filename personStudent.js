class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
    }

    get firstName () {
        return this._firstName
    }
    get lastName () {
        return this._lastName
    }
    get gender (){
        return this._gender
    }
    get age() {
        return this._age
    }

    toString(){
        return `${this.firstName} ${this.lastName}, ${this.age} years old.`
    }
}


class Student extends Person {
    constructor(year, fee, )
}





const person = new Person ('Hayk', "haykyan", 'txa', 25)
console.log(person.toString())