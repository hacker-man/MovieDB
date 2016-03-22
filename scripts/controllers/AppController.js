angular.module("moviedb")
    .controller("AppController",["$scope","$location",function($scope,$location){
        //Controller properties:
        var controller = this;
        controller.titles = {
            "/movies": "Movies List",
            "/series": "Series List",
            "/people": "People List"
        }
        $scope.model = {
            title: ""
        }
        //Scope event listeners
        $scope.$on("$locationChangeSuccess",function(evt,currentRoute){
            //console.log("$locationChangeSuccess",$location.path());
            //Se indexa titles con un string
            $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
        });
    }]);