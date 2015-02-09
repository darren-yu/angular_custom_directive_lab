var todoApp = angular.module("TodoApp", ["ngAnimate", "like-button", "weather-widget"]);

// nt: optional, good practice that ang app is running.
todoApp.run(function(){
    console.log('App Started.');
});

todoApp.controller("TodoList",["$scope",function($scope){
    // console.log("controller working");
    $scope.items =[];

    // nt: for ng-repeat if object is duplicated it will crash to fix, in html put track by $index
    $scope.items.push({done:false,name:"go running"});
    $scope.items.push({done:false,name:"do dishes"});
    $scope.items.push({done:false,name:"go swimming"});
    $scope.newItem = "";

    // nt: $scope below ties to the weather-widget directive.
    $scope.likeVal=44;

    $scope.removeItem = function(myItemIndex){
        $scope.items.splice(myItemIndex,1);
    }

    $scope.getData = function(){
        console.log($scope.items);

    }

    $scope.addItem = function() {
        $scope.items.push({done:false,name:$scope.newItem});
        $scope.newItem="";
    }

    $scope.move = function(currentIndex, direction){
        var targetIndex = currentIndex + direction;
        if (targetIndex < 0 || targetIndex >= $scope.items.length) {
            alert("invalid move");
            return;
        }
        // alert("move it");
        var tempItem = $scope.items[currentIndex];
        $scope.items[currentIndex] = $scope.items[targetIndex];
        $scope.items[targetIndex] = tempItem;
    }


}]);