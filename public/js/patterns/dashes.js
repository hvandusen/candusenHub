var on = false;
define(function(){
	return function(){
    var path;
    paper.tool.on('mousedown',function(event){
      if(!on)
      {path = new paper.Path();
      path.strokeColor = prettyRaCo()
      path.strokeWidth = 10;
      path.dashArray = [10,10]}
      on = !on
    });
    paper.tool.on('mousemove',function(event){
        if(on)
        {
          path.add(event.point)
          path.smooth()
        }
      });

  }
});
