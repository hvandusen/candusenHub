define(function(){
  return function(){
  var size = 100;
  var a;
  var down = false;
  paper.tool.on('mousemove',function(event){
    if(down)
    a = shape(event.point)
    console.dir(a.area)
  });

  paper.tool.on('mousedown',function(event){
    down = !down
  });
paper.tool.minDistance = 70;
  function shape(point){
    return new paper.Path({
      segments: [
        [Math.random()*size, Math.random()*size],
        [Math.random()*size+size, Math.random()*size],
        [Math.random()*size+size, Math.random()*size+size],
        [Math.random()*size, Math.random()*size+size]
      ],
      fillColor: prettyRaCo(),
      position: point
  }).scale(.6)

}
  }
});
