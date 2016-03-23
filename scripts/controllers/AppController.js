angular.module("moviedb")
    .controller("AppController",["$scope","$location","paths",function($scope,$location,paths){
        //Controller properties:
        var controller = this;
        controller.titles = {}
           controller.titles[paths.movies] = "Movies List";
           controller.titles[paths.series] = "Series List";
           controller.titles[paths.people] = "People List";
    
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