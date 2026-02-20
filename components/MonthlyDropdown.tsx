import React, { RefObject } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Select from './UIComponents/Select';
import { SALES_TARGET } from '@/config';
import Link from 'next/link';
import { route } from '@/route';

type MonthlyDropdownProps = {
  handleMonthlyToggle: () => void;
  saleTargetTime: string;
  isMonthlyToggle: boolean;
  monthlyRef: RefObject<HTMLDivElement | null>;
  isDropdow: boolean;
}

export default function MonthlyDropdown({
  handleMonthlyToggle,
  saleTargetTime,
  isMonthlyToggle,
  monthlyRef,
  isDropdow = false
}: MonthlyDropdownProps) {
  const { PRODUCT_LIST } = route;

  return (
    <div className="relative z-10">
      {
        isDropdow ? (
          <div
            className="flex items-center gap-1 rounded-md px-3 py-2 shadow bg-gray-200 cursor-pointer w-28"
            onClick={handleMonthlyToggle}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <span className="text-gray-700 capitalize font-semibold">{saleTargetTime}</span>
            <ChevronDownIcon className="w-4 h-4 text-black" />
          </div>
        ) : <div className='rounded-md py-2 px-3 shadow-2xl border border-gray-300 bg-gray-50 cursor-pointer'>
          <Link href={PRODUCT_LIST}>View all</Link>
        </div>
      }

      {
        isMonthlyToggle && isDropdow && (
          <Select
            cusRef={monthlyRef}
            cusCss="right-0 top-full mt-1 w-28 bg-gray-200"
            isToggle={isMonthlyToggle}
            onClose={handleMonthlyToggle}
          >
            <div className="flex flex-col text-sm">
              {SALES_TARGET?.map((item, index) => {
                return (
                  <div
                    className={`
                      flex items-center gap-1 px-4 py-2 rounded-md hover:bg-blue-100 text-left font-semibold cursor-pointer
                      ${saleTargetTime === item?.value ? 'text-blue-500' : 'text-gray-500 hover:text-gray-600'}
                    `}
                  >
                    {item?.label}
                  </div>
                )
              })}
            </div>
          </Select>
        )
      }
    </div>
  )
}
