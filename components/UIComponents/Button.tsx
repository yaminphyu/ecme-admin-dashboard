import React from 'react'
import { ButtonProps } from '@/types'

export default function Button({
  label,
  handleOnClick,
  imageUrl,
  cusCss,
  disabled = false,
  isBlueButton = false,
}: ButtonProps) {
  return (
    <button
      className={`
        flex-1 rounded-lg flex items-center justify-center gap-2 cursor-pointer
        ${isBlueButton
          ? 'w-full bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 transition'
          : 'hover:bg-gray-50 text-gray-600 py-2 border'
        }
        ${cusCss}
      `}
      disabled={disabled}
      onClick={handleOnClick}
      >
      {imageUrl && <img src={imageUrl} className="w-5 h-5" />}
      {label}
    </button>
  )
}
