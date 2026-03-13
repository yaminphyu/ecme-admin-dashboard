import React from 'react'
import MonthlyDropdown from './MonthlyDropdown'
import { HeaderTitleProps } from '@/types'
import Button from './UIComponents/Button';
import { faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function HeaderTitle({
  label,
  handleMonthlyToggle,
  saleTargetTime,
  isMonthlyToggle,
  monthlyRef,
  isDropdow = false,
  type = 'dashboard'
}: HeaderTitleProps) {
  return (
    <div className="flex justify-between items-center w-full h-16 px-3 py-5">
      <h3 className="text-black text-xl font-semibold">
        {label}
      </h3>

      {
        type === 'dashboard'
          ? <MonthlyDropdown
              handleMonthlyToggle={handleMonthlyToggle}
              saleTargetTime={saleTargetTime}
              isMonthlyToggle={isMonthlyToggle}
              monthlyRef={monthlyRef}
              isDropdow={isDropdow}
            />
          : <div className='flex flex-row justify-between items-center gap-3'>
              <Button
                handleOnClick={() => {}}
                label='Export'
                disabled={false}
                cusCss='px-5'
                icon={faDownload}
              />
              <Button
                handleOnClick={() => {}}
                label='Add products'
                disabled={false}
                icon={faPlus}
                isBlueButton={true}
              />
            </div>
      }
    </div>
  )
}
