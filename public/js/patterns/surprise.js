define(function(){
	return function(){
var path = new paper.Path();
path.stroekWidth = 3;
var pos = [500,500];
//path = new paper.Path([0,0])
var down = false;
var set = false;
var dash= [Math.random()*100,Math.random()*300];
var sw= Math.random()*20
var pd = Math.random()*40+5

	paper.tool.on('mousemove',function(event){
			if(down)
			path.add(event.point)
			pos = event.point
	});

	paper.tool.on('mousedown',function(event){
    path = new paper.Path(event.point)//Shape.Ellipse(event.point);
		path.strokeColor = prettyRaCo()
		path.strokeWidth = Math.random()*3+1
		path.moveStyle = Math.floor(Math.random()*3);
		pd = Math.random()*40+5
		pos = event.point
		down = !down
		set = true;
	});

	paper.tool.on('mouseup',function(event){
		//paper.project.activeLayer.clear()
		down = !down;
	});


	var moveStyles = [
		function (count){return -1-Math.abs(20*Math.cos(count/1000))},
		function (count){return 30*Math.cos(count/100)},
		function (count){return 1+Math.abs(20*Math.cos(count/100))},
		function (count){return Math.abs(5+10*Math.cos(count/100))},

		]
//function (count){return 100*Math.cos(count/100)},
	paper.view.onFrame = function(ev){
		c = path.bounds.center
		if(set){
			count = ev.count
			set = false;
		}
		if(down)
		{
			path.rotate(moveStyles[path.moveStyle](ev.count-count),c)
			poss = path.position
			path.smooth()
		}
	};

	}
});
