import React from 'react'
import './Products.scss';
import { AddToCartIcon } from '../Icons/Icons'
import { useCart } from '../../Hook/useCart';

const Products = ({ products }) => {

  const { addToCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }


  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => (
            <li key={product.id} >
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main >
  )
}
// 1h 27m 40s video midulive tienda y carrito con react
export default Products
