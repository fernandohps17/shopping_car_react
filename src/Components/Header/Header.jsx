import React from 'react'
import './Header.scss'
import Filters from '../Filters/Filters'

const Header = ({changeFilters}) => {
    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}

export default Header
