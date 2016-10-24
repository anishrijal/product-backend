angular.module("sportsStoreAdmin")
.constant("productUrl", "http://localhost:3000/products/")
.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
})
.controller("productCtrl", function ($resource, productUrl) {
    var self =this;
    self.productsResource = $resource(productUrl + ":id", { id: "@_id" });
    self.listProducts = function () {
        self.products = self.productsResource.query();
}
    self.deleteProduct = function (product) {
        product.$delete().then(function () {
            self.products.splice(self.products.indexOf(product), 1);
        });
}
    self.createProduct = function (product) {
        new self.productsResource(product).$save().then(function (newProduct) {
            self.products.push(newProduct);
            self.editedProduct = null;
        });
}
    self.updateProduct = function (product) {
        product.$save();
        self.editedProduct = null;
    }
    self.startEdit = function (product) {
        self.editedProduct = product;
}
    self.cancelEdit = function () {
        self.editedProduct = null;
}
    self.listProducts();
});
