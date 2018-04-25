function dwarfRollCall(dwarves) {
  
var  dwarvesNum = []

for (var i = 0; i < dwarves.length; i++ ){
  
  dwarvesNum.push ([i + 1] + ". " + dwarves[i] + ' ')
}
  
  dwarvesNum.toString();
  return dwarvesNum.join('');
}

function summonCaptainPlanet(planeteerCalls){
  
  for(var i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i]=planeteerCalls[i] + '!';
}

  return planeteerCalls.map(function(x){ return x.toUpperCase() })
  
}

function longPlaneteerCalls(words) {
  
   for (var i=0; i<words.length;i++){
    if (words[i].length > 4){
      return true 
    
    } else {return false}
  }
}

function findTheCheese (foods) {
  
  var cheeseTypes = ["cheddar", "gouda", "camembert"];
  var cheeseFound = "no cheese!"
  
  for (var i = 0; i < cheeseTypes.length; i++) {
     if (foods.indexOf(cheeseTypes[i]) > -1) {
         cheeseFound = cheeseTypes[i];
         break;
     }
  }
  
  return cheeseFound;
}
