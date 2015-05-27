define(function(){
	return function(){

    var path;

    width = 100//d.getHours()+1*15 +1
    var move = false;
    //width = 20//Math.random()*600+200;
    height =  10
    rot = Math.random()
    limit = 5000;
    var x =0;
    var shape = null;
    var currentColor = 'red';

    function makeShapes(point){
    	p =  new paper.Shape.Rectangle([point.x,point.y],[100,10]);
    	p.fillColor = currentColor;
    	return p;
    }

    paper.tool.on('mousemove',function(event){
    	var items = paper.project.activeLayer.children.length;
      if(!move)
      makeShapes(event.point);
      if(items>limit)
        {paper.project.activeLayer.children.pop(); }
      for(var i = 0;i<items;i++)
      {
        temp = paper.project.activeLayer.children[i];
    	temp.size.height = height;
        temp.borderRadius = 1;

        temp.rotate(event.delta.x/3)
        if(move)
        {
    			temp.position.x += event.delta.x;
    			//temp.position.y += event.delta.y;
    			}
        else
        temp.fillColor.hue += Math.random();
        x++;
      }
    });
    paper.tool.on('mousedown',function(ev){
      move = !move;
    });x
      };
    });
