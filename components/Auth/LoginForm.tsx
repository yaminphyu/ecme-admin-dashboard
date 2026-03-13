import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '@/components/UIComponents/Input';
import { LoginFormProps } from '@/types';
import AuthForm from '../AuthForm';
import { faEyeIcon } from '@/util';
import Link from 'next/link';

export default function LoginForm({
  title,
  subTitle,
  authUser,
  isLoading,
  isShow,
  error,
  handlePasswordEye,
  handleOnChange,
  handleSubmit,
  handleLoginWithGoogle,
  isLoginPage = false,
}: LoginFormProps) {

  return (
    <AuthForm
      title={title}
      subTitle={subTitle}
      isLoading={isLoading}
      error={error}
      handleSubmit={handleSubmit}
      isLoginPage={isLoginPage}
      handleLoginWithGoogle={handleLoginWithGoogle}
    >
      <div className="mb-4">
        <label htmlFor='email' className="block text-sm font-medium mb-1 text-gray-700">Email</label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder='Enter username'
          value={authUser?.email}
          handleOnChange={handleOnChange}
        />
      </div>

      <div className="mb-2">
        <label htmlFor='password' className="block text-sm font-medium mb-1 text-gray-700">Password</label>
        <div className="relative">
          <Input
            id="password"
            type={isShow ? 'text' : 'password'}
            name="password"
            placeholder='Enter password'
            value={authUser?.password}
            handleOnChange={handleOnChange}
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => handlePasswordEye('password')}
          >
            <FontAwesomeIcon icon={faEyeIcon(isShow)} className='text-lg' />
          </span>
        </div>
      </div>

      <div className="text-sm mb-6">
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot password
        </Link>
      </div>
    </AuthForm>
  )
}
