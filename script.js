let theButton = document.getElementById("start");
theButton.addEventListener("click", doEverything);

function doEverything(){
  theButton.removeEventListener("click",doEverything);
  const gameContainer = document.getElementById("game");
let score = 0;
document.getElementById("score").innerHTML = score;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
let clicks = 0;
let check = [];
let final = [];



// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.classList.toggle(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    
    function handleCardClick(){
      if(clicks === 0 || clicks === 1){
      newDiv.classList.toggle(color);
      clicks = clicks +1;
      check.push(color);
      
      
      if(clicks === 2 && check[0] !== check[1]){
        setTimeout(function(){newDiv.classList.toggle(color);},1000);
        let a = document.querySelector("."+check[0]);
        setTimeout(function(){a.classList.toggle(check[0]);},1000);
      
        setTimeout(function(){clicks = 0;},1000);
        setTimeout(function(){check=[];},1000);
       
      }
      else if(clicks === 2 && check[0] === check[1]){
        clicks = 0;
        check = [];
        final.push(1);
        setTimeout(function(){alert('match!');},500);
        setTimeout(function(){score = score +1},500);
        setTimeout(function(){document.getElementById("score").innerHTML = score;},500);
      }
      }
      if(final.length === 5){
        setTimeout(function(){alert('you win!');},1000);
        setTimeout(function(){location.reload()},1500);
      }
    
      }
    

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);
}