import { useContext, useState } from "react"
import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products"
import Footer from "./Components/Footer/Footer"
import { products as initialProducts } from './mocks/products.json'
import { FilterContext } from "./Context/filters"

function useFilters() {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const { filters } = useContext(FilterContext)
  console.log({filters})
  const setFilters = () => {}
// minuto 52 segundo 08
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}


function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )

}

export default App