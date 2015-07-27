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
        'patterns/surprise',
        'patterns/splash',
        'lib/jquery-2.0.0.min'],

function(gears,paper,prism, caffeine,ellsworth,pencil,dashes,lollipop,wires,squash,pixels,prsm,dubai,sidewalk,surprise,splash){
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
    var something = false;
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
      sidewalk:sidewalk,
      surprise:surprise,
      splash:splash
      }
  	  paper.setup(canvas)
      for(p in patterns)
      {
        $('#holder').append('<button class="pattern" id="'+p+'"><img src="images/'+p+'.png"></button>')
      }

      $('#erase').click(function(){
        paper.project.clear();
        something = false;
      });

    $('.pattern').click(function(){
      //$(this).removeClass
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
    $('#width').attr({value:Math.floor(screen.availWidth/2)});
    $('#height').attr({value:Math.floor(screen.availHeight/2)});
    var previewVisible = false;
    $('#preview').attr({width:Math.floor(screen.availWidth/2),
      height:Math.floor(screen.availHeight/2)
    });
    $('#preview').click(function(){
      $(this).attr({hidden:true})
    })
    $('#image').click(function(){
      url = canvas.toDataURL()
      $('#urlHolder').attr({value:url})
      $('#preview').attr({hidden:false,src:url})
      something = true;
    });
    $('#title').click(function(){
      if(something)
      $('#toSubmit').text('press enter to submit');
      else
      $('#toSubmit').text('save a preview of something to submit!!');
    });

    $('#hubLink,#listLink').css('color','rgb(0,'+Math.floor(Math.random()*255)+',255)');
    widthForm = $('#title').x +100
    heightForm = $('#title').y
    $( "body" ).keypress(function(k) {
    if(k.charCode==112){
      if(url)
      $('#preview').attr({hidden:!$('#preview').attr('hidden'),src:url})
    }
    });
});



//var app = angular.module('candusen',[])
