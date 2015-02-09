// nt: the "like-button is what dependency that needs to be passed into other ang js files"
angular.module("like-button", [])
.directive("likeButton", function() {

    console.log("directive loaded");
    return {
        restrict: "E",
        scope: {
            /*nt: Anything that follows the '?' is an optional parameter. If its blank then the optional parameter is
            set to what the key is.*/
            startingValue: "=?"

            /*nt: startingValue key below is being passed around in this js file and not the html.
            The $scope.startingValue is what is being passed into the html as starting-value.*/
            // startingValue: "="
        },
        controller: ["$scope",function($scope) {

            if(!$scope.startingValue) $scope.startingValue=0;

            $scope.likeAdd = function() {
                // alert("Like is working")
                $scope.startingValue += 1
                // console.log($scope.startingValue)
            }
        }],
        replace: true,
        template: "<button class='btn btn-success' ng-click='likeAdd()'><span class='glyphicon glyphicon-hand-up'></span> {{startingValue}}</button>"

    }
});



