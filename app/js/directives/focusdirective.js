(function () {
    const eventsApp = angular.module('eventsApp');
    
    function focusDirective() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {
                const elem = element;
                elem.focus();
            }
        };
    }

    eventsApp.directive('focusDirective', focusDirective);
}());
