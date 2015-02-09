var todoApp = angular.module("TodoApp", ["ngAnimate", "like-button", "weather-widget"]);


todoApp.run(function(){
    console.log('App Started.');
});

todoApp.controller("TodoList",["$scope",function($scope){

    $scope.items =[];


    $scope.items.push({done:false,name:"go running"});
    $scope.items.push({done:false,name:"do dishes"});
    $scope.items.push({done:false,name:"go swimming"});
    $scope.newItem = "";


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

        var tempItem = $scope.items[currentIndex];
        $scope.items[currentIndex] = $scope.items[targetIndex];
        $scope.items[targetIndex] = tempItem;
    }


}]);