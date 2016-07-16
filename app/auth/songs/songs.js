'use strict';

angular.module('nlpMusic.songs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/auth/songs', {
    templateUrl: 'auth/songs/songs.html',
    controller: 'SongsCtrl'
  });
}])

.controller('SongsCtrl', ['$scope', function($scope) {
  
}]);
