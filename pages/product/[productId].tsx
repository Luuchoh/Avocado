import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getOne } from 'services/avocado.services'

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
    <>
      <div>ProductItem: { productId }</div>
      <p>Product name: { product?.name }</p>
    </>

  )
}

export default ProductItem