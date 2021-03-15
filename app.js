
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRo = require('./routes/admin');
const cartRo = require('./routes/cart');
const prodsRo = require('./routes/prods');
const buyRo = require('./routes/orders');
const pool =  require('./utils/database');


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.use('/admin',adminRo);
app.use('/cart',cartRo);
app.use('/orders',buyRo);
app.use('/prods',prodsRo);

app.listen(3000);