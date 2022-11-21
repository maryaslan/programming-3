var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000); 

matrix = [];

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

  io.sockets.emit('send matrix', matrix)

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let personaArr = [];
let rockArr = [];
let blackholeArr = [];
let energyArr = [];