'use strict';

angular.module('nlpMusic.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/auth/dashboard', {
    templateUrl: 'auth/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope', function($scope) {
  var user = firebase.auth().currentUser;

  if (user != null) {
    $scope.email = user.email
    console.log()
  }

}]);
