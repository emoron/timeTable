var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

  $scope.dataTable = [];

  $scope.diasChange = function() {
    var dia = $scope.selectedDia.dia;
    /*$http.get("http://localhost:3000/dias/", { "dia": dia }).then(function(response) {
        $scope.dataTable = response.data.records;
        console.log($scope.dataTable);
    });*/
    $http.get("http://127.0.0.1:3000/dias/" + dia)
    .success(function(data, status, headers, config) {
      $scope.dataTable = data;
    });
  };

  $scope.materiasChange = function() {
    var materia = $scope.selectedMateria.materia;
    $http.get("http://127.0.0.1:3000/materias/" + materia)
    .success(function(data, status, headers, config) {
      $scope.dataTable = data;
    });
  };

  $scope.semestresChange = function() {
    var semestre = $scope.selectedSemestre.semestre;
    $http.get("http://127.0.0.1:3000/semestre/" + semestre)
    .success(function(data, status, headers, config) {
      $scope.dataTable = data;
    });
  };
  $scope.salonesChange = function() {
    var salon = $scope.selectedSalon.salon;
    $http.get("http://127.0.0.1:3000/salones/" + salon)
    .success(function(data, status, headers, config) {
      $scope.dataTable = data;
    });
  };

  // Dias.
  $http.get("http://127.0.0.1:3000/dias")
    .then(function(response) {
      $scope.dias = response.data;
  });

  // Materias.
  $http.get("http://127.0.0.1:3000/materias")
    .then(function(response) {
      $scope.materias = response.data;
  });

  // Salones.
  $http.get("http://127.0.0.1:3000/salones").then(function(response) {
      $scope.salones = response.data;
  });

  // Salones.
  $http.get("http://127.0.0.1:3000/semestres").then(function(response) {
      $scope.semestres = response.data;
  });

});
