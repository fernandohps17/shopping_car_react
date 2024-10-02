import { useCart } from '../../Hook/useCart'
import { useFilters } from '../../Hook/useFilters'
import './Footer.scss'

const Footer = () => {

  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(cart, null, 2)
      }
      <h4>Prueba técnica de React ⭐ - <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}

export default Footer
