var app = angular.module('appointmentApp', [ 'ngAnimate', 'ui.bootstrap', 'ngRoute']);
// var app = angular.module('appointmentApp');
app.controller('ContactsController', ['$scope', '$http', function ($scope, $http){

  $scope.newContact = [];

   $scope.masterContact = angular.copy($scope.newContact );
   $scope.contacts = {};

   $scope.allContacts = function(){
      $scope.contacts = [];
      $http.get('api/contacts').then(function(response){
       $scope.contacts = response.data.contacts;
       $scope.newContact = angular.copy( $scope.masterContact );
     });
    };


  $scope.createContact = function(){
    $http({
      url: 'api/contacts',
      method: 'post',
      data: {contact: $scope.newContact}
    }).then(function(response){
      $scope.allAContacts();
    });
  };

  $scope.removeContact = function(index){
    $http({
      url: 'api/contacts/' + index,
      method: 'delete'
    }).then(function(){
      $scope.allContacts();
    })
  };

}]);
