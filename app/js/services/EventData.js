(function EventDataIife() {
  const eventsApp = angular.module('eventsApp');

  function EventData($resource) {
    // Default resource path for event data
    const resource = $resource('data/event/:id', { id: '@id' });
    const allEvents = $resource('data/event/');

    function getEvent(id) {
      return resource.get({ id: id });
    }

    function saveEvent(event) {
      event.id = 999;
      return resource.save(event);
    }

    function getAllEvents() {
      return allEvents.query();
    }

    return {
      getEvent: getEvent,
      saveEvent: saveEvent,
      getAllEvents: getAllEvents,
    };
  }

  eventsApp.factory('EventData', EventData);
}());
