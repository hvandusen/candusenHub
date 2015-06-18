define(function(){
  return function(){
  var size = 100
  paper.tool.on('mousemove',function(event){
    shape(event.point)
  });

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
