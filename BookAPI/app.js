var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');



var db ;
if(process.env.ENV == 'Test'){
    db = mongoose.connect('mongodb://localhost/bookAPI_test',function(err){
        if(err){
        console.log('connection error ',err);
    }
    else{
        console.log('connection successful');
    }
});
}
else{
    db = mongoose.connect('mongodb://localhost/bookAPI',function(err){
        if(err){
            console.log('connection error ',err);
        }
        else{
            console.log('connection successful');
        }
    });
}

var Book = require('./models/bookModel');


var app = express();

var port =process.env.port || 3000;

bookRouter = require('./routes/bookRoutes')(Book);


app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/api/books',bookRouter);
//app.use('/api/author',authorRouter);

app.get('/',function(req,res){
    res.send("You ****");

});
app.listen(port,function(){
   console.log('Dont mess' + port);
});

module.exports = app;