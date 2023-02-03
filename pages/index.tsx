import React, { useEffect, useState } from 'react'
import { getAll } from '../services/avocado.services'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  const getAllAvocados = async () => {
    const avocados = await getAll()
    setProductList(avocados)
  }
  
  useEffect(() => {
    getAllAvocados()
  }, [])

  return (
    <div>
      <h1>Avocados</h1>
      <>
        {productList?.map((avocado: TProduct) => (
          <div key={avocado.id}>{avocado.name}</div>
        ))}
      </>
    </div>
  )
}

export default Home
