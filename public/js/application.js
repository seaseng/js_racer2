function checkWinner (player_id, current, finish) {
  if (current === finish){
    var winner = '';

    console.log("Win");
    if (player_id === 1){
      winner = user1_name;
      alert(user1_name + ' wins!!');
    }
    else{
      winner = user2_name;
      alert(user2_name + ' wins!!');
    }

    $('body').unbind('keyup');

    $.ajax({
      url: '/save_game',
      method: 'post',
      data: {game_id: game_id, winner: winner}
    });
  }
}

function update_player_position(player_id, player){
  var strip = $(player);
  var position = strip.find('.active');
  position.next('td').addClass('active');
  position.removeClass('active');

  var current_position_index = strip.find('td.active').index();
  var strip_length = strip.find('td').length;
  checkWinner(player_id, current_position_index, strip_length);
}

$(document).ready(function() {
  $('body').on('keyup', function(e) {
    var keypress = e.which;
    //player 1
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
