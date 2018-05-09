(function EventsAppIife() {
    const eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute']);

    function routes($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/newEvent', {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController',
            })
            .when('/events', {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController',
                resolve: {
                    events: function (EventData) {
                        return EventData.getAllEvents().$promise;
                    }
                },
            })
            .when('/event/:eventId', {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
            })
            .when('/editProfile', {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController',
            })
            .when('/about', {
                template: 'This is the about page. Nothing to see here really.'
            })
            .otherwise('/events');
    }

    eventsApp.config(routes);
}());
