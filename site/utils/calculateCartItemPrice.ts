import { ProductCartState as CartItem } from 'context/CartContext';
import { DProduct } from 'types/types';

export default (products: DProduct[]) => (cartItemId: string, cartItem: CartItem): number => {

    // const product = products.find(product=>product.id === cartItem.productId)
    // if(!product){
    //     return 0
    // }

    // const 
    // return [ ]
    return 0
    //select product
    //select option price using product.options.find or product.price or default to 0
    //select all additions price using .product.additions.find
    //multiply by quantity


}