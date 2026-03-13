import React, { useRef } from 'react'
import { Column, NextPageWithAuth, ProductDisplayProps } from '@/types';
import HeaderTitle from '@/components/HeaderTitle';
import Button from '@/components/UIComponents/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Table from '@/components/Table';
import { PRODUCT_LIST } from '@/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import AnimatedProgressBar from '@/components/AnimatedProgressBar';

const productColumns: Column<ProductDisplayProps>[]  = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "price", label: "Price" },
  { key: "quantity", label: "Quantity" },
  { key: "sold", label: "Sold" },
  {
    key: "actions",
    label: "Actions",
    render: () => (
      <div className="flex gap-4">
        <FontAwesomeIcon
          icon={faEdit}
          className="w-5 h-5 font-semibold cursor-pointer text-gray-700 hover:text-blue-600"
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          className="w-5 h-5 font-semibold cursor-pointer text-gray-700 hover:text-blue-600"
        />
      </div>
    ),
  },
];

const ProductList: NextPageWithAuth = () => {
  const monthlyRef = useRef<HTMLDivElement | null>(null);

  const productList: ProductDisplayProps[] = PRODUCT_LIST?.map((item) => {
    return ({
      id: item?.id,
      name: <span className='text-red-400'>{item?.name}</span>,
      price: item?.price,
      quantity: item?.quantity,
      image: item?.image || '',
      percentage: item?.percentage || 0,
      sold: <AnimatedProgressBar value={item?.sold || 0} max={100} />
    })
  });

  return (
    <>
      <div className="text-black w-full bg-white rounded-2xl p-4">
        <HeaderTitle
          label='Products'
          type='products'
          handleMonthlyToggle={() => { } }
          saleTargetTime={''}
          isMonthlyToggle={false}
          monthlyRef={monthlyRef}
        />
        <div className='flex flex-row w-full my-2 p-2 gap-4'>
          <input type="text" placeholder='Search' className='w-full bg-gray-200 p-3 rounded-lg focus:outline-blue-500'  />
          <Button
            handleOnClick={() => {}}
            label='Filter'
            disabled={false}
            cusCss='px-5'
            icon={faSearch}
          />
        </div>
        <div className='py-2 px-4'>
          <Table<ProductDisplayProps>
            columns={productColumns}
            data={productList}
          />
        </div>
      </div>
    </>
  )
}


ProductList.requiresAuth = true;
export default ProductList;