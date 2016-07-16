'use strict';

angular.module('nlpMusic.genre', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/auth/genre', {
    templateUrl: 'auth/genre/genre.html',
    controller: 'GenreCtrl'
  });
}])

.controller('GenreCtrl', ['$scope', '$http', function($scope, $http) {
  // var user = firebase.auth().currentUser;
  //
  // if (user != null) {
  //   $scope.email = user.email
  // }
  $scope.toggleSelect = function(genre) {
    
  }
}]);
