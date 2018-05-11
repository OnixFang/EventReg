(function UserDataIife() {
    const eventsApp = angular.module('eventsApp');

    function UserData($resource) {
        // Default resource path for user data
        const resource = $resource('data/user/:username', { username: '@userName' });

        function getUser(username) {
            return resource.get({ username: username });
        }

        function saveUser(user) {
            return resource.save(user);
        }

        return {
            saveUser: saveUser,
            getUser: getUser,
        };
    }
    eventsApp.factory('UserData', UserData);
}());
