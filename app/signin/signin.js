'use strict';

angular.module('pwrecovApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/signin/signin.html',
        controller: 'SigninCtrl'
      });
  });
