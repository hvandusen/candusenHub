
$('document').ready(function(){
  $('.id').click(function(){
    $.ajax({
      url : "/approval/"+$(this)[0].id,
      type: "POST",
      data : {},
      success: function(data, textStatus, jqXHR)
        {
          //data - response from server
        },
      error: function (jqXHR, textStatus, errorThrown)
      {
      }
    });
  });
});

/*console.log($(this)[0].id)
$.ajax({
  url : "/approval/"+$(this)[0].id,
  type: "POST",
  data : {},
  success: function(data, textStatus, jqXHR)
    {
      //data - response from server
    },
  error: function (jqXHR, textStatus, errorThrown)
  {
  }*/
