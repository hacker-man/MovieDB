angular.module("moviedb")
    .controller("AppController",["$scope",function($scope){
        $scope.model = {
            title: ""
        }
        //Scope event listeners
        $scope.$on("onMenuChange",function(evt,data){
            $scope.model.title = data;
        });
    }]);