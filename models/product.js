// const fs = require("fs");
// const path = require("path");

// const Cart = require("./cart");

// const p = path.join(
//   path.dirname(require.main.filename),
//   "data",
//   "products.json"
// );

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     getProductsFromFile((products) => {
//       if (this.id) {
//         const existingProductIndex = products.findIndex(
//           (prod) => prod.id === this.id
//         );
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex] = this;
//         fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//           console.log(err);
//         });
//       } else {
//         this.id = Math.random().toString();
//         products.push(this);
//         fs.writeFile(p, JSON.stringify(products), (err) => {
//           console.log(err);
//         });
//       }
//     });
//   }
//   // parse = takes incoming JSON and gives us JavaScript, array or Object
//   // stringyfy = takes JavaScript and convert this to JSON

//   static deleteById(id) {
//     getProductsFromFile((products) => {
//       const product = products.find((prod) => prod.id === id);
//       const updatedProducts = products.filter((prod) => prod.id !== id);
//       fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
//         if (!err) {
//           Cart.deleteProduct(id, product.price);
//         }
//       });
//     });
//   }

//   // Filter also takes an anonymous function and will return me all elements
//   // as part of a new array that do match the criteria my function returns.

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }

//   static findById(id, cb) {
//     getProductsFromFile((products) => {
//       const product = products.find((p) => p.id === id);
//       cb(product);
//     });
//   }
// };

const mongoConnect = require("../utility/database");
class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  SAVE() {}
}

module.exports(Product);
