//En el módulo moviedb, defino el controlador
angular.module("moviedb")
    .controller("MenuController", ["$scope","$location","paths", function ($scope,$location,paths) {
    //Scope init
    $scope.model = {
        selectedItem: paths.movies
    };
    $scope.paths = paths;
    //Scope methods
    
    $scope.getClassForItem = function(item){
        if($scope.model.selectedItem == item){
            return "active";
        }else{
            return "";
        }
    }
    //Scope Watchers
    $scope.$on("$locationChangeSuccess",function(evt,currentRoute){
            //console.log("$locationChangeSuccess",$location.path());
            //Se indexa titles con un string
            $scope.model.selectedItem = $location.path();
        });
}]);