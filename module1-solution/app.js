(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.name = "";
    $scope.message = "";
    $scope.countFunc = function(){
      var message = getTextLength($scope.name);
      $scope.message = message;
    };

    function getTextLength(string){
      var arrayOfString = string.split(",");
      var message = "";
      if ($scope.name == "") {
        message = "Please enter data first";
      }
      else if(arrayOfString.length <= 3)
      {
        message = "Enjoy!";
      }
      else if (arrayOfString.length > 3) {
         message = "Too much!";
      }
      return message;
    }
  }
})();
