import { mapAuthError } from '@/modules/auth/auth.errors';
import { login, register } from '@/modules/auth/auth.service';
import { LoginAuthUser, SignupAuthUser } from '@/types';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function useAuth() {
  const [isLoading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<LoginAuthUser>({
    email: 'admin2026@gmail.com',
    password: '123456'
  });
  const [signupAuthUser, setSignupAuthUser] = useState<SignupAuthUser>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const router = useRouter();

  const handlePasswordEye = (field: 'password' | 'confirm') => {
    if (field === 'password') setIsShow(v => !v);
    else setIsShowConfirmPass(v => !v);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setAuthUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnChangeForSignup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setSignupAuthUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      await login(authUser?.email.trim(), authUser?.password);
      router.replace('/');
    } catch (err: any) {
      setError(mapAuthError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSignup = async () => {
    setLoading(true);
    setError(null);

    if (signupAuthUser?.password.trim() !== signupAuthUser?.confirmPassword?.trim()) {
      setError(mapAuthError('auth/password-not-the-same'));
      setLoading(false);
      return;
    }

    try {
      await register(signupAuthUser?.email.trim(), signupAuthUser?.password);
      router.replace('/');
    } catch (err: any) {
      setError(mapAuthError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    isShow,
    isShowConfirmPass,
    authUser,
    signupAuthUser,
    error,
    handlePasswordEye,
    handleOnChange,
    handleSubmitLogin,
    handleSubmitSignup,
    handleOnChangeForSignup
  }
}
