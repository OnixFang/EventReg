(function EditEventControllerIife() {
  const eventsApp = angular.module('eventsApp');

  function EditEventController($scope, EventData, $log) {
    // Success callback function when saving event
    function saveEventSuccess() {
      $log.log('Event saved successfully!');
    }

    // Failure callback function when saving event
    function saveEventError(response) {
      $log.warn('Error saving event!');
      $log.warn(response);
    }

    function saveEvent(event, newEventForm) {
      if (newEventForm.$valid) {
        EventData.saveEvent(event).$promise.then(saveEventSuccess).catch(saveEventError);
      }
    }

    function cancelEdit() {
      window.location = '/EventDetails.html';
    }

    function test() {
      EventData.getAllEvents().$promise.then(function (response) {
        $log.log(response);
      });
    }

    $scope.saveEvent = saveEvent;
    $scope.cancelEdit = cancelEdit;
    $scope.test = test;
  }
  eventsApp.controller('EditEventController', EditEventController);
}());
