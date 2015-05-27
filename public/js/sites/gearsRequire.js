
define(['gearsRequire'],function(){
	return 'yo';
});/*
window.onload = function() {
	// Create an empty project and a view for the canvas
	//you need to use onload. onFrame accessible thru paper.view.onframe
	//other mouse functions thru paper.tool.on('mousedown',function(ev){});
	var canvas = document.getElementById('myCanvas');
	paper.setup(canvas)
	var path;
	var gears = [];
	var down = false;
	var count = 0;

	paper.tool.on('mousedown',function(ev){
		path = new paper.Path();
		path.strokeColor = prettyRaCo();
		path.strokeWidth = 6;
	});

	paper.tool.on('mouseup',function(ev){
		if(path.segments.length>0)
		gear(path.segments)
		path.smooth();
	});

	paper.tool.on('mousedrag',function(ev){
		path.add(ev.point);
	});

	paper.view.onFrame = function(ev){
			for(var i = 0;i<gears.length;i++){
				gears[i].loc.position = gears[i].points[ev.count%gears[i].len].point;
			}
	}

	function gear(gearPath){
		var circle = new paper.Path.Circle(new paper.Point(0,0), new paper.Size(20,20));
		circle.fillColor = prettyRaCo();
		gears.push({
			loc: circle,
			points: gearPath,
			len: gearPath.length
		});
	}


}
*/
