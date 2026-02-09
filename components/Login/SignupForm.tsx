import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '@/components/UIComponents/Input';
import { SignupFormProps } from '@/types';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import AuthForm from '../AuthForm';

export default function SignupForm({
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
}: SignupFormProps) {
  const faEyeIcon = React.useMemo(
    () => (isShow ? faEye : faEyeSlash),
    [isShow]
  );
  const faEyeConfirmPassIcon = React.useMemo(
    () => (isShowConfirmPass ? faEye : faEyeSlash),
    [isShowConfirmPass]
  );

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
        <label htmlFor='username' className="block text-sm font-medium mb-1 text-gray-700">Username</label>
        <Input
          id="username"
          type="text"
          name="username"
          placeholder='Enter username'
          value={authUser?.username}
          handleOnChange={handleOnChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='email' className="block text-sm font-medium mb-1 text-gray-700">Email</label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder='Enter email'
          value={authUser?.email}
          handleOnChange={handleOnChange}
        />
      </div>

      <div className="mb-4">
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
            <FontAwesomeIcon icon={faEyeIcon} className='text-lg' />
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
            <FontAwesomeIcon icon={faEyeConfirmPassIcon} className='text-lg' />
          </span>
        </div>
      </div>
    </AuthForm>
  )
}
