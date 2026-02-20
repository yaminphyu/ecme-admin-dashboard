import React from 'react'
import HeaderTitle from '../HeaderTitle'
import { HeaderTitleProps } from '@/types'
import CircleProgress from '../CircleProgressBar'

export default function SalesTarget({
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
          isDropdow={true}
        />

        <div className="px-3 py-6 flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-lg">
              <span className="font-bold text-black text-3xl">1.3K</span> / 1.8K Units
            </p>
            <p className="text-gray-500">Made this month year</p>
          </div>
          <CircleProgress value={72} />
        </div>
      </div>
    </div>
  )
}
