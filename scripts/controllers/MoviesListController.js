angular.module("moviedb")
    .controller("MoviesListController", ["$scope", "APIClient", "$log","paths","URL", function ($scope,APIClient, $log,paths,URL) {
        //scope init:
        $scope.model = [];
        $scope.url = URL.resolve;
        //scope methods:
        $scope.getMovieDetailURL = function(movie){
            return URL.resolve(paths.movieDetail,{id:movie.id});
        }
       
        //Controller start:
        $scope.uiState = 'loading';
        APIClient.getMovies().then(
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