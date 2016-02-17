var app = angular.module('appointmentApp', [ 'ngAnimate', 'ui.bootstrap', 'ngRoute']);

app.controller('AppointmentsController', ['$scope', '$http', function ($scope, $http){

  $scope.newAppointment = [];

   $scope.masterAppointment = angular.copy($scope.newAppointment );
   $scope.appointments = {};

   $scope.allAppointments = function(){
      $scope.appointments = [];
      $http.get('api/appointments').then(function(response){
       $scope.appointments = response.data.appointments;
       $scope.newAppointment = angular.copy( $scope.masterAppointment );
     });
    };


  $scope.createAppointment = function(){
    $http({
      url: 'api/appointments',
      method: 'post',
      data: {appointment: $scope.newAppointment}
    }).then(function(response){
      $scope.allAppointments();
    });
  };

  $scope.removeAppointment = function(index){
    $http({
      url: 'api/appointments/' + index,
      method: 'delete'
    }).then(function(){
      $scope.allAppointments();
    })
  };



}]);
