
//check document is ready//

const winnerScreen = function () {
  $('#win').addClass('winOverlay');
  $('.winnertext').css("display", "block");
}

$(document).ready(function () {
  console.log("document ready");

// $('#playerX').on('click', function () {
//   $('#playerX').css ("background-color", "#f60a84");
//   console.log('You are player 1');
//
// })
//
// $('#playerO').on('click', function () {
//   $('#playerO').css ("background-color", "#f6580a");
//   console.log('You are player 2');
// })



$('#box1').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(0,0);
    $('#box1').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(0,0);
  $('#box2').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

////////////////////////////////////////////////

$('#box2').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(0,1);
    $('#box2').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(0,1);
  $('#box2').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

//////////////////////////////////////////////

$('#box3').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
if (player1Turn) {
    player1(0,2);
    $('#box3').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(0,2);
  $('#box3').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

////////////////////////////////////////////

$('#box4').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(1,0);
    $('#box4').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(1,0);
  $('#box4').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

///////////////////////////////////////////

$('#box5').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(1,1);
    $('#box5').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(1,1);
  $('#box5').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

//////////////////////////////////////////

$('#box6').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(1,2);
    $('#box6').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(1,2);
  $('#box6').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

/////////////////////////////////////////

$('#box7').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(2,0);
    $('#box7').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(2,0);
  $('#box7').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

////////////////////////////////////////

$('#box8').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(2,1);
    $('#box8').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(2,1);
  $('#box8').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

////////////////////////////////////////

$('#box9').on('click', function () {
  // if (win) {
  //   $('#win').addClass('winOverlay');
  //   $('.winnertext').css("display", "block");
  // }
  if (player1Turn) {
    player1(2,2);
    $('#box9').append('<i class="zmdi zmdi-pizza zmdi-hc-5x"></i>');
  }
else {
  player2(2,2);
  $('#box9').append('<i class="zmdi zmdi-face zmdi-hc-5x"></i>');
}
})

});

//if statement whose turn it is
// if statement can pass in function with array index

// $('#checking-deposit').on ('click', function () {
//     const amount = $('#checking-amount').val();
//     accounts.checkingDeposit ( amount );
//     render();


//set up a click on which player you want to be, and then clicking on the square inputs an X OR I'll need to account for different letters and numbers being put in

//create jQuery file that interacts with the DOM to input what the users enter
//link to javascript file to determine who has won

//AI basic level computer knows its the computers turn and randomly picks a spot
