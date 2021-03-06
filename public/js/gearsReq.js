define(function(){
	return function(){
		var path;
    var gears = [];
  	//var gears = [];
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
  	};

  	function gear(gearPath){
  		var circle = new paper.Path.Circle(new paper.Point(0,0), new paper.Size(20,20));
  		circle.fillColor = prettyRaCo();
  		gears.push({
  			loc: circle,
  			points: gearPath,
  			len: gearPath.length
  		});
  	}
}});
