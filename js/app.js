// wait for the DOM to finish loading
$(document).ready(function() {
  var playerX = "It's the first players turn";
  var playerO = "It's the second players turn";
  var playerXmark = "X";
  var playerOmark = "O";
  var Xarray = [];
  var Oarray = [];
  var wins = [0, 1, 2]|| [3, 4, 5]|| [6, 7, 8]|| [0, 3, 6]|| [1, 4, 7]|| [2, 5, 8]|| [0, 4, 8]|| [6, 4, 2];
  var moves = 0;

function winner (){
  if(Xarray===wins){
    alert('Player X is the winner!!!');
  }
  else if(Oarray===wins){
    alert('Player O is the winner!!!');
  }
}

function play(){
 for(var i = 0; i < 9;i++){
    if(i % 2 === 0){
      moves++;
      Xarray.push($(''));
      winner();
    }
    else{
      moves++;
      Oarray.push($(''));
      winner();
    }
  }

// create function that alternates between x and o
$('.turn').on('focus',play);
//create an event listener that highlights boxes that are being hovered over

//create an event listener that allows player to mark an empty box
$('#board').on('click','row',function(){
  $(this).closest('.box').append('').text(next().val());;
// create a flow that doesn't let user click on used box.

// users should be able to click a reset button.
$('.button').on('click','.glyphicon',function() {
  $('#board').append('.box').text('');
  $('.button').animate({ "left": "+=50px" }, "slow" );

});
$( ".button" ).on('click','.glyphicon',function(){
  $(this).animate({ "left": "-=50px" }, "slow" );
  play();
});
$('.button').on('mouseenter','.glyphicon',function(){
  $(this).addClass('highlight');
});
$('.button').on('mouseleave','.glyphicon',function(){
  $(this).removeClass('highlight');
});

// extra display an image that displays which players turn it is.

// display a message on the marks the winning player

// create a function that checks for winners

// create a function that arrives at tie if board fills up

// display seperate colors for X and 0

// use event delegation
});
