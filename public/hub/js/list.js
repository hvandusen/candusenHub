$('document').ready(function(){
  var current = {
    w:window.innerWidth,
    h:window.innerHeight
  }
  $('.id').click(function(){
    v = parseInt($(this)[0].innerText);
    v = v+1;
    $(this)[0].innerText = v.toString();
    $.ajax({
      url : "/hub/approval/"+$(this)[0].id,
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
  window.onresize = function(e){
    checkImages();
};
$('.listImg').each(function(i){
  work = $('.listImg')[i]
  if(work.width>window.innerWidth*.8){
    work.width = work.width*.7
    work.height = work.height*.7
  }
});

  function checkImages(){
    dx = window.innerWidth/current.w
    dy = window.innerHeight/current.h
    current.w = window.innerWidth
    current.h = window.innerHeight
    $('.listImg').each(function(i){
      work = $('.listImg')[i]
      work.width = work.width*dx//window.innerWidth*.5 + (work.width/window.innerWidth)*window.innerWidth*.2
      work.height = work.height*dy//window.innerHeight*.5 +(work.height/window.innerHeight)*window.innerHeight*.2

    });

  }

});
