function dwarfRollCall(dwarves) {
  
var  dwarvesNum = []

for (var i = 0; i < dwarves.length; i++ ){
  
  dwarvesNum.push ([i + 1] + ". " + dwarves[i])
}
  
  return dwarvesNum;
}

function summonCaptainPlanet(planeteerCalls){
  
  for(var i=0; i<planeteerCalls.length; i++){
    planeteerCalls[i]=planeteerCalls[i] + '!';
}

  return planeteerCalls.map(function(x){ return x.toUpperCase() })
  
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
