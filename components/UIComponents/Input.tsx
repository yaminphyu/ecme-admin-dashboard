import React from 'react'
import { InputProps } from '@/types'

export default function Input({
  id,
  type = 'text',
  name,
  value,
  placeholder,
  handleOnChange,
  cusCss,
  disabled = false,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700
        ${cusCss}  
      `}
      onChange={handleOnChange}
    />
  )
}
