var side = 15;
var socket = io();


weather = 'winter';
function spring(){
  weather = 'spring';
}
function summer(){
  weather = 'summer';
}
function autumn(){
  weather = 'autumn';
}
function winter(){
  weather = 'winter';
}
function setup() {
  frameRate(5);
  createCanvas(matrix[0].length * side + 2, matrix.length * side + 2);
  background('#acacac');
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 0) {
        fill("#acacac");
        //rect(x * side, y * side, side, side);
      } else if (matrix[y][x] == 1) {
        fill("green");
        if(weather == winter){
          fill("#ffffff");
        }else if(weather == autumn){
          fill("FFA107");
        }
      } else if (matrix[y][x] == 2) {
        fill("yellow");
      } else if (matrix[y][x] == 3) {
        fill("#FF22E1");
      } else if (matrix[y][x] == 4) {
        fill("#00FFFF");
      } else if (matrix[y][x] == 5) {
        fill("white");
      } else if (matrix[y][x] == 6) {
        fill("black");
      }

      rect(x * side, y * side, side, side);


    }
  }

  for (let i in grassArr) {
    grassArr[i].mul()
    grassArr[i].eat()
  }
  for (let i in grassEaterArr) {
    grassEaterArr[i].eat()
  }
  for (let i in predatorArr) {
    predatorArr[i].eat()
  }
  for (let i in personaArr) {
    personaArr[i].eat()
  }

}