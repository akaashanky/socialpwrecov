'use strict';

describe('Controller: SocialRecoveryCtrl', function () {

  // load the controller's module
  beforeEach(module('pwrecovApp'));

  var SocialRecoveryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocialRecoveryCtrl = $controller('SocialRecoveryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
