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
  var x1 = function () {
  // do something, PLEASE!
  return "Blah!";
};

var x2 = x1();

function x3(arg) {
  return arg; // Ha-ha! That's all I do!
}

var x4 = x3(x1);

var x5 = x3(x2);

var x6 = x3(x1());

console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);

})();
