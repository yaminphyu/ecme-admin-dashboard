import React, { useState } from 'react'

export default function useDashboard() {
  const [isMonthlyToggle, setIsMonthlyToggle] = useState<boolean>(false);
  const [isOverviewMonthlyToggle, setIsOverviewMonthlyToggle] = useState<boolean>(false);
  const [saleTargetTime, setSaleTargetTime] = useState<string>('monthly')

  const handleMonthlyToggle = () => setIsMonthlyToggle(v => !v);
  const handleOverviewMonthlyToggle = () => setIsOverviewMonthlyToggle(v => !v);
  const handleSaleTarget = (e) => {
    const { value } = e.target;
    console.log({ value });
  }

  return {
    saleTargetTime,
    isMonthlyToggle,
    isOverviewMonthlyToggle,
    handleMonthlyToggle,
    handleOverviewMonthlyToggle,
    handleSaleTarget,
  }
}
