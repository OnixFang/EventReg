(function EventDataIife() {
  const eventsApp = angular.module('eventsApp');

  function EventData($resource) {
    // Default resource path for event data
    const resource = $resource('data/event/:id', { id: '@id' });
    let events = [];
    let maxId = 0;

    // event.id = maxId + 1;

    function getEvent(id) {
      return resource.get({ id: id });
    }

    function saveEvent(event) {
      event.id = maxId + 1;
      console.log(event);
      // return resource.save(event);
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

    getAllEvents().$promise.then(getAllSuccess);

    return {
      getEvent: getEvent,
      saveEvent: saveEvent,
      getAllEvents: getAllEvents,
      // getLastEventId: getLastEventId,
    };
  }

  eventsApp.factory('EventData', EventData);
}());
