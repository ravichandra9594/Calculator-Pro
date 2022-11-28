$(document).ready(function(){
  $('.col-xs-1').click(function(){
    if ($(this).text().trim() !== '='){
      var text = $(this).text().toString()
      $('input:text').val(function(i, val){
        return val + text.trim();
      });
    }
  })
  $('.btn-warning').click(function(){
    $('input:text').val('');
  })
  $('#submit').click(function(){
    var expr = $('input').val();
    var res = eval(expr);
    $('input:text').val(res);
  })
  
});
