var mongoose = require('mongoose');

// Genre Schema
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    image_url:{
        type: String,
    },

    buy_url:{
        type: String,
    },

    created_date:{
        type: Date,
        default: Date.now
    }


});

var Book = module.exports = mongoose.model('Book', bookSchema)

// Get Genres
module.exports.getBooks = function(callback,limit){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id,callback){
    Book.findById(id, callback)
}

module.exports.addBook = function(book,callback){
    Book.create(book, callback)
}

module.exports.updateBook = function(id,book,options,callback){
    var query = {_id: id};
    var update ={
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query,update,options,callback)
}

module.exports.removeBook = function(id,callback){
    var query = {_id: id};
    Book.remove(query,callback)
}