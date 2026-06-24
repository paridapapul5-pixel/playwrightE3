

exports.cartPage=class cartPage{
    constructor(page){
        this.page=page;
        this.search = '#small-searchterms';
        this.searchBtn='.search-box-button';
        this.cartButton='.product-box-add-to-cart-button';

    }
    //method of adding a particular product to cart
    async addproducttocart(bookName){
     await this.page.locator(this.search).fill(bookName);
     await this.page.locator(this.searchBtn).click();
     await this.page.locator(this.cartButton).click();

    }

}