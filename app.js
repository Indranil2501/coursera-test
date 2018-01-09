(function () {
  'use strict';
  angular.module('DIapp', [])
  .controller('DIController', DIController);
  function DIController($scope, $filter){
    $scope.name = "Nil";
    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }
})();
