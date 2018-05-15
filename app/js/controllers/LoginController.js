(function () {
    const eventsApp = angular.module('eventsApp');
    
    function LoginController($scope) {
        $scope.test = function () {
            console.log($scope.login);
        }
    }

    eventsApp.controller('LoginController', LoginController);
}());
