import { createContext } from "react"

// 1. Crear el Contexto
export const FilterContext = createContext()

// 2. Crear el Provider para proveer el context
export function FilterProvider ({ children }) {
    return (
        <FilterContext.Provider value={{
            category: 'laptops',
            minPrice: 0
        }}>
            {children}
        </FilterContext.Provider>
    )
}

// minuto 52