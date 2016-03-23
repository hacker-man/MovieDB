angular.module("moviedb")
    .controller("MoviesListController", ["$scope", "MovieService", "$log","paths", function ($scope, MovieService, $log,paths) {
        //scope init:
        $scope.model = [];
        
        //Scope watchers:
       
        //Controller start:
        $scope.uiState = 'loading';
        MovieService.getMovies().then(
            //Promesa resuelta:
            function (data) {
                $log.log("SUCCESS", data);
                $scope.model = data;
                if ($scope.model.length == 0)
                    $scope.uiState = 'blank'
                else {
                    $scope.uiState = 'ideal'

                }
            },
            //Promesa rechazada:
            function (data) {
                $log.error("Error", data);
                $scope.uiState = 'error';
            }
        );
    }]);