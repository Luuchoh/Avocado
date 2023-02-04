import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout/Layout'
import { getOne } from '@services/avocado.services'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct>()
  const { query: { productId } } = useRouter()

  const getAvocado = async () => {
    const avocado =  await getOne(productId as string)
    setProduct(avocado)
  }

  useEffect(() => {
    productId && getAvocado()
  }, [productId])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>

  )
}

export default ProductItem