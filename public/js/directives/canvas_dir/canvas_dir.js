app.directive('supacanvas',function(){
  return {
    restrict: 'E',
    templateUrl: 'js/directives/canvas_dir/canvas_dir.html',
    controller:function(scope,element){
        scope.name = 'fuck off bro'
    },
    link:function(){
      alert();
    }
  }
})
