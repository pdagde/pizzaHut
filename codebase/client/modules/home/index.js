/**
 * Created by Pravin on 29/03/2018.
 */

angular.module('appHome',['pizzaHutCodeCtrl'])
    .config(function($stateProvider) {
        $stateProvider

            .state('app.pizza', {
                url: "/pizza",
                templateUrl: "modules/home/template/pizza.html",
                controller : "pizzaCtrl"
            })
            
           


    });
