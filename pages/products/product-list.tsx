import React from 'react'
import { NextPageWithAuth } from '@/types';

const ProductList: NextPageWithAuth = () => {
  return (
    <div className="w-full min-h-screen flex rounded-lg relative">
      <div className="flex justify-between w-full gap-5">
        <h2 className='text-black'>hello product list</h2>
      </div>
    </div>
  )
}


ProductList.requiresAuth = true;
export default ProductList;