import React, { useState } from 'react';
import './Filter.scss';

const Filters = ({onChange}) => {

    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        // minuto 27 segundo 02
    }

    return (
        <section className='filters'>
            <div className='div'>
                <label htmlFor="price">Price a partir de:</label>
                <input
                    type="range"
                    id='price'
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div className='div'>
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="all">Todos</option>
                    <option value="Laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export default Filters