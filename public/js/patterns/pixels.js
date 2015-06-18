define(function(){
    return function(){
      var rows = 30;
      var columns = 30;
      var height = 5;
      var width = 5;
      var offset = (rows*width)/2
      var margin ;
      var symbols = [];
      count=0

      function gridItUp(){
      	symbols = []
      	for(var i=0;i<3;i++){
      		shape = new paper.Path.Rectangle(new paper.Point(500, 500), width, height)
      		shape.fillColor = prettyRaCo();
      		symbols[i] = new paper.Symbol(shape)
      	}
      		for (var i=0;i<rows;i++){
      			for (var j=0;j<columns;j++){
      					symbols[Math.floor(Math.random()*3)].place(new paper.Point(margin[0]+j*width+Math.random(),margin[1]+i*height+Math.random()))
      			}
      		}
      }
      	//gridItUp();


      paper.tool.on('mouseup',function(){
        margin = [event.offsetX-offset,event.offsetY-offset]
      	//project.activeLayer.remove();
      	width = height = Math.random()*3+3
      	offset = (rows*width)/2
      	gridItUp();
      });




    }
});
