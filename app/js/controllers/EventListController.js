(function EventListControllerIife() {
  const eventsApp = angular.module('eventsApp');

  function EventListController($scope, $route) {
    $scope.events = $route.current.locals.events;
  }

  eventsApp.controller('EventListController', EventListController);
}());
