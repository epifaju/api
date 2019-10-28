const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Define collection and schema for Product

let Product = new Schema ({

        ProductName : {
            type : string
        },

        ProductDescription : {

            type : string
        },

        ProductPrice : {

            type : string
        }

},

{
  collection: 'Product'
});

module.exports = mongoose.model('Product', Product);