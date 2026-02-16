import React from 'react'
import SocialLogin from './Auth/SocialLogin'
import { AuthFormProps } from '@/types'
import Button from './UIComponents/Button'

export default function AuthForm({
  children,
  title,
  subTitle,
  isLoading,
  error,
  handleSubmit,
  isLoginPage = false,
  handleLoginWithGoogle
}: AuthFormProps) {
  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <div className="w-full max-w-sm">
        <div className="mb-6">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-1 text-black">{title}</h1>
        <p className="text-gray-700 mb-8">{subTitle}</p>
        {children}

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <Button
          handleOnClick={handleSubmit}
          label='Sign In'
          disabled={isLoading}
          isBlueButton={true}
        />

        <SocialLogin
          isLoginPage={isLoginPage}
          handleLoginWithGoogle={handleLoginWithGoogle || (() => {})}
        />
      </div>
    </div>
  )
}
