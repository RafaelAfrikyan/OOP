class Shiritori{
    constructor() {
        this.words = []
        this.game_over = false
    }

    play(word) {
        let arr = this.words;
        let lastItem = arr[arr.length-1];
       


        if (this.words.length === 0 && typeof word === 'string') {
            this.words.push(word);
            return;
        };
        if(arr.includes(word)) {
            this.game_over = true;
            console.log('game over')  
        }  else if( word[0] === lastItem[lastItem.length-1]) {
            this.words.push(word)
        }   else {
            this.game_over = true;
            console.log('game over')
            
        }
    }

    restart (){
        this.words = [];
        this.game_over = false;
        return 'game restarted'
    }

}

const myShiritori = new Shiritori();

 myShiritori.play("apple"); 
myShiritori.play('efds');
myShiritori.play('snhghhga');
myShiritori.play("apple"); 

 console.log(myShiritori.words)


