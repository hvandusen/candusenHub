define(function(){
	return function(){

    var path = new paper.Path();
    var count = 1;
		var clicked = false;
    paper.tool.distanceThreshold = 1
    path.strokeWidth = 5;
    randomNumber = Math.floor(Math.random()*255)
    path.strokeColor = {
		gradient:{
			stops:[prettyRaCo2(randomNumber),
        prettyRaCo2(randomNumber+85),
        prettyRaCo2(randomNumber+170)],
			},
			origin: [0,Math.random()*screen.availHeight],
			destination: [screen.availWidth,Math.random()*screen.availHeight]
		};

    paper.tool.on('mousemove',function(event){
			if(clicked)
      	if(num(2) === 0){
				  path.add(event.point.x+Math.sin(count/10)*20,event.point.y+Math.cos(count/10)*20)
					path.smooth({tolerance:.1});
					if(path.segments.length>50)
					path.segments.splice(num(path.segments.length-1),1)
				}
    });

    paper.tool.on('mousedown',function(event){
			clicked = !clicked;
			if(!clicked){
				path = new paper.Path();
				path.strokeWidth = 5;
			}
			for(var i = 0;i<5;i++){
				path.segments.splice(num(path.segments.length),1)
			}

			path.simplify({tolerance:.1})
      path.strokeColor = {
  		gradient:{
  			stops:[prettyRaCo(),prettyRaCo(),prettyRaCo()],
  			},
  			origin: [-100,Math.random()*screen.availHeight],
  			destination: [screen.availWidth,Math.random()*screen.availHeight]
  		};
    });
  };
});
