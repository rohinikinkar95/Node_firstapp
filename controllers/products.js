const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add-product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product({
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
    });
    console.log(product, "product//////===>");
    product
        .save()
        .then(result => {

            console.log('............../created products')
            res.redirect('/admin/products');
        })
        .catch(err =>
            console.log(err));
};


exports.getProducts = (req, res, next) => {
    console.log("Fetching products...");
    Product.find()
        .then(products => {
            console.log(products);
            res.render('shop', {
                prods: products,
                pageTitle: 'Shop',
                path: '/'
            });
        })
        .catch(err => console.log("Error fetching products :", err));
}
