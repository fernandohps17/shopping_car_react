import React from 'react'
import './Products.scss';
import { AddToCartIcon } from '../Icons/Icons'
import { useCart } from '../../Hook/useCart';

const Products = ({ products }) => {

  const { addToCart, cart } = useCart()


  return (
    <main className='products'>
      <ul>
        {
            products.slice(0, 10).map(product => (
                <li key={product.id}>
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
    </main>
  )
}

export default Products
