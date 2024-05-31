import React, { useContext } from 'react'
import { ItemQuantitySelector } from './ItemQuantitySelector'
import { CartContext } from './context/CartContext'
import "./styles/cart.css"


export const ItemDetail = ({ data }) => {
    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(data,quantity)
    }

    return (
        <div className='contenedorDetail'>
            <h1>{data.Nombre}</h1>
            <img className='imagen' src={data.Imagen} alt={data.Nombre} />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est. </p>

            <div className='contenedorContador'>
                <ItemQuantitySelector data={data} onAdd={onAdd} />
            </div>
        </div>
    )
}
