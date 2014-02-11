'use strict';

angular.module('scoreBoardApp', [
  'ngResource',
  'ngRoute'
]).config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });
  $routeProvider.when('/players', {
      templateUrl: 'views/playerlist.html',
      controller: 'PlayerListCtrl'
    });
  $routeProvider.otherwise({
      redirectTo: '/'
    });
});
