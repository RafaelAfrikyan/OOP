
class Coffeshop {
    constructor(name){
        this.name = name
        this.menu = []
        this.orders = []
    }
    addItems(item){
        this.menu.push(...item)
        
    }
    addOrder(item) {
        let isExist = false;
        this.menu.forEach((el) => {
            if(item === el) {
                this.orders.push(item)
               isExist = true
            } 
        })
        if(!isExist) {
            console.log(`${item} is currently unvailable`)
        }
       
    }

    listOrder () {
        console.log(this.orders)
    }

    dueAmount(){
        return this.orders.reduce((acc, item) => {
            acc += item.price
            return acc;
        }, 0);
    }
};

class Item{
    constructor (...arg){
        [this.name, this.type, this.price] = arg
    }
}

const pepsi = new Item ('pepsi', 'drink', 650);
const milk = new Item ('milk', 'drink', 450);
const kebab = new Item ('kebab', 'food', 1100);
const orax = new Item ('orax', 'drink', 2500);
const xash = new Item ('xash', 'food', 3000);


const coffe = new Coffeshop('Pele')


coffe.addItems([pepsi, milk, kebab, orax, xash])
coffe.addOrder(pepsi)
coffe.addOrder(milk)
coffe.addOrder(xash)

console.log(coffe.dueAmount())