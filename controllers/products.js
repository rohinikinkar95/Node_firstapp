const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add-product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    console.log(product, "product//////===>");
    product.save();
    res.redirect('/');
}
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    console.log(products, "product===>");
    res.render('shop', { prods: products, pageTitle: 'Shop', hasproducts: products.length > 0 });
    });
   

}