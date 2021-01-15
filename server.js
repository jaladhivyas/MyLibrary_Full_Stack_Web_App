//require('dotenv').config();
//if(process.env.NODE_ENV !== 'production'){
  //  console.log('Hello');
   // require('dotenv').parse();
//}
const express = require('express');
const multer = require('multer');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bookRouter = require('./routes/books');

const mongoose = require('mongoose');
 app.set('view engine', 'ejs');
 app.set('views',__dirname + '/views');
 app.set('layout','layouts/layout');
 app.use(expressLayouts);
 app.use(express.static('public'));
 app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));
 app.use('/',indexRouter);

 app.use('/authors',authorRouter);
 app.use('/books',bookRouter);
 const PORT = process.env.PORT || 3000;   
mongoose.connect('mongodb+srv://vyasjaladhi:1Pradyuman1@cluster0.ofae0.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology: true })
.then(()=> app.listen(PORT,() => console.log(`Server running on port:${PORT}`)))
.catch((error) => console.log(error.message));


 