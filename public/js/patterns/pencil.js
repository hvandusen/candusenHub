define(function(){
	return function(){

    var path = new paper.Path();
    var count = 1;
    paper.tool.distanceThreshold = 1
    path.strokeWidth = 5;
    path.strokeStyle = 'dotted';
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
      if(num(2) === 0){
					//path.add([event.point.x+num(60)-30,event.point.y+num(60)-30]);
				  path.add(event.point.x+Math.sin(count/10)*20,event.point.y+Math.cos(count/10)*20)
          //path.smooth();
		}
    });

    paper.tool.on('mousedown',function(event){
      //path = new paper.Path()
			for(var i = 0;i<10;i++){
				path.segments.splice(num(path.segments.length),3)
			}
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
