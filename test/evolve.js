function evolvePokemon(pokemonEntity, pokemonLevel) {
var timer = 100;
var timerr = false;
pokemonEntity = //get the entity here
pokemonLevel = //get pokemon level here

while(pokemonLevel == 18) { //is evolve level 18? Lol
//play music here
ModPE.addTipMessage("§fYour pokemon §4" +pokemonEntity.getNameTag()+ "§f is Evolving!");
timerr = true;

if(timerr == true){
timer--;
}

if(timer == 80){
//setTexture of pokemon white
//set pokemons model to evolve model
}
if(timer == 60){
//pokemon model to original model
} 
if(timer == 40){
//pokemon to evolve model
}
if(timer == 20){
//pokemon to original model
}
if(timer <= 0){
timerr = false;
timer = 100;
//pokemon to evolved model
//set texture to evolved model texture
clientMessage("§fcongratulations! Your pokemon §4" +pokemonEntity.getNameTag()+ "has Evolved!");
}


}

}
