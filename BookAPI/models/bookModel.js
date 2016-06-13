/**
 * Created by z013n8g on 5/25/16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre:{type:String},
    read: {type: Boolean,default:false}
})
module.exports = mongoose.model('Book',bookModel);