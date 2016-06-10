var myApp = angular.module('myApp',[]);

//myApp.controller('GetCursos',function GetCursos($scope){
myApp.controller('GetCursos',['$scope','$http',function($scope,$http){
  $http.get('data/lista.json').success(function(data){
    $scope.cursos = data;
  });
}]);
