(function gravatarIife() {
    const eventsApp = angular.module('eventsApp');

    function gravatar(GravatarUrlBuilder) {
        return {
            restrict: 'E',
            template: '<img />',
            replace: true,
            link: function link(scope, element, attrs, controller) {
                attrs.$observe('email', function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        attrs.$set('src', GravatarUrlBuilder.GravatarUrlBuilder(newValue));
                    }
                });
            },
        };
    }

    eventsApp.directive('gravatar', gravatar);
}());
