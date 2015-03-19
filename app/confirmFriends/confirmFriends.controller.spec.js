'use strict';

describe('Controller: ConfirmFriendsCtrl', function () {

  // load the controller's module
  beforeEach(module('pwrecovApp'));

  var ConfirmFriendsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmFriendsCtrl = $controller('ConfirmFriendsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
