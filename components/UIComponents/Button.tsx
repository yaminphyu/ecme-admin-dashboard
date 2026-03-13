import React from 'react'
import { ButtonProps } from '@/types'
import Spinner from '../Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({
  label,
  handleOnClick,
  imageUrl,
  cusCss,
  disabled = false,
  isBlueButton = false,
  icon
}: ButtonProps) {
  return (
    <button
      className={`
        rounded-lg inline-flex items-center justify-center gap-2 cursor-pointer font-semibold
        ${isBlueButton
          ? 'bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-500 transition'
          : 'text-gray-600 hover:text-blue-600 py-2 border hover:border-2 border-gray-600 hover:border-blue-600'
        }
        ${cusCss}
      `}
      disabled={disabled}
      onClick={handleOnClick}
      >
      {icon && <FontAwesomeIcon icon={icon} className='w-9 h-9' />}
      {disabled && <Spinner />}
      {imageUrl &&
        <img
          alt="icon"
          src={imageUrl}
          className="w-5 h-5"
        />
      }
      {label}
    </button>
  )
}
