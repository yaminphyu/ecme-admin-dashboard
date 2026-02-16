import React from 'react';
import AuthSideImage from '@/components/Auth/AuthSideImage';
import LoginForm from '@/components/Auth/LoginForm';
import useAuth from '@/hooks/useAuth';

export default function Login() {
  const {
    isLoading,
    isShow,
    authUser,
    error,
    handlePasswordEye,
    handleOnChange,
    handleSubmitLogin,
    handleLoginWithGoogle
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
        handleLoginWithGoogle={handleLoginWithGoogle}
      />
      <AuthSideImage />
    </div>
  );
}
