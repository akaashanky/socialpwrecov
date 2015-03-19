'use strict';

angular.module('pwrecovApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/socialRecovery', {
        templateUrl: 'app/socialRecovery/socialRecovery.html',
        controller: 'SocialRecoveryCtrl'
      });
  });
