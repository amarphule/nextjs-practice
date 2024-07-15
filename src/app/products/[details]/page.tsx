'use client'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const ProductDetails = () => {
  const {details} = useParams()
  // details = 1
  
  // http://localhost:3000/products/1?search=amar
  const search = useSearchParams()
  search.get('search'); // amar
  

  return (
    <h1 className='text-center text-3xl'>Product Details page</h1>
  )
}

export default ProductDetails