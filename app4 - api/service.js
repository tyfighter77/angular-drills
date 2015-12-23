app.service('mainService', function($http){
  var baseUrl = 'http://smurfs.devmounta.in/smurfs/';

  this.getData = function(){
    return $http({
      method: 'GET',
      url: baseUrl
    }).then(function(response){
      console.log(response);
      return response.data;
    });

  };


});
