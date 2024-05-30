import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./styles/listContainer.css"
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore"
import { ItemList } from './ItemList';

export const ItemListContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()

  useEffect(() => {
    const queryDb = getFirestore()
    const queryCollection = collection(queryDb, "Productos")

    const fetchData = async () => {
      let queryResult;
      if (idCategoria) {
        const queryFilter = query(queryCollection, where("categoria", "==", idCategoria))
        queryResult = await getDocs(queryFilter)
      } else {
        queryResult = await getDocs(queryCollection)
      }
      const fetchedData = queryResult.docs.map(product => ({ id: product.id, ...product.data() }))

      // Delay updating the data state by 1 second
      setTimeout(() => {
        setData(fetchedData)
        setLoading(false)
      }, 2000)
    }

    fetchData()
  }, [idCategoria])

  return (
    <>
      <ul className='listaCategorias'>
        <li>
          <Link className='link' to={"/productos"}>Todos</Link>
        </li>
        <li>
          <Link className='link' to={"/productos/Auriculares"}>Auriculares</Link>
        </li>
        <li>
          <Link className='link' to={"/productos/Smart"}>Smart</Link>
        </li>
      </ul>
      <div className='contenedorProductos'>
        {loading ? (
          <img className='loading' src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!sw800" alt="Imagen de carga" />
        ) : (
          data.map(productoData => {
            return <ItemList key={productoData.id} data={productoData} />;
          })
        )}
      </div>
    </>
  )
}
