(function FiltersIife() {
  const eventsApp = angular.module('eventsApp');

  function durations() {
    return function returnedDuration(duration) {
      switch (duration) {
        case 1:
          return 'Half Hour';
        case 2:
          return '1 Hour';
        case 3:
          return 'Half Day';
        case 4:
          return 'Full Day';
        default:
          return 'Undefined duration';
      }
    };
  }

  function levels() {
    return function returnedLevel(level) {
      const star = '<span class="icon icon-star icon-white"></span>';
      switch (level) {
        case 'Introductory':
          return star;
        case 'Intermediate':
          return star + star;
        case 'Advanced':
          return star + star + star;
        default:
          return 'undefined';
      }
    };
  }

  eventsApp.filter('durations', durations);
  eventsApp.filter('levels', levels);
}());
