function checkWinner (player_id, current, finish) {
  if (current === finish){
    alert("Player " + player_id + " Wins!");
    $('body').unbind('keyup');
  }
}

function update_player_position(player_id, player){
  var strip = $(player);
  var position = strip.find('.active');
  position.next('td').addClass('active');
  position.removeClass('active');

  var current_position_index = strip.find('td.active').index();
  console.log("current position: " + current_position_index);
  var strip_length = strip.find('td').length;
  console.log("Strip Length: " + strip_length);
  checkWinner(player_id, current_position_index, strip_length);
}

$(document).ready(function() {
  $('body').on('keyup', function(e) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
    var keypress = e.which;
    //player 1
    // console.log(keypress);
    if (keypress === "Q".charCodeAt(0)){
      update_player_position(1, "#player1_strip");

    }
    //player 2
    else if (keypress === "P".charCodeAt(0)){
      update_player_position(2, "#player2_strip");
    }
    return;
  });
});
