define(function(){
  return function(){
var circles = []
var sizze = 50;
var pts = [0,0];
paper.tool.minDistance = 21;
paper.tool.on('mousemove',function(event){
    circles.push(newCircle(event.point))
});

	paper.tool.on('mousedown',function(event){
    p = new paper.Path.Circle({
      center: event.point,
      radius: 10,
      fillColor:prettyRaCo()
    });
    for(c in circles){
      //circles[c].hitTest(p.bounds.center)
    }
    circles.push(p)

	});

	paper.tool.on('mouseup',function(event){

	});

	paper.view.onFrame = function(ev){

	};
function check(path){
  for(c in circles){
    if(circles[c].hitTest(path.bounds.center))
      {
        return false;
        }
  }
  return true;
}

function newCircle(pt){
  if(!pts[0])
  {pts[0] = [pt.x+ num(sizze)-(num/2),pt.y+num(sizze)-(num/2)]
  pts[1] = [pt.x+ num(sizze)-(num/2),pt.y+num(sizze)-(num/2)]
}
  p= new paper.Path({
    segments: [
      [pt.x+ sizze,pt.y+Math.random()*sizze],
      [pt.x+ Math.random()*sizze,pt.y+sizze],
      pts[0],
      pts[1]
    ],
    fillColor : prettyRaCo()
  })
  p.smooth()
  p.simplify()

  pts[1] = p.segments[0]
  pts[0] = p.segments[1]
  /*while(check(p)==false){
    p.position = [p.position.x + (num(50)-25), p.position.y+ (num(50)-25)]
  }*/
  p.fillColor = prettyRaCo();
  return p
}


	}
});
