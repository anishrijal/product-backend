angular.module("sportsStoreAdmin")
.constant("authUrl", "http://localhost:3000/users/login")
.constant("orderUrl", "http://localhost:3000/orders")
.controller("authCtrl", function($http, $location, authUrl){
  var self =this;
  this.authenticate =function(user, pass){
    $http.post(authUrl,{
      username: user,
      password: pass
    },{
      withCredentials: true
    }).then(function(data){
      $location.path("/main");
    }).catch(function(error){
      self.authenticationError =error;
    });
  }
})
.controller("mainCtrl", function(){
  var self =this;
  self.screens = ["Products" , "Orders"];
  self.current =self.screens[0];

  self.setScreen =function(index){
    self.current =self.screens[index];
  }

  self.getScreen =function(){
    return self.current == "Products" ? "angularjs/views/adminProducts.html" : "angularjs/views/adminOrders.html";
  };

})
.controller("orderCtrl", function($http, orderUrl){
  var self =this;

  $http.get(orderUrl, {withCredentials : true})
      .then(function (res){

        self.orders = res.data;
      })
      .catch(function (error){
        self.error =error;
      });
      self.selectedOrder;
      self.selectOrder =function(order){
        self.selectedOrder =order;

      };
      self.calcTotal = function(order){
        var total =0;
        for(var i=0; i<order.products.length; i++){
          total = total + order.products[i].count * order.products[i].price;
        }
        return total;
      };

});
