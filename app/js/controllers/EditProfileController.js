(function EditProfileControllerIife() {
  const eventsApp = angular.module('eventsApp');

  function EditProfileController($scope, GravatarUrlBuilder, UserData) {
    $scope.user = {};

    $scope.getGravatarUrl = function getGravatarUrl() {
      return GravatarUrlBuilder.GravatarUrlBuilder($scope.user.emailAddress);
    };

    $scope.saveUser = function saveUser(user) {
      console.log(user);
      try {
        UserData.saveUser(user);
        console.log('Success?');
      } catch (ex) {
        console.log('Failed: ' + ex);
      }
    };

    $scope.getUser = function getUser() {
      const user = UserData.getUser('TestUsername');
      console.log(user);
    };
  }
  eventsApp.controller('EditProfileController', EditProfileController);
}());
