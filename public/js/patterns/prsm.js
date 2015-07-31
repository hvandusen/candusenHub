define(function(){
	return function(){

		var flash = false;
		var size = 900
		var variance = 10;
		var center = paper.project.view.bounds.center//new Point(screen.availWidth/2.3,screen.availHeight/2.3)
		var path,path2;
		//var group = new Group();
		var proPath,fill1,fill2;
		var corner;
		var numChoice = 7;
		//points from the center of screen minus size plus variance
		function ran(variance){
			return Math.random()*variance-(variance/2)
		}
		function color(){
			list = ['yellow','green','red','blue','orange','purple']
			return list[Math.floor(Math.random()*6)]
		}

		function baseShape(point){//make a rectangle,path rotates and makes path2
		 	path = new paper.Path(center);
		 	path2 = new paper.Path()
			//path2 = real path
			path.add(center)
			path.add([center.x+200,center.y])
			for(var i=0;i<numChoice;i++){
				num = Math.random()*90
				path.rotate(num)
				path2.add(path.segments[1])
				path.rotate(90-num)
			}
			path2.fillColor = prettyRaCo();
			path2.position = point;
			return path2;
		}

		function offShoot(path){
			corner = base.segments[Math.floor(Math.random()*numChoice)]
			offshoot = new paper.Path(corner)
			offshoot.add(path.bounds.center)
			offshoot.rotate(180,corner.point)
			return offshoot;

		}
		function draw(){
			paper.project.activeLayer.clear()
			group = new paper.Group()
			base = baseShape(new paper.Point(center))
			offshoot = offShoot(base)
			vector = new paper.Point([offshoot.segments[1].point.x-offshoot.segments[0].point.x,offshoot.segments[1].point.y-offshoot.segments[0].point.y]);
			_.each(base.segments,function(corner,i){
				console.dir([i,corner])
				addon = new paper.Point([corner.point.x+vector[0],corner.point.y+vector[1]])
						p = new paper.Path(corner.point)
						p.add(addon)
						//whatever the next point is..
						otherpt = base.segments[Math.abs((i-1)%base.segments.length)].point
						p.add(otherpt+vector)
						p.add(otherpt)
						p.fillColor = prettyRaCo()
						console.log(p.fillColor)
						group.children.push(p)
				//	}

			})
				group.scale(2.4)
		}

		paper.tool.on('mousedown',function(event){
			draw();

		});


}});
