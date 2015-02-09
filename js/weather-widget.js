angular.module("weather-widget",[])
.directive("weatherWidget",function(){

    console.log("directive weather loaded");
    return {
        restrict: "E",
        scope: {

            /*nt: @ -> this gives the exact thing to pass through on the html side.
            The '=' -> equal sign evalutes whats inside the parenthesis like if it was code
            to be executed.*/

            location: "@"
        },
        controller: ["$scope","$http",function($scope,$http){
            var req = {
                url: "http://api.openweathermap.org/data/2.5/weather",
                params: {
                    q: $scope.location,

                    units: "imperial" //nt: converts units from metric system.
                }
            }


            $http(req).success(function(data){
                // console.log(data);
                // console.log(data.weather[0].description)
                $scope.weather = data.weather[0].description;
                // $scope.temp = Math.round(((data.main.temp - 273.15) * 1.8000) + 32)
                $scope.temp = data.main.temp;

            });


        }],
        replace: true,
        template: "<div><h3>Forecast in <em>{{location}}</em> is <em>{{temp}}&deg;F, {{weather}}.</em></h3></div>"





    }
});

