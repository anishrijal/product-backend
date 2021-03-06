angular.module("cart",[])
.factory("cart", function(){
  var cartData = [];
  return {
    addProduct: function(id, name, price){
      var addedToExistingItem = false;
      for(var i = 0 ; i < cartData.length ; i++){
        if(cartData[i]._id == id){
          cartData[i].count++;
          addedToExistingItem = true;
          break;
        }
      }
      if(!addedToExistingItem){
        cartData.push({
          count: 1, _id: id, price: price, name: name
        })
      }
    },
    removeProduct: function(id){
      for(var i =0; i< cartData.length; i++){
        if(cartData[i]._id == id){
          cartData[i].count--;
          if(cartData[i].count == 0)
          cartData.splice(i,1);
          break;
        }
      }
    },
    getProducts: function(){
      return cartData;
    }
  }
})
.directive("cartSummary", function(cart){
  return {
    restrict : "E",
    templateUrl : "angularjs/components/cart/cartSummary.html",
    controllerAs : "vm",
    controller: function(){
      var cartData = cart.getProducts();
      this.total = function(){
        var total =0;
        for(var i=0; i<cartData.length; i++){
          total +=(cartData[i].price * cartData[i].count);
        }
        return total;
      }
      this.itemCount = function(){
        var total =0;
        for(var i=0; i<cartData.length; i++){
          total += cartData[i].count
        }
        return total;
      }
    }
  }
});
