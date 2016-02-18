angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as MC'
      })
      .when('/aroundtown',{
        templateUrl: 'views/aroundtown.html',
        controller: 'ATController as ATC'
      })
      .when('/sunsets', {
        templateUrl: 'views/sunsets.html',
        controller: 'SunsetsController as SC'
      })
      .when('/parks', {
        templateUrl: 'views/parks.html',
        controller: 'ParksController as PC'
      })
      .when('/trips', {
        templateUrl: 'views/trips.html',
        controller: 'TripsController as TC'
      });
});
