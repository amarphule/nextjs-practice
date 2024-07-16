import { NextPage } from 'next';
import React from 'react'

type Params = {
    id: string;
    searchParams: string;
  };
  
  type UserProps = {
    params: Params;
  };
const User: NextPage<UserProps> = ({params}) => {    
    const {id} = params
    
  return (
    <h1 className='text-center text-3xl'>User page</h1>
  )
}

export default User