import React, { useState, useId } from 'react';
import './Filter.scss';
import { useFilters } from '../../Hook/useFilters';

const Filters = () => {

    const { filters, setFilters } = useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const [minPriceFilterId] = useId()
    const [categoryFilterId] = useId()

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div className='div'>
                <label htmlFor={minPriceFilterId}>Price a partir de:</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='2000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div className='div'>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters