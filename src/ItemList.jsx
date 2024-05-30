import React from 'react'
import "./styles/productos.css"
import { Link } from 'react-router-dom'

export const ItemList = ({ data }) => {
    return (
        <Link className='linkProducto' to={`/detalle/${data.id}`}>
            <div className='tarjetas'>
                <div className='titulo'>
                    <h2> {data.Nombre} </h2>
                </div>
                <div className='Imagen'>
                    <img src={data.Imagen} alt={data.Nombre} />
                </div>
                <div className='descripcion'>
                    <p> ${data.Precio} USD </p>
                </div>
            </div>
        </Link>
    )
}
