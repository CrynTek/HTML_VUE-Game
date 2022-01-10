new Vue({
    el: '#app',
    data:{
      playerHealth: 100,
      demonHealth: 100,
      gameIsRunning: false,
      turns: [],
    
     

    },
    methods:{
        
      startGame: function(){
        this.gameIsRunning = true;
        this.playerHealth = 100;
        this.demonHealth = 100;
        this.turns = [];
      },
      attack: function(){
        let damage = this.calculateDamage(3, 10);
        this.demonHealth -= damage;
        this.turns.unshift({
          isPlayer: true,
          
        });

        if(this.checkWin()){
          return;
        }

        this.demonAttacks();

      },
      specialAttack: function(){
        let damage = this.calculateDamage(8, 20);
        this.demonHealth -= damage;
        this.turns.unshift({
          isPlayer: true,
          
        });

        if(this.checkWin()){
          return;
        }

        this.demonAttacks();
      },
     
      demonAttacks: function(){
        let damage = this.calculateDamage(5, 12);
        this.playerHealth -= damage;
        this.checkWin();
        this.turns.unshift({
          isPlayer: false,
          
        });

      },
      calculateDamage: function(min, max){
        return Math.max(Math.floor(Math.random() * max)+1, min);
      },
      checkWin: function(){
        if (this.demonHealth <=0) {
          if(confirm("You won! New Game?")){
            this.startGame();
          } else{
            this.gameIsRunning = false;
          }
          return true;
        } else if(this.playerHealth <=0){
          if(confirm("You lost! New Game?")){
            this.startGame();
          } else{
            this.gameIsRunning = false;
          }
          return true;
        }
        return false;

      }
    }
});
