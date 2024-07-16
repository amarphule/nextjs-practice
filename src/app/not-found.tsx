import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='text-center'>
    <h1> Page not found </h1>
    <Link href="/" className='text-xl border shadow-md p-2'>GO home</Link>
    </div>
  )
}

export default NotFound