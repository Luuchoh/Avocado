import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import { getAll, getOne } from '@services/avocado.services'
import ProductSummary from '@components/ProductSummary/ProductSummary'

export const getStaticPaths: GetStaticPaths = async () => {
  const productList = await getAll()
  const paths = productList.map(({ id }) => ({ params: { productId: id } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.productId;
  let product = await getOne(productId as string)
  
  return {
    props: {
      product,
    }, // will be passed to the page component as props
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>

  )
}

export default ProductItem