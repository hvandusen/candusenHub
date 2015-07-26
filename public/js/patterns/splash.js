define(function(){
	return function(){

var a = new paper.Path.Circle(0,0,2);
var splash = 100;
var add = false;
var colors = [];
for(var i = 0;i<3;i++){
	a = new paper.Path.Circle(0,0,Math.random()*3+1);
	a.fillColor = prettyRaCo();
	colors.push(new paper.Symbol(a))
}
console.dir(colors)
	paper.tool.on('mousemove',function(event){
		/*if(add)
				{
				randomPt = [event.point.x+(Math.random()*splash-splash/2),event.point.y+(Math.random()*splash-splash/2)]
				colors[event.count%3].place(randomPt)
			}*/
			mv = event
	});

	paper.tool.on('mousedown',function(event){
		add = !add;

	});

	paper.tool.on('mouseup',function(event){
		colors = [];
		for(var i = 0;i<3;i++){
			a = new paper.Path.Circle(0,0,Math.random()*3+1);
			a.fillColor = prettyRaCo();
			colors.push(new paper.Symbol(a))
		}
	});
	var mv = null;
	paper.view.onFrame = function(ev){
		if(add){
		if(mv != null){
			evv = mv;
			for(i in colors){
				randomPt = [evv.point.x+(Math.random()*splash-splash/2),evv.point.y+(Math.random()*splash-splash/2)]
				colors[i].place(randomPt)
			}
			mv = null;
		}
}
	};

	}
});
