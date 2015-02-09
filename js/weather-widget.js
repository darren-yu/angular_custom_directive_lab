angular.module("weather-widget",[])
.directive("weatherWidget",function(){

    console.log("directive weather loaded");
    return {
        restrict: "E",
        scope: {



            location: "@"
        },
        controller: ["$scope","$http",function($scope,$http){
            var req = {
                url: "http://api.openweathermap.org/data/2.5/weather",
                params: {
                    q: $scope.location,

                    units: "imperial"
                }
            }


            $http(req).success(function(data){

                $scope.weather = data.weather[0].description;

                $scope.temp = data.main.temp;

            });


        }],
        replace: true,
        template: "<div><h3>Forecast in <em>{{location}}</em> is <em>{{temp}}&deg;F, {{weather}}.</em></h3></div>"





    }
});

