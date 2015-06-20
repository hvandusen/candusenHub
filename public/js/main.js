require(['patterns/gears','paper',
        'patterns/prism',
        'patterns/caffeine',
        'patterns/ellsworth',
        'patterns/pencil',
        'patterns/dashes',
        'patterns/lollipop',
        'patterns/wires',
        'patterns/squash',
        'patterns/pixels',
        'patterns/prsm',
        'patterns/dubai',
        'patterns/sidewalk',
        'lib/jquery-2.0.0.min'],

function(gears,paper,prism, caffeine,ellsworth,pencil,dashes,lollipop,wires,squash,pixels,prsm,dubai,sidewalk){
  	// Create an empty project and a view for the canvas
  	//you need to use onload. onFrame accessible thru paper.view.onframe
  	//other mouse functions thru paper.tool.on('mousedown',function(ev){});
  	var canvas = document.getElementById('myCanvas');
    $('canvas').attr({
      width: window.outerWidth-100,
      height: window.outerHeight-300
    });
    var project = {};
    var selected;
    var patterns = {
      gears:gears,
      prism:prism,
      caffeine:caffeine,
      ellsworth:ellsworth,
      pencil:pencil,
      dashes:dashes,
      lollipop:lollipop,
      wires:wires,
      squash:squash,
      squash:squash,
      pixels:pixels,
      prsm:prsm,
      dubai:dubai,
      sidewalk:sidewalk
      }
  	  paper.setup(canvas)
      for(p in patterns)
      {
        $('#holder').append('<button class="pattern" id="'+p+'"><img src="images/'+p+'.png"></button>')
      }

      $('#erase').click(function(){
        paper.project.clear();
      });

    $('.pattern').click(function(){
      $(this).removeClass
      if(selected && selected !== $(this))
      selected.removeClass('selected')
      selected = $(this)
      selected.addClass('selected')
      project = paper.project
      var layer = new paper.Layer();
      layer.activate()
      if(paper.tools[0])
      {
        paper.tools[0]._handlers = undefined;
        paper.tool.minDistance = undefined;
      }
      patterns[this.id]()
    });


//applies this function to every obj


});


//var app = angular.module('candusen',[])
