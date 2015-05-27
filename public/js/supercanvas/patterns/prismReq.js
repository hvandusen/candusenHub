define(['prismReq'],function(){
	return function(){
		var size = 900
	  var variance = 10;
	  var center = new paper.Point(screen.availWidth/2,screen.availHeight/2)
	  console.dir(center)
	  //points from the center of screen minus size plus variance
	  function ran(variance){
	  	return Math.random()*variance-(variance/2)
	  }

	  function createShape(point){
	    var path = new paper.Path(center);
	    var path2 = new paper.Path();
	    path.add(new paper.Point(center+[200,0]))
	    var group = new paper.Group();
	    for(var i=0;i<4;i++){
	    	num = Math.random()*50
	    	path.rotate(num)
	    	path2.add(new paper.Point(path.segments[1].point))
	    	path.rotate(90-num)
	    }
	    path2.fillColor = 'red'//prettyRaCo()
	    group.children.push(path2)
	    // ok now random shape inscribed from cirlce

	    protrusion = Math.floor(Math.random()*4)
	    pointChoice = path2.segments[protrusion]
	    proPath = new paper.Path(pointChoice)
	    proPath.add(path2.bounds.center);
	    proPath.rotate(180+ran(50),pointChoice.point)
	    var vector;// = new paper.Point(proPath.segments[0].point-proPath.segments[1].point)
	    a = proPath.segments[0].point
	    b = proPath.segments[1].point
	    //vector = proPath.segments[0].point-proPath.segments[1].point
	    vector = add(a,b)
	    var fill1 = new paper.Path(proPath.segments)
	    num2 = ((protrusion+1)%4+1)-1
	    num3 = ((protrusion+3)%4)
	    fill1.add(path2.segments[num2].point.add(vector))
	    fill1.add(path2.segments[num2])
	    var fill2 = new paper.Path(proPath.segments)
	    fill2.add(path2.segments[num3].point.add(vector))
	    fill2.add(path2.segments[num3].point)
	    fill2.fillColor='yellow';
	    group.children.push(fill1)
	    group.children.push(fill2)
	    fill1.closed=true;
	    fill2.closed=true;
	    fill1.fillColor='blue';
	    group.position = [point.x,point.y]
	    group.scale(Math.random()*.3+.1)
	    	return group
	  }

	  function add(a,b){
	    return new paper.Point(b.x-a.x,b.y-a.y)
	  }
	var current;
	  paper.tool.on('mousedown',function(event){
	  	current = createShape(new paper.Point(event.point))
	      //new paper.Path.Rectangle(event.point,100,100).fillColor = 'red'
	  });

}});
