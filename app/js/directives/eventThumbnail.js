(function eventThumbnailIife() {
    const eventsApp = angular.module('eventsApp');

    function eventThumbnail() {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '/templates/directives/eventThumbnail.html',
            scope: {
                event: '=',
            },
        };
    }

    eventsApp.directive('eventThumbnail', eventThumbnail);
}());
