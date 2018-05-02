(function EventListControllerIife() {
  const eventsApp = angular.module('eventsApp');

  function EventListController($scope, $location, EventData) {
    $scope.events = EventData.getAllEvents();
  }

  eventsApp.controller('EventListController', EventListController);
}());
