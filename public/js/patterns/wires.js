define(function(){
	return function(){

    var path = new paper.Path.Line([]);
    var count = 1;
    var list = []
    var direction = true;
    var sensitivity = [1,1]
    var ready = false;
    paper.tool.distanceThreshold = 1
    path.strokeWidth = 4;
    path.strokeColor = prettyRaCo();
    path.strokeStyle = 'dotted';
    paper.view.onFrame = function(e){


    };


    paper.tool.on('mousemove',function(event){
      if(ready){
        a = combine(event.delta,averageDelta(event.delta))
        if(path.hitTest(event.point,{stroke:true}))
          {
            new paper.Path.Circle(event.point,10).fillColor = prettyRaCo();
          }

				  path.add(event.point)
        }
		});

    paper.tool.on('mousedown',function(event){
			path = new paper.Path.Line([]);
			path.strokeWidth = 4;
	    path.strokeColor = prettyRaCo();
	    path.strokeStyle = 'dotted';
      ready = !ready
    });
    var deltas = []

    function averageDelta(delta){
      if(deltas.length<5)
        deltas.push(delta)
      else
      {
        deltas = deltas.slice(1)
      deltas[4] = delta
      }
      return (function(){
        var av = [0,0];
        for(d in deltas){
          av[0] += deltas[d].x
          av[1] += deltas[d].y
        }
        av[0] = av[0]/5
        av[1] = av[1]/5
        return {x:av[0],y:av[1]}
      }())
    }
  };
});
