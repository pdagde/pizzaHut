/**
 * Created by Pravin on 29/03/2018.
 */

angular.module('pizzaHutCodeCtrl',[])
    .controller('pizzaCtrl',function ($scope,$state,$http,$window) {
       $scope.checkUser = function(){
        $http.post('/pizza/allPizz',{}).then(function (response) {
                 $scope.allPizza = response.data;
              });
       }
       $scope.checkUser();
     $scope.viwPizza = function(pizza){
      var discountPrice = (pizza.price * pizza.discount)/100;
      $scope.viewPizza = pizza;
      $scope.viewPizza.discountPrice = discountPrice;
      $scope.viewPizza.BillPrice = pizza.price - discountPrice;
     }  

     $scope.orderPizza = function(pizza){
      var discountPrice = (pizza.price * pizza.discount)/100;
      $scope.viewPizza = pizza;
      $scope.viewPizza.discountPrice = discountPrice;
      $scope.viewPizza.BillPrice = pizza.price - discountPrice;
      $http.post('/pizza/newpostorder',$scope.viewPizza).then(function (response) {
                 $scope.allPizza = response.data;
               swal({
               title: "Thank You!",
               text: "Your order will be delivered in 30 minutes!",
               icon: "success",
             });

      });
     }
})
