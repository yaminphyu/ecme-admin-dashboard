import { NextPageWithAuth } from '@/types';
import React from 'react'

const CustomerList: NextPageWithAuth = () => {
  return (
    <div>
      <h1 className='text-2xl text-black'>hello</h1>
    </div>
  )
}

CustomerList.requiresAuth = true;
export default CustomerList;