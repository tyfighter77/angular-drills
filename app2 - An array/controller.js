app.controller('arrayController', function($scope, mainService) {

  $scope.data = mainService.retData();

});
