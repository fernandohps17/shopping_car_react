import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from '../Icons/Icons'
import './Cart.scss'
import React, { useId } from 'react'

const Cart = () => {

    const cartCheckboxID = useId()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxID}>
                <CartIcon />
            </label>

            <input id={cartCheckboxID} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    <li>
                        <img src="https://m.media-amazon.com/images/I/61p1I5f5ApL.jpg" alt="iPhone" />
                        <div>
                            <strong>Iphone</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

export default Cart
