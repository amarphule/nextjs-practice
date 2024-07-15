import { redirect } from 'next/navigation'
import React from 'react'

const Account = () => {
  const useIsNull = null
  if(useIsNull == null) redirect("profile")
   
  return (
    <h1 className='text-center text-3xl'>Account page</h1>
  )
}

export default Account