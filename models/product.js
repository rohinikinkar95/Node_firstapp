



const fs = require('fs');
const path = require('path');
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        })
    }


    static fetchAll(cb) {
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]); // Return an empty array if there's an error reading the file
            } else {
                try {
                    const products = JSON.parse(fileContent);
                    cb(products);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    cb([]); // Return an empty array if there's an error parsing the JSON
                }
            }
        });
    }
}
