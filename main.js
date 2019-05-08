var count1 = 0;

$('.square.red').click(function(){
  $(this).css('background','red');
  count1++
  $('#counter1').html('Square red: ' + count1)
});

var count2 = 0;

$('.square').click(function(){
  $(this).addClass('green');
  count2++
  $('#counter2').html('square green: ' + count2)
});
