
//console.log("working");

///////////global variables////////

const gameBoard = [
  ['A', 'B', 'C'],
  ['1', '2', '3'],
  ['D', 'E', 'F']
]

let player1Turn = true;   //variable to indicate if player1 can go
let player2Turn = true;  // variable to indicate if player2 can go

let win = false; // indicates whether the game has been won

let turns = 0; //indicates how many turns have been taken


//////////////////////////////////////////


//function for player1 turn
const player1 = function (array, index) {
  if (win) {
    console.log('Game Over, we have a winner!');
  } else {
    if (player1Turn) {
      //can't override another players inputs
      //if statement for if the index is === 'X' or === 'O' this square is already take
      if (gameBoard[array][index] === 'X' || gameBoard[array][index] === 'O') {
        console.log('This square is already taken');
      } else {
        gameBoard[array][index] = 'X';
        console.log(gameBoard[array][index]);
        turns += 1;
        winLogic();
        player1Turn = false;
        player2Turn = true;
      }
    } else {
      console.log("Its not your turn!");
    }
  }
}

//function for player2 turn
const player2 = function (array, index) {

  if (win) {
    console.log('Game Over, we have a winner!');
  } else {
    if (player2Turn === true) {
      //can't override another players inputs
      //if statement for if the index is === 'X' or === 'O' this square is already take
      if (gameBoard[array][index] === 'X' || gameBoard[array][index] === 'O') {
          console.log('This square is already taken');
        } else {
          gameBoard[array][index] = 'O';
          console.log(gameBoard[array][index]);
          turns += 1;
          winLogic();
          player2Turn = false;
          player1Turn = true;
        }
    } else {
        console.log("Its not your turn!");
    }
  }
}

//work on winning game logic
//if this combination X has won , repeat for all possible combos
const winLogic = function () {
  //its a draw
  if (turns >= 9) {
    console.log('Its a draw!');
  }
//winning combination 1
  if ((gameBoard[0][1] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[2][1] === 'X')) {
    console.log('player1 won!');
    win = true;
    winnerScreen();
  }
//winning combination 2
  else if ((gameBoard[1][0] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[1][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winnerScreen();
  }
//winning combination 3
  else if ((gameBoard[0][0] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[2][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winnerScreen();
  }
//winning combination 4
  else if ((gameBoard[0][2] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[2][0] === 'X')) {
    console.log('player1 won!');
    win = true;
    winnerScreen();
  }
//winning combination 5
  else if ((gameBoard[0][0] === 'X') && (gameBoard[0][1] === 'X') && (gameBoard[0][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winnerScreen();
  }
//winning combination 6
  else if ((gameBoard[2][0] === 'X') && (gameBoard[2][1] === 'X') && (gameBoard[2][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winnerScreen();
  }
  //winning combination 7
  else if ((gameBoard[0][0] === 'X') && (gameBoard[1][0] === 'X') && (gameBoard[2][0] === 'X')) {
    console.log('player1 won!');
    win = true;
    winnerScreen();
  }
  //winning combination 8
  else if ((gameBoard[0][2] === 'X') && (gameBoard[1][2] === 'X') && (gameBoard[2][2] === 'X')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
  //if this combination O has won , repeat for all possible combos
  //winning combination 9
  else if ((gameBoard[0][1] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[2][1] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
//winning combination 10
  else if ((gameBoard[1][0] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[1][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
//winning combination 11
  else if ((gameBoard[0][0] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[2][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
//winning combination 12
  else if ((gameBoard[0][2] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[2][0] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
//winning combination 13
  else if ((gameBoard[0][0] === 'O') && (gameBoard[0][1] === 'O') && (gameBoard[0][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
//winning combination 14
  else if ((gameBoard[2][0] === 'O') && (gameBoard[2][1] === 'O') && (gameBoard[2][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
  //winning combination 15
  else if ((gameBoard[0][0] === 'O') && (gameBoard[1][0] === 'O') && (gameBoard[2][0] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
  //winning combination 16
  else if ((gameBoard[0][2] === 'O') && (gameBoard[1][2] === 'O') && (gameBoard[2][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winnerScreen();
  }
}


//////////////TESTING TURNS CAN"T BE OVERRIDDEN, ANG INDICATING WHOSE TURN IT IS/////////////////////

// player2(1,1); //turn correctly taken
// player1(0,0); //turn correctly taken
// player1(1,0); //wasn't there turn so it ignored them
// player2(1,2); //turn correctly taken
// player1(1,2); //trying to override a square from player2
// player2(0,0); //trying to override a square from player1, but it's also not their turn
// player1(0,0); //trying to override a square of it's own
// player1(2,1); //turn correctly taken
// player2(1,2); //trying to override a square of it's own
// player2(0,0); //trying to override a square from player1
// console.log(gameBoard);

////////////testing to see if player 1 won//////////////////
// player2(1,0);
// player1(0,1);
// player2(2,2);
// player1(1,1);
// player2(2,0);
// player1(2,1);
// console.log(gameBoard);


/////////////testing to see if player 2 won //////////////////////
// player2(0,2);
// player1(1,1);
// player2(1,2);
// player1(1,0);
// player2(2,2);
// player1(0,0);
// console.log(gameBoard);


//function so if no-one wins after 9 turns return 'its a draw'


////////////////////////////* NOTES ON FLAGS *//////////////////////////////////
// turns create boolean variables that show when x goes true, if x goes again its false = to determine when its each players turns
//use flags to indicate when a player can take their turn
//create flag for both players turns
//when that player takes their turn, turn the flag to false
//do the same for other player
