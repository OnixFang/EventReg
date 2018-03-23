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

    $scope.saveEvent = saveEvent;
    $scope.cancelEdit = cancelEdit;
  }
  eventsApp.controller('EditEventController', EditEventController);
}());
