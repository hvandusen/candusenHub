define(function(){
  return function(){
var circles = []
var girth = 10;
var pts = [0,0];
var click = false;
paper.tool.minDistance = 21;
paper.tool.on('mousemove',function(event){
  if(click == true)
    circles.push(newCircle(event))

});

	paper.tool.on('mousedown',function(event){


	});

	paper.tool.on('mouseup',function(event){
    if(click == false){
    p = new paper.Path.Circle({
      center: event.point,
      radius: 10,
      fillColor:prettyRaCo()
    });
    for(c in circles){
    }
    circles.push(p)
  }
  else{
    pts = [0,0]
  }
  click = !click;

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

function newCircle(ev){
  pt = ev.point
  vec = ev.delta.normalize();
  girth = 10+ Math.abs(ev.delta.x)

  if(!pts[0])
  {
    vec.setAngle(vec.angle-45)
    pts[0] = [pt.x+vec.x*(10+Math.random()*20),pt.y+vec.y*(10+Math.random()*20)]//[pt.x+ num(girth)-(num/2),pt.y+num(girth)-(num/2)]
    vec.setAngle(vec.angle+90)
  //pts[1] = [pt.x+ num(girth)-(num/2),pt.y+num(girth)-(num/2)]
  pts[1] = [pt.x+vec.x*(30+Math.random()*20),pt.y+vec.y*(30+Math.random()*20)]
}
  p= new paper.Path({
    segments: [
      [pt.x+ Math.random()*girth,pt.y+girth],
      [pt.x+ girth,pt.y+Math.random()*girth],
      pts[0],
      pts[1]
    ],
    fillColor : prettyRaCo()
  })
  //p.smooth()

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
