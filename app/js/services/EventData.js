(function EventDataIife() {
  const eventsApp = angular.module('eventsApp');

  function EventData($resource) {
    // Default resource path for event data
    const resource = $resource('data/event/:id', { id: '@id' });
    let events = [];
    let maxId = 0;

    function getEvent(eventId) {
      return resource.get({ id: eventId });
    }

    function getAllEvents() {
      return resource.query();
    }

    function getAllSuccess(response) {
      events = response;
      for (let i = 0; i < events.length; i += 1) {
        if (events[i].id > maxId) {
          maxId = events[i].id;
        }
      }
    }

    function saveEvent(event) {
      event.id = maxId + 1;
      console.log(event);
      console.log('Max ID: ' + maxId);
      getAllEvents().$promise.then(getAllSuccess);
      return resource.save(event);
    }

    getAllEvents().$promise.then(getAllSuccess);

    return {
      getEvent: getEvent,
      saveEvent: saveEvent,
      getAllEvents: getAllEvents,
    };
  }

  eventsApp.factory('EventData', EventData);
}());
