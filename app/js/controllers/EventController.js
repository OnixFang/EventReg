(function EventControllerIife() {
    const eventsApp = angular.module('eventsApp');

    function EventController($scope, EventData, $log, $cookies, $routeParams) {
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
        EventData.getEvent($routeParams.eventId).$promise.then(getEventSuccess).catch(getEventError);

        function upVoteSession(session) {
            if (!$cookies.get('upVoteSession' + session.id)) {
                $cookies.put('upVoteSession' + session.id, true);
                session.upVoteCount += 1;
            } else {
                $log.warn('Session already up voted!!');
            }
        }

        function downVoteSession(session) {
            if (!$cookies.get('downVoteSession' + session.id)) {
                $cookies.put('downVoteSession' + session.id, true);
                session.upVoteCount -= 1;
            } else {
                $log.warn('Session already down voted!!');
            }
        }

        $scope.upVoteSession = upVoteSession;
        $scope.downVoteSession = downVoteSession;

        $scope.clearCookies = function clearCookies() {
            angular.forEach($cookies, function (v, k) {
                $cookies.remove(k);
            });
            angular.forEach($cookies, function (v, k) {
                $log.log(k);
            });
        }
    }

    eventsApp.controller('EventController', EventController);
}());

