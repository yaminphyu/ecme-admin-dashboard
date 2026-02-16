import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '@/components/UIComponents/Input';
import { ForgotFormProps } from '@/types';
import AuthForm from '../AuthForm';
import { faEyeIcon } from '@/util';

export default function ForgotPasswordForm({
  title,
  subTitle,
  authUser,
  isLoading,
  isShow,
  isShowConfirmPass,
  error,
  handlePasswordEye,
  handleOnChange,
  handleSubmit,
  isLoginPage = false,
}: ForgotFormProps) {

  return (
    <AuthForm
      title={title}
      subTitle={subTitle}
      isLoading={isLoading}
      error={error}
      handleSubmit={handleSubmit}
      isLoginPage={isLoginPage}
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

      <div className="mb-4">
        <label htmlFor='newPassword' className="block text-sm font-medium mb-1 text-gray-700">New Password</label>
        <div className="relative">
          <Input
            id="newPassword"
            type={isShow ? 'text' : 'password'}
            name="password"
            placeholder='Enter new password'
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
      
      <div className="mb-5">
        <label htmlFor='confirmPassword' className="block text-sm font-medium mb-1 text-gray-700">Confirm Password</label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={isShowConfirmPass ? 'text' : 'password'}
            name="confirmPassword"
            placeholder='Enter confirm password'
            value={authUser?.confirmPassword}
            handleOnChange={handleOnChange}
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => handlePasswordEye('confirm')}
          >
            <FontAwesomeIcon icon={faEyeIcon(isShowConfirmPass)} className='text-lg' />
          </span>
        </div>
      </div>
    </AuthForm>
  )
}
