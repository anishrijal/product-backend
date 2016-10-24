angular.module("sportsStore")
  .constant("productListActiveClass", "btn-primary")
  .constant("productListPageCount", 3)
  .controller("productListCtrl", function(productListActiveClass, productListPageCount, cart){
    var selectedCategory = null;
    this.selectedPage = 1;
    this.pageSize = productListPageCount;
    this.selectedCategory = function(newCategory){
      selectedCategory = newCategory;
      this.selectedPage = 1;
    }
    this.selectPage =function(newPage){
      this.selectedPage = newPage;
    }
    this.categoryFilterFn = function(product){
      return selectedCategory == null ||
      product.category == selectedCategory;

    }
    this.getCategoryClass =function(category){
      return selectedCategory == category ? productListActiveClass : "";
    }
    this.getPageClass = function(page){
      return this.selectedPage == page ? productListActiveClass : "";
    }

    this.addProductToCart = function(product){
      cart.addProduct(product._id, product.name, product.price);
    }

  });
