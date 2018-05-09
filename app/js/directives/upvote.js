(function upvoteIife() {
    const eventsApp = angular.module('eventsApp');

    function upvote() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/templates/directives/upvote.html',
            scope: {
                upvote: '&',
                downvote: '&',
                count: '=',
            },
        };
    }

    eventsApp.directive('upvote', upvote);
}());
