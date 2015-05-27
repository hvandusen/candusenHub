require(['patterns/gears','paper',
        'patterns/prism',
        'patterns/caffeine',
        'patterns/ellsworth',
        'patterns/pencil',
        'patterns/dashes',
        'patterns/lollipop',
        'lib/jquery-2.0.0.min'],

function(gears,paper,prism, caffeine,ellsworth,pencil,dashes,lollipop,flower){
  	// Create an empty project and a view for the canvas
  	//you need to use onload. onFrame accessible thru paper.view.onframe
  	//other mouse functions thru paper.tool.on('mousedown',function(ev){});
  	var canvas = document.getElementById('myCanvas');
    var project = {};
    var patterns = {
      gears:gears,
      prism:prism,
      caffeine:caffeine,
      ellsworth:ellsworth,
      pencil:pencil,
      dashes:dashes,
      lollipop:lollipop
      //flower:flower
      }
  	  paper.setup(canvas)
    $('button').click(function(){
      //paper.tools.tool.handlers = {}
      project = paper.project
      var layer = new paper.Layer();
      layer.activate()
      if(paper.tools[0])
      {
        paper.tools[0]._handlers = undefined;
        paper.tool.minDistance = undefined;
      }
      patterns[this.innerText]()
    });
});
//var app = angular.module('candusen',[])
