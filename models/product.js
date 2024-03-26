const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },

});


module.exports = mongoose.model('Product', productSchema);










// const getDb = require('../util/database').getDb;
// module.exports = class Product {
//     constructor(title, imageUrl, price, description,) {
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.price = price;
//         this.description = description;

//     }
//     save() {
//         const db = getDb();
//         return db.collection('products')
//             .insertOne(this)
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             });

//     }


//     static fetchAll() {
//         const db = getDb();
//         return db.collection('products')
//             .find()
//             .toArray()
//             .then(products => {
//                 console.log(products);
//                 return products;
//             })
//             .catch(err => {
//                 console.log(err);
//             }
//             );

//     }
// }
