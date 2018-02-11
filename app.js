(function () {
  'use strict';
  angular.module('MyModule', [])
  .controller('MyController', MyController);
  function MyController($scope, $filter){
    $scope.name = "Nil";
    $scope.sayHello = function() {
      return "Hello There!";
    }
  }
})();
