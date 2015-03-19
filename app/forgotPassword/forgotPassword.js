'use strict';

angular.module('pwrecovApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/forgotPassword', {
        templateUrl: 'app/forgotPassword/forgotPassword.html',
        controller: 'ForgotPasswordCtrl'
      });
  });
