
//check document is ready//

const resetGame = function () {
  $('.resetButton').on('click', function () {
  location.reload();
  })
}

const winner1Screen = function () {
  $('#win').addClass('winOverlay');
  $('.winner1text').css("display", "inline-block");
  $('.resetButton').css("display", "inline-block");
  resetGame();
}

const winner2Screen = function () {
  $('#win').addClass('winOverlay');
  $('.winner2text').css("display", "inline-block");
  $('.resetButton').css("display", "inline-block");
  resetGame();
}

const drawScreen = function () {
  $('#win').addClass('winOverlay');
  $('.drawtext').css("display", "inline-block");
  $('.resetButton').css("display", "inline-block");
  resetGame();
}


$(document).ready(function () {
  console.log("document ready");

$('#playerX').on('click', function () {
  if (isRunning === false) {
  $('#playerX').css ("background-color", "#f60a84");
  player2Turn = false;
  isRunning = true;
  console.log('You are player 1');
  }
})

$('#playerO').on('click', function () {
  if (isRunning === false) {
  $('#playerO').css ("background-color", "#f6580a");
  player1Turn = false;
  isRunning = true;
  console.log('You are player 2');
  }
})



$('#box1').on('click', function () {
  if (player1Turn && gameBoard[0][0] === '_') {
    player1(0,0);
    $('#box1').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box1').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[0][0] === '_'){
  player2(0,0);
  $('#box1').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box1').css("background-color", "#f6580a");
}
})

////////////////////////////////////////////////

$('#box2').on('click', function () {
  if (player1Turn && gameBoard[0][1] === '_') {
    player1(0,1);
    $('#box2').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box2').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[0][1] === '_') {
  player2(0,1);
  $('#box2').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box2').css("background-color", "#f6580a");
}
})

//////////////////////////////////////////////

$('#box3').on('click', function () {
if (player1Turn && gameBoard[0][2] === '_') {
    player1(0,2);
    $('#box3').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box3').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[0][2] === '_') {
  player2(0,2);
  $('#box3').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box3').css("background-color", "#f6580a");
}
})

////////////////////////////////////////////

$('#box4').on('click', function () {
  if (player1Turn && gameBoard[1][0] === '_') {
    player1(1,0);
    $('#box4').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box4').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[1][0] === '_') {
  player2(1,0);
  $('#box4').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box4').css("background-color", "#f6580a");
}
})

///////////////////////////////////////////

$('#box5').on('click', function () {
  if (player1Turn && gameBoard[1][1] === '_') {
    player1(1,1);
    $('#box5').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box5').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[1][1] === '_') {
  player2(1,1);
  $('#box5').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box5').css("background-color", "#f6580a");
}
})

//////////////////////////////////////////

$('#box6').on('click', function () {
  if (player1Turn && gameBoard[1][2] === '_') {
    player1(1,2);
    $('#box6').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box6').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[1][2] === '_') {
  player2(1,2);
  $('#box6').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box6').css("background-color", "#f6580a");
}
})

/////////////////////////////////////////

$('#box7').on('click', function () {
  if (player1Turn && gameBoard[2][0] === '_') {
    player1(2,0);
    $('#box7').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box7').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[2][0] === '_') {
  player2(2,0);
  $('#box7').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box7').css("background-color", "#f6580a");
}
})

////////////////////////////////////////

$('#box8').on('click', function () {
  if (player1Turn && gameBoard[2][1] === '_') {
    player1(2,1);
    $('#box8').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box8').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[2][1] === '_') {
  player2(2,1);
  $('#box8').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box8').css("background-color", "#f6580a");
}
})

////////////////////////////////////////

$('#box9').on('click', function () {
  if (player1Turn && gameBoard[2][2] === '_') {
    player1(2,2);
    $('#box9').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
    $('#box9').css("background-color", "#f60a84");
  }
else if (player2Turn && gameBoard[2][2] === '_') {
  player2(2,2);
  $('#box9').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
  $('#box9').css("background-color", "#f6580a");
}
})

});


//set up a click on which player you want to be, and then clicking on the square inputs an X OR I'll need to account for different letters and numbers being put in

//AI basic level computer knows its the computers turn and randomly picks a spot
