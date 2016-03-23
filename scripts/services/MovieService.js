angular.module("moviedb").service("MovieService", ["$http","$q",function ($http,$q) {
    
    this.getMovies = function () {
        //return
        //Crear el objeto difereido
        var deferred = $q.defer();
        //hacer trabajo asíncrono
         $http.get('/api/movies/').then(
            //petición OK
            function(response){
                //resolver la promesa
                deferred.resolve(response.data);
            },
            //peticion KO
            function(response){
                 //rechazar la promesa
                deferred.reject(response.data);
            }
         );
        
        //devolver la promesa
        return deferred.promise;
       
    };
}]);