import React from 'react'
import AuthSideImage from '@/components/Login/AuthSideImage'
import useAuth from '@/hooks/useAuth';
import SignupForm from '@/components/Login/SignupForm';

export default function Signup() {
  const {
    isLoading,
    isShow,
    isShowConfirmPass,
    signupAuthUser,
    error,
    handlePasswordEye,
    handleOnChangeForSignup,
    handleSubmitSignup
  } = useAuth();

  return (
    <div className="min-h-screen w-full flex p-6">
      <SignupForm
        title='Sign Up'
        subTitle='And lets get started with your free trial'
        authUser={signupAuthUser}
        isShow={isShow}
        isShowConfirmPass={isShowConfirmPass}
        error={error}
        handleOnChange={handleOnChangeForSignup}
        handlePasswordEye={handlePasswordEye}
        handleSubmit={handleSubmitSignup}
        isLoading={isLoading}
      />
      <AuthSideImage />
    </div>
  )
}
