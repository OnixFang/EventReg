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
            .when('/login', {
                templateUrl: 'templates/Login.html',
                controller: 'LoginController',
            })
            .otherwise('/events');
    }

    eventsApp.config(routes);
}());
