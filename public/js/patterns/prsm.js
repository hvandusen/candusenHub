define(function(){
	return function(){

		var size = 900
		var variance = 10;
		var center = new paper.Point(screen.availWidth/2,screen.availHeight/2)
		//points from the center of screen minus size plus variance
		function ran(variance){
			return Math.random()*variance-(variance/2)
		}

		function createShape(point){
			var path = new paper.Path(center);
			var path2 = new paper.Path();
			path.add([center.x+200,center.y])
			var group = new paper.Group();
			for(var i=0;i<4;i++){
				numb = Math.random()*50
				path.rotate(numb)
				path2.add(path.segments[1])
				path.rotate(90-numb)
			}
			path2.fillColor = prettyRaCo()
			group.children.push(path2)
		// ok now random shape inscribed from cirlce

			protrusion = Math.floor(Math.random()*4)
			pointChoice = path2.segments[protrusion]
			proPath = new paper.Path(pointChoice)
			proPath.add(path2.bounds.center)
			proPath.rotate(180+ran(50),pointChoice.point)
			//proPath.strokeColor = 'red'
			vector = new paper.Point(combine(proPath.segments[0].point,proPath.segments[1].point))
			console.dir(vector)
			var fill1 = new paper.Path(proPath.segments)
			num2 = ((protrusion+1)%4+1)-1
			num3 = ((protrusion+3)%4)
			p = new paper.Point(addup(path2.segments[num2].point,vector))
			fill1.add(new paper.Point(combine(path2.segments[num2].point,vector)))
			fill1.add(path2.segments[num2])
			var fill2 = new paper.Path(proPath.segments)
			fill2.add(new paper.Point(combine(path2.segments[num3].point,vector)));
			fill2.add(path2.segments[num3])
			fill2.fillColor=prettyRaCo();
			group.children.push(fill1)
			group.children.push(fill2)
			fill1.closed=true;
			fill2.closed=true;
			fill1.fillColor=prettyRaCo()
			group.position = [point.x,point.y]
			group.scale(Math.random()+.5)
				return group
		}

		paper.tool.on('mousedown',function(){
			console.dir(createShape(new paper.Point([event.offsetX,event.offsetY])))
		})


}});
