'use strict';

angular.module('nlpMusic.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'SignupCtrl'
  });
}])

.controller('SignupCtrl', ['$scope', function($scope) {

  $scope.signUp = function() {
    firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });

    // if (firebase.auth().currentUser) {
    //   $locationProvider.path('/auth/dashboard');
    // } else {
    //   console.log('user not authenticated')
    // }

  }
}]);
