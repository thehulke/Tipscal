tipForm.directive('nameHours', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'E',
        templateUrl: 'name-hours.html'
    };
});

tipForm.directive('ngTotalTipsTable', function() {
    return {
        restrict: 'E',
        templateUrl: 'totalTipsTable.html'
    };
});
