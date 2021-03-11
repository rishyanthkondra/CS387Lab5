const pool= require('../utils/database');
module.exports = class Cart{

    constructor(){
        this.title = "";
        this.image = "";
        this.price = 0;
        this.quantity = 0;
    }

    get_all(){
        return pool.query('SELECT products.title,products.image,products.price,cart.quantity FROM cart inner join products on cart.item_id = products.id and cart.user_id = 1');
    }

    get_credits(){
        return pool.query('SELECT credit from users where user_id = 1');
    }

};