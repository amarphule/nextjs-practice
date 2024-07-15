'use client'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const ProductDetails = () => {
  const {details} = useParams()
  // console.log(details);
  
  // http://localhost:3000/products/1?search=amar
  const search = useSearchParams()

  console.log(search.get('search'));
  

  return (
    <h1 className='text-center text-3xl'>Product Details page</h1>
  )
}

export default ProductDetails