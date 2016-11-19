(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.showToBuy();

    toBuy.buy = function (itemIndex) {
      ShoppingListCheckOffService.buy(itemIndex);
    };

    toBuy.test = function () {
      alert("yess");
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBougth = this;

    alreadyBougth.items = ShoppingListCheckOffService.showAlreadyBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuy = [{name: "cookies", quantity: 10}, {name: "cookies", quantity: 10}];
    var alreadyBougth = [];

    service.buy = function (itemIndex) {
      alreadyBougth.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex,1);
    };

    service.showToBuy = function () {
      return toBuy;
    };

    service.showAlreadyBought = function () {
      return alreadyBougth;
    };
  }

})();
