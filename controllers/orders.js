const Orders = require('../models/orders');


exports.order = async (req,res,next) => {

    const orderitem = new Orders();
    const credits = await orderitem.get_credits().catch(err => console.log(err));
    const cartvalue = await orderitem.get_cartvalue().catch(err => console.log(err));
    if(credits.rows[0].credit >= cartvalue.rows[0].cartvalue){
        await orderitem.order(cartvalue.rows[0].cartvalue).catch(err => console.log(err));
    }

    res.redirect('/orders');
};

exports.get_orders = async (req,res,next) => {
    const orderitem = new Orders();
    const orders = await orderitem.get_all().catch(err => console.log(err));
    res.render('includes/orders.ejs', {
        pageTitle: 'Orders',
        path: '/orders',
        editing: false,
        items: orders.rows
    });
};