const pool= require('../utils/database');
module.exports = class Orders{

    constructor(){
        this.title = "";
        this.image = "";
        this.price = 0;
        this.quantity = 0;
    }

    async order(cartvalue){
       await pool.query('INSERT into orders(user_id,item_id,quantity) select cart.user_id,cart.item_id,coalesce((select quantity from orders where user_id = 1 and item_id = cart.item_id),0)+cart.quantity from cart where user_id = 1;');
        await pool.query('DELETE from cart where user_id = 1;')
        return pool.query('UPDATE users set credit = credit-$1 where user_id = 1;',[cartvalue]);
    }
    get_cartvalue(){
       return pool.query('SELECT sum(products.price*cart.quantity) as cartvalue FROM cart inner join products on cart.item_id = products.id where cart.user_id = 1 group by cart.user_id;');
    }
    get_credits(){
        return pool.query('SELECT credit from users where user_id = 1');
    }

};