$(function() {


  });

function storegame(wl){
  var id = $('#id').text();
  var token = $('input[name=authenticity_token]').val();
  $.ajax({
      dataType: 'json',
      type: "post",
      url: "/record",
      data: {id:id, winloss:wl,  authenticity_token:token}
    }).done(display_end_game_banner);
    return false
}

function display_end_game_banner(output){
  alert("Saved!");
}