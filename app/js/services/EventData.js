(function EventDataIife() {
  const eventsApp = angular.module('eventsApp');

  function EventData($resource) {
    // Default resource path for event data
    const resource = $resource('data/event/:id', { id: '@id' });

    function getEvent(id) {
      return resource.get({ id: id });
    }

    function saveEvent(event) {
      event.id = 999;
      return resource.save(event);
    }

    return {
      getEvent: getEvent,
      saveEvent: saveEvent,
    };
  }

  eventsApp.factory('EventData', EventData);
}());
