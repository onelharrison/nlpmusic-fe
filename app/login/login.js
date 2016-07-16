'use strict';

angular.module('nlpMusic.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', function($scope) {

  $scope.logIn = function() {
    firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });

    // if (firebase.auth().currentUser) {
    //   $locationProvider.path('/auth/dashboard');
    // } else {
    //   console.log('user not authenticated')
    // }

  }
}]);
