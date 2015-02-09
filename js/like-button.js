
angular.module("like-button", [])
.directive("likeButton", function() {

    console.log("directive loaded");
    return {
        restrict: "E",
        scope: {

            startingValue: "=?"


        },
        controller: ["$scope",function($scope) {

            if(!$scope.startingValue) $scope.startingValue=0;

            $scope.likeAdd = function() {

                $scope.startingValue += 1

            }
        }],
        replace: true,
        template: "<button class='btn btn-success' ng-click='likeAdd()'><span class='glyphicon glyphicon-hand-up'></span> {{startingValue}}</button>"

    }
});



