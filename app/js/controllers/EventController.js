(function EventControllerIife() {
  const eventsApp = angular.module('eventsApp');

  function EventController($scope, EventData, $log) {
    $scope.sortOrder = 'name';

    // Failure callback function when getting the event resource from EventData service
    function getEventError(response) {
      $log.warn('Could not get resource!');
      $log.warn(response);
    }

    // Success callback function when getting the event resource from EventData service
    function getEventSuccess(data) {
      $log.log('Retrieving resource data...');
      $log.log(data);
      $scope.event = data;
    }

    // Get the event resource from EventData service
    EventData.getEvent(1).$promise.then(getEventSuccess).catch(getEventError);

    function upVoteSession(session) {
      session.upVoteCount += 1;
    }

    function downVoteSession(session) {
      session.upVoteCount -= 1;
    }

    $scope.upVoteSession = upVoteSession;
    $scope.downVoteSession = downVoteSession;
  }

  eventsApp.controller('EventController', EventController);
}());

