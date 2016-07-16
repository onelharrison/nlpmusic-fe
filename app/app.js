'use strict';

// Declare app level module which depends on views, and components
angular.module('nlpMusic', [
  'ngRoute',
  'firebase',
  'nlpMusic.home',
  'nlpMusic.login',
  'nlpMusic.signup'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
