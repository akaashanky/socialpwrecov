'use strict';

angular.module('pwrecovApp')
  .controller('SocialRecoveryCtrl', function ($scope, $modal) {
    $scope.message = 'Hello';

    $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        
      }
    });
	};


  });


angular.module('pwrecovApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  
  $scope.ok = function () {
    $modalInstance.close();
  };

});
