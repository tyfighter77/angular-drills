app.controller('mainController', function($scope, mainService){

  $scope.getPlanets = function(){
    mainService.getPlanets()
    .then(function(response){
      $scope.planets = response;
    });
  };

  $scope.getPlanets();

});
