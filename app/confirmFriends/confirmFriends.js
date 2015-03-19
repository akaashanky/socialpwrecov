'use strict';

angular.module('pwrecovApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/confirmFriends', {
        templateUrl: 'app/confirmFriends/confirmFriends.html',
        controller: 'ConfirmFriendsCtrl'
      });
  });
