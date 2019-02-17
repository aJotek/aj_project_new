

$('#passion').on('mouseover', function passionout() {
    if ($('#left').css('opacity') == 1){
        $('#right').css('opacity', 1);
        $('#left').css('opacity', 0);
        }
  });
  
  $('#passion').on('mouseout', function humanin() {
    if ($('#right').css('opacity') == 1){
        $('#stepin').css('opacity', 1);
        }
  });
  
  