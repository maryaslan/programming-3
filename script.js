function generateMatrix(len, gr, grEat, predator, persona, rock, blackhole, energy) {
  let matrix = [];
  for (let i = 0; i < len; i++) {
    matrix.push([])
    for (let j = 0; j < len; j++) {
      matrix[i].push(0)
    }
  }
  for (let i = 0; i < gr; i++) {
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    if (matrix[y][x] == 0) {
      matrix[x][y] = 1;
    }
  }
  for (let i = 0; i < grEat; i++) {
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    if (matrix[y][x] == 0) {
      matrix[x][y] = 2;
    }
  }
  for (let i = 0; i < predator; i++) {
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    if (matrix[y][x] == 0) {
      matrix[x][y] = 3;
    }
  }
  for (let i = 0; i < persona; i++) {
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    if (matrix[y][x] == 0) {
      matrix[x][y] = 4;
    }
  }
  for (let i = 0; i < rock; i++) {
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    if (matrix[y][x] == 0) {
      matrix[x][y] = 5;
    }
  }
  for (let i = 0; i < blackhole; i++) {
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    if (matrix[y][x] == 0) {
      matrix[x][y] = 6;
    }
  }
  for (let i = 0; i < energy; i++) {
    let x = Math.floor(Math.random() * len);
    let y = Math.floor(Math.random() * len);
    if (matrix[y][x] == 0) {
      matrix[x][y] = 7;
    }
  }
  return matrix;
}
let matrix = generateMatrix(30, 45, 25, 15, 20, 6, 6)

var side = 15;
var socket = io();

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let personaArr = [];
let rockArr = [];
let blackholeArr = [];
let energyArr = [];

function setup() {
  frameRate(5);
  createCanvas(matrix[0].length * side + 2, matrix.length * side + 2);
  background('#acacac');

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y);
        grassArr.push(gr)
      } else if (matrix[y][x] == 2) {
        let grEat = new GrassEater(x, y);
        grassEaterArr.push(grEat)
      } else if (matrix[y][x] == 3) {
        let predator = new Predator(x, y);
        predatorArr.push(predator)
      } else if (matrix[y][x] == 4) {
        let persona = new Persona(x, y);
        personaArr.push(persona)
      } else if (matrix[y][x] == 5) {
        let rock = new Rock(x, y);
        rockArr.push(rock);
      } else if (matrix[y][x] == 6) {
        let blackhole = new Blackhole(x, y);
        blackholeArr.push(blackhole);
      } else if (matrix[y][x] == 7) {
        let energy = new Energy(x, y);
        energyArr.push(energy);
      }
    }
  }

}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {


      if (matrix[y][x] == 0) {
        fill("#acacac");
      } else if (matrix[y][x] == 1) {
        fill("green");
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