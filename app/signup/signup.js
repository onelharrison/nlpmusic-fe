'use strict';

angular.module('nlpMusic.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'SignupCtrl'
  });
}])

.controller('SignupCtrl',
['$scope', '$firebaseArray', ($scope, $firebaseArray) => {
  var ref = new Firebase('https://nlpmusic-10e17.firebaseio.com/');

  
  console.log('ControllerLoaded')
}]);
