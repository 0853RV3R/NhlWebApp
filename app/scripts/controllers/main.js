'use strict';

angular.module('nhlWebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.count = 0;

    $scope.countUp = function (){
        $scope.count = $scope.count+1;
      };
    $scope.countDown = function (){
        $scope.count = $scope.count-1;
      };
      $scope.countClear = function (){
        $scope.count = 0;
      };
  });
