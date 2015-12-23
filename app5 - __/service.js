app.service('mainService', function($http){

  var baseUrl = 'http://swapi.co/api/';

  this.getPlanets = function(){
    return $http({
      method: 'GET',
      url: baseUrl + 'planets/'
    }).then(function(response){
      console.log(response);
      return response.data.results;
    });
  };

});
