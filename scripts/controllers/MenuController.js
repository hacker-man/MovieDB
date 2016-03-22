//En el módulo moviedb, defino el controlador
angular.module("moviedb")
    .controller("MenuController", ["$scope","$location", function ($scope,$location) {
    //Scope init
    $scope.model = {
        selectedItem: "movies"
    };
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