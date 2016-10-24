angular.module("sportsStore")
.controller("cartSummaryCtrl", function(cart){
  this.cartData = cart.getProducts();
  this.total = function(){
    var total =0;
    for(var i=0; i<this.cartData.length; i++){
      total = total + (this.cartData[i].price * this.cartData[i].count);
    }
    return total;
  }
  this.remove = function(id){
    cart.removeProduct(id);
  }
});
