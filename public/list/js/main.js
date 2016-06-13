var myApp = angular.module('myApp',[] );

myApp.controller('myController', function myController($scope,$http) {


	$http.get('/json/data2.json').success(function(data){
		$scope.cursos = data;

	});


	console.log($scope.cursos);
});
