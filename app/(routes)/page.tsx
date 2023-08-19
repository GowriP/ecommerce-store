import Container from '@/components/ui/container'
import Billboard from '@/components/billboard'
import React from 'react'
import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

const Homepage = async () => {

  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("64a14be9-818a-42f3-b026-e7a8803fcd53")

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}/>
      <div className='flex flex-col gap-x-8 sm:px-6 lg:px-8'>
        <ProductList title="Featured Products" items={products} />
      </div>
      </div>
    </Container>
  )
}

export default Homepage