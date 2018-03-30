/**
 * Created by Pravin on 29/03/2018.
 */

'use strict';

var pizza = require("./server_side/controller/api/auth/pizza.js");
module.exports.register = function(router){

 
 router.route('/pizza/allPizz').post(pizza.allPizz);
 router.route('/pizza/newpostorder').post(pizza.newpostorder);

  console.log('routes registered..!');
};

