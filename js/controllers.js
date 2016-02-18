angular.module("app")
  .controller('MainController', [MainController]);
angular.module("app")
  .controller('HeaderController', [HeaderController]);
angular.module("app")
  .controller('ATController', [ATController]);
angular.module("app")
  .controller('SunsetsController', [SunsetsController]);
angular.module("app")
  .controller('ParksController', [ParksController]);
angular.module("app")
  .controller('TripsController', [TripsController]);

function MainController() {
  var vm = this;

  vm.title = "Sarah Hamilton Photography"
}

function HeaderController() {
  var vm = this;
  vm.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
}

function ATController() {
  var vm = this;

  vm.title = "Around Town"
}

function SunsetsController() {
  var vm = this;

  vm.title = "Sunsets in Fort Collins"
}

function ParksController() {
  var vm = this;

  vm.title = "Parks around Fort Collins"
}

function TripsController() {
  var vm = this;

  vm.title = "Trips to Nearby Towns in Colorado"
}
