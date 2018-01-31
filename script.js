(function(){



var character = {
  name: prompt("What is your name?"),
  health: 40,
  healsRemaining:2,
  wins:0,
  generateAttackDamage:function(){
    return Math.floor(Math.random() * 3 + 1);
  },
  heal:function(){
    return Math.floor(Math.random() * 10 + 1);
  }
}

var grant = {
  name:"Grant",
  health: 10,
  generateAttackDamage:function(){
    return Math.floor(Math.random() * 5 + 1);
  }
}

function startGame() {
  play = prompt ("Would you like to play a game?")
  if ( play === "yes"){
    character.name ;
    startCombat();
  } else {
    console.log("Maybe next time")
  }
}

function startCombat(){
  console.log(character.name + " starts with " + character.health + " hitpoints");
  console.log( grant.name + " starts with " + grant.health + " hitpoints");
  while(grant.health > 0){
    character.health = character.health - character.generateAttackDamage();
    grant.health =  grant.health - grant.generateAttackDamage();
    console.log(character.name + " has " + character.health + " hitpoints remaining");
    console.log(grant.name + " has " + grant.health + " hitpoints remaining");
    if (grant.health <= 0){
      character.wins++; console.log(character.name + " now has " + character.wins + " wins!");
      attack();
    }
    if (character.wins === 5 && character.health > 0){
	     console.log("you have won the battle");
	      break;
    }
    if (character.health < 1){
	     console.log(character.name + " has lost the battle");
	      break;
	   }
  }
}

function attack(){
  if( character.wins <= 4 ) {
    advance = prompt("Would you like to attack, heal, or quit?");
    if( advance === "attack" ){
      grant.health = 10;
      character.health = character.health - character.generateAttackDamage();
      grant.health = grant.health - grant.generateAttackDamage();
      console.log(character.name + " has " + character.health + " hitpoints remaining");
      console.log(grant.name + " has " + grant.health + " hitpoints remaining");
      if (grant.health <= 0){
    	character.wins++; console.log( character.name + " now has " + character.wins + " wins!");
      }
    } else if (advance === "quit"){
      console.log(character.name + " left the game");
    } else if (advance === "heal" && character.healsRemaining > 0){
      character.health = character.health + character.heal();
      character.healsRemaining--;
      console.log(character.name + " now has " + character.health + " hitpoints and " + character.healsRemaining + " heals remaining.");
      attack();
    } else if (advance === "heal" && character.healsRemaining === 0){
      prompt("you are out of heals, you must attack or quit, press okay and enter command on next prompt");
      attack();
    }
  }
}

 startGame();


})();
