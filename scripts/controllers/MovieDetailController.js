angular.module("moviedb").controller("MovieDetailController",
    ["$scope","$routeParams","$location","APIClient","paths",function($scope,$routeParams,$location,APIClient,paths){
        //scope init:"
        $scope.model = {};
        $scope.uiState = 'loading';
        //Controller init
        $scope.$emit("changeTitle","Loading...");
        APIClient.getMovie($routeParams.id).then(
            //Pelicula encontrada:
            function(movie){
                $scope.model = movie;
                $scope.uiState = 'ideal';
                $scope.$emit("changeTitle",$scope.model.title);
            },
            //Pelicula no encontrada:
            function(error){
                //TODO: improve error management
                $location.url(paths.notFound);
            }
        );
    }]
);