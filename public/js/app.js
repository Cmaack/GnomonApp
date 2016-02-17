var app = angular.module('appointmentApp', [ 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker']);

// =====================Appointments Controller ============================//
app.controller('AppointmentsController', ['$scope', '$http', function ($scope, $http){

  $http.get('/api/appointments').then(function(response){
      var data = response.data;
      $scope.appointments = data.appointments;
    });

    $scope.newAppointment = {};
      $scope.createAppointment = function(){

        console.log($scope.newAppointment);
        $http.post('/api/appointments', {appointment: $scope.newAppointment}).then(function(response){
          var data = response.data.appointment;
          $scope.appointments.push( data );
          $scope.newAppointment = {};
        });
      };

      $scope.deleteAppointment = function(index) {
          var appointment = $scope.appointments[index];
          $http.delete('/api/appointments/' + appointment._id);
          $scope.appointments.splice(index, 1);
        };
}]);

// =====================Contacts Controller ============================//
app.controller('ContactsController', ['$scope', '$http', function ($scope, $http){

  $http.get('/api/contacts').then(function(response){
      var data = response.data;
      $scope.contacts = data.contacts;
    });

    $scope.newContact = {};
      $scope.createContact = function(){

        console.log($scope.newContact);
        $http.post('/api/contacts', {contact: $scope.newContact}).then(function(response){
          var data = response.data.contact;
          $scope.contacts.push( data );
          $scope.newContact = {};
        });
      };

      $scope.deleteContact = function(index) {
          var contact = $scope.contacts[index];
          $http.delete('/api/contacts/' + contact._id);
          $scope.contacts.splice(index, 1);
        };
}]);

// =====================Tasks Controller ============================//
app.controller('TasksController', ['$scope', '$http', function ($scope, $http){

  $http.get('/api/tasks').then(function(response){
      var data = response.data;
      $scope.tasks = data.tasks;
    });

    $scope.newTask = {};
      $scope.createTask = function(){

        console.log($scope.newTask);
        $http.post('/api/tasks', {task: $scope.newTask}).then(function(response){
          var data = response.data.task;
          $scope.tasks.push( data );
          $scope.newTask = {};
        });
      };

      $scope.deleteTask = function(index) {
          var task = $scope.tasks[index];
          $http.delete('/api/tasks/' + task._id);
          $scope.tasks.splice(index, 1);
        };
}]);

// =====================DateTimePicker Controller ============================//
app.controller('DateTimePickerDemoCtrl',
function ($scope, $timeout) {
  $scope.dateTimeNow = function() {
    $scope.date = new Date();
  };
  $scope.dateTimeNow();

  $scope.toggleMinDate = function() {
    var minDate = new Date();
    // set to yesterday
    minDate.setDate(minDate.getDate() - 1);
    $scope.minDate = $scope.minDate ? null : minDate;
  };

  $scope.toggleMinDate();

  $scope.dateOptions = {
    showWeeks: false
  };
  app.factory('utils',function(){
    return {
      remove:function(array,value){
    		var index = array.indexOf(value);
    		array.splice(index, 1);
        return array;
      }
    };
  });

  // Disable weekend selection
  $scope.disabled = function(calendarDate, mode) {
    return mode === 'day' && ( calendarDate.getDay() === 0 || calendarDate.getDay() === 6 );
  };

  $scope.open = function($event,opened) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.dateOpened = true;
    console.log('opened');
  };

  $scope.dateOpened = false;
  $scope.hourStep = 1;
  $scope.minuteStep = 1;

  $scope.timeOptions = {
    hourStep: [1, 2, 3],
    minuteStep: [1, 5, 10, 15, 25, 30]
  };

  $scope.showMeridian = true;
  $scope.timeToggleMode = function() {
    $scope.showMeridian = !$scope.showMeridian;
  };

  $scope.$watch("date", function(date) {
    // read date value
  }, true);

  $scope.resetHours = function() {
    $scope.date.setHours(1);
  };
});
app.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
