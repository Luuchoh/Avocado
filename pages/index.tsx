import React, { useEffect, useState } from 'react'

import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import { getAll } from '@services/avocado.services'

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
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default Home
