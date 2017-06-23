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

    function getKeys() {
      // $http.get("/etc_api/test/getKeys")
      //  .then(function(response) {
      //      console.log(response);
      //      $scope.rowCollection = response;
      // });
      console.log("fetching keys");
    }
    getKeys();

    $scope.rowCollection = [
            {userId: '4baa56f1230048567300485c', userName: 'Sanjeev Hegde', address: '0xe99cc1176d64139bd6c20afe675911566db14a0a', keyFileName: 'file1'},
            {userId: 'tbaa46f1230048567300485c', userName: 'Akshay Naik', address: '0xbdedb0f41c79e4cf40dfef931bd5a5d6ab059325', keyFileName: 'file2'},
            {userId: 'jbaahvf1230048567300485c', userName: 'Mike', address: '0xa1eb012a4e53e97f9908a1d5b604c1d65ed68ea5', keyFileName: 'file3'}
    ];

    $scope.addUser = function(){
        console.log("closing");
        console.log($scope.name,$scope.password);
        $http.post("/etc_api/test/addUser",{userName:"userName","password":"password"})
         .then(function(response) {
             console.log(response);
             getKeys();
        });
        angular.element('#myModal').modal('hide');
    };

      // $scope.downKeyUp= function(){
      //   // console.log("downKeyUp");
      //   $http.get("/truck_api/test/stop_vertical_movement")
      //    .then(function(response) {
      //        console.log(response);
      //    });
      // };
  });
