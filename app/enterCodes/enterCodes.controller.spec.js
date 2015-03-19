'use strict';

describe('Controller: EnterCodesCtrl', function () {

  // load the controller's module
  beforeEach(module('pwrecovApp'));

  var EnterCodesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnterCodesCtrl = $controller('EnterCodesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
