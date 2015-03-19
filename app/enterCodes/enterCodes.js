'use strict';

angular.module('pwrecovApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/enterCodes', {
        templateUrl: 'app/enterCodes/enterCodes.html',
        controller: 'EnterCodesCtrl'
      });
  });
