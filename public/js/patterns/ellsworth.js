var path;
var depth = 3;
var shapes = []
count = 0
var sizes;
define(function(){
	return function(){
		var p = new paper.Point(0,0);
		var s = new paper.Size(paper.view.size.width/3,paper.view.size.height/2);
		sizes = [paper.view.size.width/3,paper.view.size.height/2]


	 shapes.push(new paper.Shape.Rectangle(p,s));
	 p = new paper.Point(s.width,0)
	 shapes.push(new paper.Shape.Rectangle(p,s));
	p = new paper.Point(s.width*2,0)
	 shapes.push(new paper.Shape.Rectangle(p,s));
	p = new paper.Point(0,s.height)
	 shapes.push(new paper.Shape.Rectangle(p,s));
	p = new paper.Point(s.width,s.height)
	 shapes.push(new paper.Shape.Rectangle(p,s));
	p = new paper.Point(s.width,2*s.height)
	 shapes.push(new paper.Shape.Rectangle(p,s));

function drawShape(point){
   path = new paper.Path();
	for(var i = 0;i<6;i++){
		offset = {
			x: Math.random()*100+i*100,
			y: 0
		}
		if(i<3)
		{
			offset = {
				x: Math.random()*100+(5-i)*100,
				y: 100
			}
		}
	path.add(new paper.Point(offset.x,offset.y))
	}
	path.fillColor = prettyRaCo()
	console.dir(point)
	path.scale(.6)
  	temp = num(5);
  	if(temp ==0)
  		path.removeSegment(num(6));
  	if(temp ==1)
  	{
     path.removeSegment(num(6));
     path.removeSegment(num(5));
  	}
  	if(temp ==2)
    {
     path.removeSegment(num(6));
		path.removeSegment(num(5));
		path.removeSegment(num(4));
  }
  path.closed = true;

	path.rotate(num(75))
	path.position = point
  path.smooth();
  return path;
console.log('hi')
  }
	console.dir(num)
function makePoint(box){
	loc = box.bounds;
	console.dir([num(loc._width)+loc._x,num(loc._height)+loc._y])
	path.add(new paper.Point(num(loc._width)+loc._x,num(loc._height)+loc._y));

}
paper.tool.on('mousedown',function(event){
	drawShape(event.point);
});


}
});
