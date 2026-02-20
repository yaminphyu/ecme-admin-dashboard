import React from 'react'
import MonthlyDropdown from './MonthlyDropdown'
import { HeaderTitleProps } from '@/types'

export default function HeaderTitle({
  label,
  handleMonthlyToggle,
  saleTargetTime,
  isMonthlyToggle,
  monthlyRef,
  isDropdow = false
}: HeaderTitleProps) {
  return (
    <div className="flex justify-between items-center w-full h-16 px-3 py-5">
      <h3 className="text-black text-xl font-semibold">
        {label}
      </h3>

      <MonthlyDropdown
        handleMonthlyToggle={handleMonthlyToggle}
        saleTargetTime={saleTargetTime}
        isMonthlyToggle={isMonthlyToggle}
        monthlyRef={monthlyRef}
        isDropdow={isDropdow}
      />
    </div>
  )
}
