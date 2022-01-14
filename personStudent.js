class Person {
    constructor({firstName, lastName, gender, age}) {
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
    }

    get firstName () {
        return this._firstName
    }
    set firstName(value) {
        if(typeof value === 'string' && value.length > 3 ){
            this._firstName = value
        } else  throw new Error('error')
        
    }

    get lastName () {
        return this._lastName
    }
    set lastName (value) {
        if(typeof value !== 'string' && value.length<5 ){
            throw new Error('error')
        }
        this._lastName = value
    }


    get gender (){
        return this._gender
    }

    set gender(value) {
        if( typeof value !== 'string' &&  value !== 'male' || value !== 'female' || value !== 'other'){
            throw new Error('error')
        }
        this._gender = value
    }

    get age() {
        
        return this._age
    }
    set age(value) {
        if(typeof value !== "number" && value < 11 && value > 99) {
            throw new Error('error')
        }
        return this._age = value
    }

    toString(){
        return `${this.firstName} ${this.lastName}, ${this.age} years old.`
    }
}


const person1 = {
    firstName: 'Gago', 
    lastName: "an", 
    gender: 'female', 
    age: 4,
}

let user1 = new Person(person1)

console.log(user1.toString())



class Student extends Person {
    constructor({persInfo, year, fee, program}) 
    {
      super({persInfo});
      this._year = year;
      this._fee = fee;
      this._program = program;
    }
    get year (){
        return this._year
    }
    set year(value) {
        if(typeof value === 'number' && value <= 10){
            this._year = value
        } else {
            throw new Error ('Error')
        }
    }

    get fee (){
        return this._fee
    }
    set fee(value) {
        if(typeof value === 'number'){
            this._fee = value
        } else {
            throw new Error ('Error')
        }
    }

    get program (){
        return this._program
    }
    set program(value) {
        if(Array.isArray(value)){
            this._program = value
        } else {
            throw new Error ('Error')
        }
    }

    passExam(programName, grade){
       this.program.forEach((item) => {
           if(programName === item.programName && grade >=50){
               item.grade = grade
           }
        })
    }
    isAllPassed() {
        if(this.program.every((item) => item.grade >= 50)){
            return `Congratulations ${this.name}, you've passed this year!`
        }
        else return `Try again`
      }
}


const firstStudent = {
    persInfo: person1,
    year: 1,
    fee: 100000,
    program: [
      { programName: "math", grade: 60 },
      { programName: "english", grade: undefined },
    ]
  }

  const student1 = new Student(firstStudent);

  student1.passExam('math', 80);
  student1.passExam('english', 70);

  console.log(student1.program)





