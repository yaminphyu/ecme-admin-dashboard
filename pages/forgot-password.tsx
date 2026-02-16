import React from 'react';
import AuthSideImage from '@/components/Auth/AuthSideImage';
import useAuth from '@/hooks/useAuth';
import ForgotPasswordForm from '@/components/Auth/ForgotPasswordForm';

export default function ForgotPassword() {
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
      <ForgotPasswordForm
        title='Welcome back!'
        subTitle='Please enter your credentials to sign in!'
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
  );
}
