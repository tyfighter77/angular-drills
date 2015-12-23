app.controller('mainControl', function($scope, mainService){

$scope.getData = function() {
  mainService.getData()
  .then(function(response){
    $scope.data = response;
    console.log(response);
  });
};

$scope.getData();

});
