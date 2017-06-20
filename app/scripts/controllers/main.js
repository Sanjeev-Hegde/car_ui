'use strict';

/**
 * @ngdoc function
 * @name CarUI.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the CarUI
 */
angular.module('CarUI')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.awesomeThings = "Yo - APpp";
    $scope.upflag = false;
    $scope.leftflag = false;
    $scope.rightflag = false;
    $scope.downflag = false;
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                //alert('left');
                if(!$scope.leftflag){
                  $scope.leftKeyDown();
                  $scope.leftflag = true;
                  $scope.$apply();
                }
                break;
            case 38:
                //alert('up');
                  if(!$scope.upflag){
                    $scope.upKeyDown();
                    $scope.upflag = true;
                    $scope.$apply();
                  }
                  //console.log($scope.upflag);
                break;
            case 39:
                //alert('right');
                if(!$scope.rightflag){
                  $scope.rightKeyDown();
                  $scope.rightflag = true;
                  $scope.$apply();
                }

                break;
            case 40:
                //alert('down');
                if(!$scope.downflag){
                  $scope.downKeyDown();
                  $scope.downflag = true;
                  $scope.$apply();
                }

                break;
        }
     };
     document.onkeyup = function(e) {
         switch (e.keyCode) {
             case 37:
                 //alert('left');
                $scope.leftKeyUp();
                $scope.leftflag = false;
                $scope.$apply();
                 break;
             case 38:
                 //alert('up');
                 $scope.upKeyUp();
                 $scope.upflag = false;
                 $scope.$apply();
                 break;
             case 39:
                 //alert('right');
                 $scope.rightKeyUp();
                $scope.rightflag = false;
                $scope.$apply();
                 break;
             case 40:
                 //alert('down');
                 $scope.downKeyUp();
                 $scope.downflag = false;
                 $scope.$apply();
                 break;
         }
      };
      //Left Button
      $scope.leftKeyDown = function(){
        //console.log("leftKeyDown");
        $http.get("/truck_api/test/move_left")
         .then(function(response) {
             console.log(response);
         });
      };
      $scope.leftKeyUp= function(){
         //console.log("leftKeyUp");
         $http.get("/truck_api/test/stop_horizontal_movement")
          .then(function(response) {
              console.log(response);
          });
      };

      //Up Button
      $scope.upKeyDown = function(){
        //console.log("upKeyDown");
            $http.get("/truck_api/test/move_forward")
             .then(function(response) {
                 console.log(response);
             });
      };
      $scope.upKeyUp= function(){
        // console.log("upKeyUp");
        $http.get("/truck_api/test/stop_vertical_movement")
         .then(function(response) {
             console.log(response);
         });
      };

      //Right Button
      $scope.rightKeyDown = function(){
        //console.log("rightKeyDown");
        $http.get("/truck_api/test/move_right")
         .then(function(response) {
             console.log(response);
         });
      };
      $scope.rightKeyUp= function(){
         //console.log("rightKeyUp");
         $http.get("/truck_api/test/stop_horizontal_movement")
          .then(function(response) {
              console.log(response);
          });
      };

      //down Button
      $scope.downKeyDown = function(){
        //console.log("downKeyDown");
        $http.get("/truck_api/test/move_backward")
         .then(function(response) {
             console.log(response);
         });
      };
      $scope.downKeyUp= function(){
        // console.log("downKeyUp");
        $http.get("/truck_api/test/stop_vertical_movement")
         .then(function(response) {
             console.log(response);
         });
      };
  });
