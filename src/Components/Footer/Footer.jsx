import { useFilters } from '../../Hook/useFilters'
import './Footer.scss'

const Footer = () => {

    const { filters } = useFilters()
    // 1h y 5m


  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⭐ - <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <h3>hola nuevamente</h3>
    </footer>
  )
}

export default Footer
