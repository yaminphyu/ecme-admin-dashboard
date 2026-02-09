import React from 'react';
import AuthSideImage from '@/components/Login/AuthSideImage';
import LoginForm from '@/components/Login/LoginForm';
import useAuth from '@/hooks/useAuth';

export default function Login() {
  const {
    isLoading,
    isShow,
    authUser,
    error,
    handlePasswordEye,
    handleOnChange,
    handleSubmitLogin
  } = useAuth();

  return (
    <div className="min-h-screen w-full flex p-6">
      <LoginForm
        title='Welcome back!'
        subTitle='Please enter your credentials to sign in!'
        authUser={authUser}
        isShow={isShow}
        error={error}
        handleOnChange={handleOnChange}
        handlePasswordEye={handlePasswordEye}
        handleSubmit={handleSubmitLogin}
        isLoading={isLoading}
        isLoginPage={true}
      />
      <AuthSideImage />
    </div>
  );
}
