import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import { getAll } from '@services/avocado.services'

export const getStaticProps: GetStaticProps = async () => {
  const productList = await getAll()

  return {
    props: {
      productList,
    }, // will be passed to the page component as props
  }
}

const Home = ({ productList }: { productList: TProduct[] }) => {

  return (
    <Layout>
      <KawaiiHeader />
      <Link href='/yes-or-not' legacyBehavior ><a className='random'>Should I eat an avocado today?</a></Link>
      <ProductList products={productList} />
      <style jsx>{`
        .random {
          display: inline-block;
          width: 100%;
          text-align: center;
          margin: 0 0 16px ;
          color: black;
          font-style: oblique;
          font-weight: bold;
        }
      `}</style>
    </Layout>
  )
}

export default Home
