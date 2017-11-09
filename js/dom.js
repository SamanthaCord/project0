
// when reset button is clicked reload the page

const resetGame = function () {
  $('.resetButton').on('click', function () {
  location.reload();
  })
}

// pizza winner screen function displays winning titles, uses local storage to add to total wins for that player. Display total wins on screen

const winner1Screen = function () {
  $('#win').addClass('winOverlay');
  $('.winner1text').css("display", "inline-block");
  $('.resetButton').css("display", "inline-block");
  if (localStorage.winner1Screen) {
    localStorage.winner1Screen = Number(localStorage.winner1Screen) + 1;
} else {
    localStorage.winner1Screen = 1;
}
$('#resultPizza').css("display", "inline-block");
document.getElementById("resultPizza").innerHTML = "Total Wins: " +
localStorage.winner1Screen;
  resetGame();
}

// face winner screen function displays winning titles, uses local storage to add to total wins for that player. Display total wins on screen

const winner2Screen = function () {
  $('#win').addClass('winOverlay');
  $('.winner2text').css("display", "inline-block");
  $('.resetButton').css("display", "inline-block");
  if (localStorage.winner2Screen) {
    localStorage.winner2Screen = Number(localStorage.winner2Screen) + 1;
} else {
    localStorage.winner2Screen = 1;
}
$('#resultFace').css("display", "inline-block");
document.getElementById("resultFace").innerHTML = "Total Wins: " +
localStorage.winner2Screen;
  resetGame();
}

// draw screen titles function. Displays titles on screen when function is called

const drawScreen = function () {
  $('#win').addClass('winOverlay');
  $('.drawtext').css("display", "inline-block");
  $('.resetButton').css("display", "inline-block");
  resetGame();
}

//check document is ready//

$(document).ready(function () {
  console.log("document ready");

$('#playerX').on('click', function () { //if pizza icon is clicked from pick player
  if (isRunning === false) {            //and game hasnt started yet
  $('#playerX').css ("background-color", "#f60a84");  //turn background-color for pick player button on
  player2Turn = false;                  //make it NOT player 2's turn so that pizza icon will show in first square clicked
  isRunning = true;                     //indicate game is now running
  //console.log('You are player 1');
  }
})

$('#playerO').on('click', function () {   //if face icon is clicked from pick player
  if (isRunning === false) {              //and game hasnt started yet
  $('#playerO').css ("background-color", "#f6580a");    //turn background-color for pick player button on
  player1Turn = false;                    //make it NOT player 1's turn so that face icon will show in first square clicked
  isRunning = true;                       //indicate game is now running
  // console.log('You are player 2');
  }
})

///////////////Game functionality for each square clicked below./////////////////////
// on square click check if its player 1's turn sqaure is 'empty' (hasn't been clicked)
// if conditions match, run player 1 javascript function and add that players icon and background color to the current square.
// Else check if its player 2's turn and do the same as above.
////////////////// Repeat for each square/////////////////////////

//////////////////////SQUARE 1//////////////////////////

$('#box1').on('click', function () {
  if (player1Turn && gameBoard[0][0] === '_') {
    player1(0,0);
    $('#box1').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box1').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[0][0] === '_'){
  player2(0,0);
  $('#box1').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box1').css("background-color", "#f6580a");
  isRunning = true;
}
})

//////////////////////SQUARE 2//////////////////////////

$('#box2').on('click', function () {
  if (player1Turn && gameBoard[0][1] === '_') {
    player1(0,1);
    $('#box2').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box2').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[0][1] === '_') {
  player2(0,1);
  $('#box2').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box2').css("background-color", "#f6580a");
  isRunning = true;
}
})
//////////////////////SQUARE 3//////////////////////////

$('#box3').on('click', function () {
if (player1Turn && gameBoard[0][2] === '_') {
    player1(0,2);
    $('#box3').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box3').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[0][2] === '_') {
  player2(0,2);
  $('#box3').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box3').css("background-color", "#f6580a");
  isRunning = true;
}
})

//////////////////////SQUARE 4//////////////////////////

$('#box4').on('click', function () {
  if (player1Turn && gameBoard[1][0] === '_') {
    player1(1,0);
    $('#box4').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box4').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[1][0] === '_') {
  player2(1,0);
  $('#box4').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box4').css("background-color", "#f6580a");
  isRunning = true;
}
})

//////////////////////SQUARE 5//////////////////////////

$('#box5').on('click', function () {
  if (player1Turn && gameBoard[1][1] === '_') {
    player1(1,1);
    $('#box5').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box5').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[1][1] === '_') {
  player2(1,1);
  $('#box5').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box5').css("background-color", "#f6580a");
  isRunning = true;
}
})

//////////////////////SQUARE 6//////////////////////////

$('#box6').on('click', function () {
  if (player1Turn && gameBoard[1][2] === '_') {
    player1(1,2);
    $('#box6').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box6').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[1][2] === '_') {
  player2(1,2);
  $('#box6').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box6').css("background-color", "#f6580a");
  isRunning = true;
}
})

//////////////////////SQUARE 7//////////////////////////

$('#box7').on('click', function () {
  if (player1Turn && gameBoard[2][0] === '_') {
    player1(2,0);
    $('#box7').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box7').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[2][0] === '_') {
  player2(2,0);
  $('#box7').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box7').css("background-color", "#f6580a");
  isRunning = true;
}
})

//////////////////////SQUARE 8//////////////////////////

$('#box8').on('click', function () {
  if (player1Turn && gameBoard[2][1] === '_') {
    player1(2,1);
    $('#box8').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box8').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[2][1] === '_') {
  player2(2,1);
  $('#box8').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box8').css("background-color", "#f6580a");
  isRunning = true;
}
})

//////////////////////SQUARE 9//////////////////////////

$('#box9').on('click', function () {
  if (player1Turn && gameBoard[2][2] === '_') {
    player1(2,2);
    $('#box9').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box9').css("background-color", "#f60a84");
    isRunning = true;
  }
else if (player2Turn && gameBoard[2][2] === '_') {
  player2(2,2);
  $('#box9').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box9').css("background-color", "#f6580a");
  isRunning = true;
}
})

});
