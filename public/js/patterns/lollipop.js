define(function(){
	return function(){

	paper.tool.on('mousemove',function(event){
    lollipop(num(20)+30,10,event);

  });
  paper.tool.minDistance = 30
  var rotateNum = 0;
  var circle,stick,rect;
	paper.tool.on('mousedown',function(event){
    /*size = num(20)+30
    extra = 10;
    stick = new paper.Path([event.point,[event.point.x,event.point.y+200]])
    stick.strokeColor = prettyRaCo();
    stick.strokeWidth = 20;
    rect = new paper.Path.Rectangle(event.point.x-size-extra, event.point.y-size-extra,2*(size+extra),2*(size+extra))
    rect.fillColor = prettyRaCo();
    lolliAngle = rotateNum//num(360)-180
    rect.rotate(lolliAngle)
    stick.rotate(lolliAngle,event.point)
    circle = new paper.Path.Circle(event.point,size-10,size-10)
    circle.fillColor = prettyRaCo();
    group = new paper.Group([stick,rect,circle])
    console.dir(group)
    rotateNum++;*/
  });

	paper.tool.on('mouseup',function(event){
	   path = new paper.Path([event.point])
  });
	}

  paper.tool.on('onFrame',function(event){
  });

  function lollipop(size,extra,event){
    size = num(20)+30
    extra = 10;
    stick = new paper.Path([event.point,[event.point.x,event.point.y+200]])
    stick.strokeColor = prettyRaCo();
    stick.strokeWidth = 20;
    rect = new paper.Path.Rectangle(event.point.x-size-extra, event.point.y-size-extra,2*(size+extra),2*(size+extra))
    rect.fillColor = prettyRaCo();
    lolliAngle = event.count*5//rotateNum//num(360)-180
    rect.rotate(lolliAngle)
    stick.rotate(lolliAngle,event.point)
    circle = new paper.Path.Circle(event.point,size-10,size-10)
    circle.fillColor = prettyRaCo();
    group = new paper.Group([stick,rect,circle])
    return group
  }
});
