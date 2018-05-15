(function () {
    const eventsApp = angular.module('eventsApp');

    function LoginController($scope, UserData) {
        $scope.login = function (user) {
            console.log(user);

            UserData.getUser(user.userName).$promise.then(function (response) {
                if (response.password === user.password) {
                    console.log('Login successfull!');
                } else {
                    console.log('Wrong Password.');
                }
            },
                function (response) {
                console.log('Could not find the requested user! ' + response);
            });
        }
    }

    eventsApp.controller('LoginController', LoginController);
}());
