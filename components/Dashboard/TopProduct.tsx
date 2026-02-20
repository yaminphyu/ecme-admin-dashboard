import React from 'react'
import HeaderTitle from '../HeaderTitle'
import { HeaderTitleProps } from '@/types'
import { PRODUCT_LIST } from '@/config'

export default function TopProduct({
  label,
  handleMonthlyToggle,
  saleTargetTime,
  isMonthlyToggle,
  monthlyRef
}: HeaderTitleProps) {
  return (
    <div className="text-black w-full bg-white rounded-2xl p-4">
      <div className="flex flex-col w-full h-full">
        <HeaderTitle
          label={label}
          handleMonthlyToggle={handleMonthlyToggle}
          saleTargetTime={saleTargetTime}
          isMonthlyToggle={isMonthlyToggle}
          monthlyRef={monthlyRef}
        />

        <div className="px-3 py-6 flex justify-between items-center">
          <ul className='flex flex-col gap-4 w-full'>
            {
              PRODUCT_LIST?.map((item, index) => {
                return (
                  <div
                    className='flex justify-between'
                    key={index}
                  >
                    <div className='flex gap-2'>
                      <div>
                        <img
                          src={item?.image}
                          alt='product-img'
                          className='w-14 h-14 rounded-lg'
                        />
                      </div>
                      <div className='flex flex-col justify-center'>
                        <p className='text-sm font-semibold'>{item?.name}</p>
                        <p className='text-sm text-gray-500'>Sold: {item?.sold}</p>
                      </div>
                    </div>
                    <div className='flex px-2 h-8 text-sm justify-center items-center rounded-md text-green-600 bg-green-100 font-semibold'>+{item?.percentage}%</div>
                  </div>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
