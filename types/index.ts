import type { NextPage } from 'next';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { ReactNode } from 'react';

export type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
  requiresAuth?: boolean;
};

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  requiresAuth?: boolean;
  showLayout?: boolean;
};

export type SignupAuthUser = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginAuthUser = {
  email: string;
  password: string;
};

export type SignupFormProps = {
  title?: string;
  subTitle?: string;
  isLoading: boolean;
  isShow: boolean;
  isShowConfirmPass: boolean;
  error: string | null,
  authUser: SignupAuthUser;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  handlePasswordEye: (field: "password" | "confirm") => void;
  handleSubmit: () => void;
  isLoginPage?: boolean;
};

export type LoginFormProps = {
  title?: string;
  subTitle?: string;
  isLoading: boolean;
  isShow: boolean;
  error: string | null,
  authUser: LoginAuthUser;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>;
  handlePasswordEye: (field: "password" | "confirm") => void;
  handleSubmit: () => void;
  isLoginPage?: boolean;
};

export type AuthFormProps = {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  isLoading: boolean;
  error: string | null,
  handleSubmit: () => void;
  isLoginPage?: boolean;
};

export type ButtonProps = {
  label: string,
  handleOnClick: () => void,
  imageUrl?: string,
  cusCss?: string,
  disabled?: boolean,
  isBlueButton?: boolean,
};

export type InputProps = {
  id: string,
  type?: string,
  name: string,
  value: string,
  placeholder: string,
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  cusCss?: string,
};
