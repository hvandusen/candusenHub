define(function(){
	return function(){
var ready = false;
	paper.tool.on('mousemove',function(event){
		if(ready)
    lollipop(num(3)+17,0,event);
  });
  //paper.tool.minDistance = 1
  var rotateNum = 0;
  var circle,stick,rect;
	paper.tool.on('mousedown',function(event){
		ready = !ready
  });



  paper.tool.on('onFrame',function(event){
  });

  function lollipop(size,extra,event){
    stick = new paper.Path([event.point,[event.point.x,event.point.y+num(40)+40]])
    stick.strokeColor = prettyRaCo();
    stick.strokeWidth = 10;
    rect = new paper.Path.Rectangle(event.point.x-size-extra, event.point.y-size-extra,2*(size+extra),2*(size+extra))
    rect.fillColor = prettyRaCo();
    lolliAngle = event.count*2//rotateNum//num(360)-180
    rect.rotate(lolliAngle)
    stick.rotate(lolliAngle,event.point)
    circle = new paper.Path.Circle(event.point,size-10,size-10)
    circle.fillColor = prettyRaCo();
    group = new paper.Group([stick,rect,circle])
    return group
  }

}
});
