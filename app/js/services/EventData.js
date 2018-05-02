(function EventDataIife() {
  const eventsApp = angular.module('eventsApp');

  function EventData($resource) {
    // Default resource path for event data
    const resource = $resource('data/event/:id', { id: '@id' });
    // const allEvents = $resource('data/event/');
    // let events;
    // let lastEvent;

    // getAllEvents().$promise.then(function (response) {
    //   events = response;
    //   lastEvent = parseInt(events[events.length - 1].slice(0, -5));
    // });

    // function getLastEventId() {
    //   return lastEvent;
    // }

    function getEvent(id) {
      return resource.get({ id: id });
    }

    function saveEvent(event) {
      // event.id = getLastEventId() + 1;
      event.id = 999;
      return resource.save(event);
    }

    function getAllEvents() {
      return resource.query();
    }

    return {
      getEvent: getEvent,
      saveEvent: saveEvent,
      getAllEvents: getAllEvents,
      // getLastEventId: getLastEventId,
    };
  }

  eventsApp.factory('EventData', EventData);
}());
