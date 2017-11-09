
//console.log("working");

////////////////////GLOBAL VARIABLES///////////////////

const gameBoard = [         //game board//
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_']
]

let player1Turn = true;   //flag to indicate if player1 take a turn
let player2Turn = true;  // flag to indicate if player2 take a turn

let win = false; // indicates whether the game has been won

let turns = 0; //indicates how many turns have been taken

let isRunning = false;    //indicates whether the game has started or not


//////////////////////////////////////////////


//function for player1 turn//

const player1 = function (array, index) {
  if (win) {
    console.log('Game Over, we have a winner!');
  } else {
    if (player1Turn) {          //will only run it its that players turn
      //if statement for if the index is === 'X' or === 'O' this square is already taken
      if (gameBoard[array][index] === 'X' || gameBoard[array][index] === 'O') {
        console.log('This square is already taken');
      } else {
        //allow that player to successfully put an X in the gameboard array//
        gameBoard[array][index] = 'X';
        console.log(gameBoard[array][index]);
        turns += 1;           //add a turn to the total count
        winLogic();           //run winLogic to see if there is a winner yet
        player1Turn = false;  //flag to indicate it is no longer player 1's turn
        player2Turn = true;   //flag to indicate it is now player 2's turn

      }
    } else {
      console.log("Its not your turn!");    //will not let player 1 go if it's not their turn
    }
  }
}

//function for player2 turn//

const player2 = function (array, index) {

  if (win) {
    console.log('Game Over, we have a winner!');
  } else {
    if (player2Turn === true) {       //will only run it its that players turn
      //if statement for if the index is === 'X' or === 'O' this square is already taken
      if (gameBoard[array][index] === 'X' || gameBoard[array][index] === 'O') {
          console.log('This square is already taken');
        } else {
          //allow that player to successfully put an O in the gameboard array//
          gameBoard[array][index] = 'O';
          console.log(gameBoard[array][index]);
          turns += 1;             //add a turn to the total count
          winLogic();            //run winLogic to see if there is a winner yet
          player2Turn = false;   //flag to indicate it is no longer player 2's turn
          player1Turn = true;   //flag to indicate it is now player 1's turn
        }
    } else {
        console.log("Its not your turn!");  //will not let player 1 go if it's not their turn
    }
  }
}



/////////////CHECKING TO SEE IF GAME IS WON. POSSIBLE WIN COMBINATIONS////////////////

//if this combination X has won , repeat for all possible combos//

const winLogic = function () {
//winning combination 1
  if ((gameBoard[0][1] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[2][1] === 'X')) {
    console.log('player1 won!');
    win = true;
    winner1Screen();
  }
//winning combination 2
  else if ((gameBoard[1][0] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[1][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winner1Screen();
  }
//winning combination 3
  else if ((gameBoard[0][0] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[2][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winner1Screen();
  }
//winning combination 4
  else if ((gameBoard[0][2] === 'X') && (gameBoard[1][1] === 'X') && (gameBoard[2][0] === 'X')) {
    console.log('player1 won!');
    win = true;
    winner1Screen();
  }
//winning combination 5
  else if ((gameBoard[0][0] === 'X') && (gameBoard[0][1] === 'X') && (gameBoard[0][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winner1Screen();
  }
//winning combination 6
  else if ((gameBoard[2][0] === 'X') && (gameBoard[2][1] === 'X') && (gameBoard[2][2] === 'X')) {
    console.log('player1 won!');
    win = true;
    winner1Screen();
  }
  //winning combination 7
  else if ((gameBoard[0][0] === 'X') && (gameBoard[1][0] === 'X') && (gameBoard[2][0] === 'X')) {
    console.log('player1 won!');
    win = true;
    winner1Screen();
  }
  //winning combination 8
  else if ((gameBoard[0][2] === 'X') && (gameBoard[1][2] === 'X') && (gameBoard[2][2] === 'X')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }

  //if this combination O has won , repeat for all possible combos//

  //winning combination 9
  else if ((gameBoard[0][1] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[2][1] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
//winning combination 10
  else if ((gameBoard[1][0] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[1][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
//winning combination 11
  else if ((gameBoard[0][0] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[2][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
//winning combination 12
  else if ((gameBoard[0][2] === 'O') && (gameBoard[1][1] === 'O') && (gameBoard[2][0] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
//winning combination 13
  else if ((gameBoard[0][0] === 'O') && (gameBoard[0][1] === 'O') && (gameBoard[0][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
//winning combination 14
  else if ((gameBoard[2][0] === 'O') && (gameBoard[2][1] === 'O') && (gameBoard[2][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
  //winning combination 15
  else if ((gameBoard[0][0] === 'O') && (gameBoard[1][0] === 'O') && (gameBoard[2][0] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
  //winning combination 16
  else if ((gameBoard[0][2] === 'O') && (gameBoard[1][2] === 'O') && (gameBoard[2][2] === 'O')) {
    console.log('player2 won!');
    win = true;
    winner2Screen();
  }
  // else if 9 turns have been taken, its a draw
  else if (turns >= 9) {
    console.log('Its a draw!');
    drawScreen();
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


////////////////////////////* NOTES ON FLAGS *//////////////////////////////////
// turns create boolean variables that show when x turn is true, if x goes again its false = to determine when its each players turns
//use flags to indicate when a player can take their turn
//create flag for both players turns
//when that player takes their turn, turn the flag to false
//do the same for other player
