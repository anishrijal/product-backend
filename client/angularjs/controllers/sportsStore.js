angular.module("sportsStore")
.constant("dataUrl", "http://localhost:3000/products")
.controller("sportsStoreCtrl", function ($http, dataUrl) {
  this.data ={};
  var self =this;
  $http.get(dataUrl)
    .then(function(response){
    self.data.products =response.data;
  })
  .catch(function(error){
    self.error =error;
  });
});
