angular.module("sportsStore")
.constant("dataUrl", "http://localhost:3000/products")
.constant("orderUrl", "http://localhost:3000/orders")
.controller("sportsStoreCtrl", function ($http, $location, dataUrl, orderUrl, cart) {
  this.data ={};
  var self =this;
  $http.get(dataUrl)
    .then(function(response){
    self.data.products =response.data;
  })
  .catch(function(error){
    self.error =error;
  });

  this.sendOrder = function(shippingDetails){
    var order = angular.copy(shippingDetails);
    order.products = cart.getProducts();
    $http.post(orderUrl, order)
      .then(function (res){
        self.data.orderId = res.data._id;
        cart.getProducts().length = 0;
      })
      .catch(function (error){
        self.data.orderError =error;
      })
      .finally(function(){
        $location.path("/complete");
      });
  }
});
