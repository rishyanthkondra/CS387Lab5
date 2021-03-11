const Cart = require('../models/cart');


exports.get_cart = async (req,res,next) => {

    const cartitem = new Cart();
    const credits = await cartitem.get_credits();
    const cartitems = await cartitem.get_all();

    res.render('includes/cart.ejs', {
        pageTitle: 'Cart',
        path: '/cart',
        editing: false,
        credits: credits.rows[0].credit,
        items: cartitems.rows
    });


};