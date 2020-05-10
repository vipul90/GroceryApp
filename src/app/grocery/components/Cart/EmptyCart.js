import React from 'react'
import EmptyShoppingCart from '../../../assests/images/empty-cart.jpg'

export default function EmptyCart(){
    return(
        <div className="emptyCart">
                <img src={EmptyShoppingCart} alt="Empty Cart description" ></img>
        </div>
    )
}

