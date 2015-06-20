define(function(){
  return function(){
var circles = []
var girth = 2;
var pts = [0,0];
var click = false;
var edgeMaker = function(){
  return [new paper.Path({
    strokeColor:prettyRaCo(),
    strokeWidth:15
  }),new paper.Path({
    strokeColor:prettyRaCo(),
    strokeWidth:15
  })]
};
edges = edgeMaker();
var sizes =[15,10]//Math.random()*100+10,Math.random()*10]//[base,random factor]
paper.tool.minDistance = 1;
paper.tool.on('mousemove',function(event){
  if(click == true)
    circles.push(newCircle(event));
});
	paper.tool.on('mousedown',function(event){
	});

	paper.tool.on('mouseup',function(event){
    if(click == false){
  }
  else{
    pts = [0,0]
    edges = edgeMaker();
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
  if(ev.delta.getLength()>1)
  {
    vec.setAngle(vec.angle-45)
    bbb = [pt.x+vec.x*(sizes[0]+Math.random()*sizes[1]),pt.y+vec.y*(sizes[0]+Math.random()*sizes[1])]//[pt.x+ num(girth)-(num/2),pt.y+num(girth)-(num/2)]
    vec.setAngle(vec.angle+90)
  //pts[1] = [pt.x+ num(girth)-(num/2),pt.y+num(girth)-(num/2)]
    aaa = [pt.x+vec.x*(sizes[0]+Math.random()*sizes[1]),pt.y+vec.y*(sizes[0]+Math.random()*sizes[1])]
    if(pts[0] ==0 )
    p= new paper.Path({
    segments: [aaa,bbb],
    fillColor : prettyRaCo()
    });
    else
    p= new paper.Path({
    segments: [aaa,bbb,pts[0],pts[1]],
    fillColor : prettyRaCo()
  });

  pts[1] = p.segments[0]
  pts[0] = p.segments[1]
  edges[0].add(p.segments[0])
  edges[0].smooth()
  edges[1].add(p.segments[1])
  edges[1].smooth()
  }
  return p
}


	}
});
