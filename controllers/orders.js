const Orders = require('../models/orders');


exports.order = async (req,res,next) => {

    const orderitem = new Orders();
    const credits = await orderitem.get_credits();
    const cartvalue = await orderitem.get_cartvalue();
    if(credits.rows[0].credit >= cartvalue.rows[0].cartvalue){
        await orderitem.order(cartvalue.rows[0].cartvalue);
    }

    res.redirect('/cart');
};