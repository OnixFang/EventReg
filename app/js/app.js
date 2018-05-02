(function EventsAppIife() {
  const eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute']);

  function routes($routeProvider) {
    $routeProvider
      .when('/newEvent', {
        templateUrl: 'templates/NewEvent.html',
        controller: 'EditEventController',
      })
      .when('/events', {
        templateUrl: 'templates/EventList.html',
        controller: 'EventListController',
      })
      .when('/event/:eventId', {
        templateUrl: 'templates/EventDetails.html',
        controller: 'EventController',
      })
      .when('/editProfile', {
        templateUrl: 'templates/EditProfile.html',
        controller: 'EditProfileController',
      })
      .otherwise('/events');
  }

  eventsApp.config(routes);
}());
