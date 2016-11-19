(function () {
  'use strict';

  angular.module('MyApp', [])
  .controller('DishesController', DishesController);

  DishesController.$inject = ['$scope'];

  function DishesController($scope) {
    $scope.dishes = "";
    $scope.submit = function (dishes) {
      if (dishes == "") {
        $scope.message = "Please enter data first";
      }
      else {
        var dishesList = dishes.split(',');
        var count = dishesList.length;
        if (count <=3) {
          $scope.message = "Enjoy";
        } else {
          $scope.message = "Too much!";
        }
      }
    }
  }

})();
