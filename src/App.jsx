import { useState } from "react"
import Header from "./Components/Header/Header"
import Products from "./Components/Products/Products"
import Footer from "./Components/Footer/Footer"
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from "./Hook/useFilters"
import { Cart } from "./Components/Cart"

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )

}

export default App