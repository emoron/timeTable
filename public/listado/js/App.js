angular.module("App",[])
.run(function($rootScope){
  $rootScope.rootProperty = 'root Scope';
})
.controller('ParentController',function($scope){
  $scope.parentProperty = 'parent scope';
})
.controller('ChildController',function($scope){
  $scope.childProperty = 'Child scope';

  $scope.fullSentenceFromChild = 'Same $scope ' +
    $scope.rootProperty + 'and' +
    $scope.parentProperty + ' and ' +
    $scope.childProperty
});
