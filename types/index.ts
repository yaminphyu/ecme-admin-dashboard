import type { NextPage } from 'next';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { ComponentType, ReactNode, RefObject, SVGProps } from 'react';

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
  handleLoginWithGoogle: (type: 'google' | 'github') => void;
};

export type AuthFormProps = {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  isLoading: boolean;
  error: string | null,
  handleSubmit: () => void;
  isLoginPage?: boolean;
  handleLoginWithGoogle?: (type: 'google' | 'github') => void;
};

export type ForgotFormProps = {
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

export type ButtonProps = {
  label: string,
  handleOnClick: () => void,
  imageUrl?: string,
  cusCss?: string,
  disabled?: boolean,
  isBlueButton?: boolean,
  icon?: IconDefinition,
};

export type InputProps = {
  id: string,
  type?: string,
  name: string,
  value: string,
  placeholder: string,
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  cusCss?: string,
  disabled?: boolean,
};

export type MenuItemProps = {
  icon: ReactNode,
  item: SidebarProps,
  cusCss?: string,
  onClick?: () => void,
  collapsed?: boolean,
  isSidebarItemToggle?: boolean;
};

export type SidebarItemProps = {
  id: number,
  label: string,
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  url: string,
};

export type SidebarProps = {
  id: number,
  label: string,
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  url: string,
  children?: SidebarItemProps[]
};

export type MenuListProps = {
  collapsed: boolean;
  isSidebarItemToggle: boolean;
  handleRoute: (item: SidebarProps) => void
};

export type SalesTargetProps = {
  label: string,
  value: string,
};

export type HeaderTitleProps = {
  label: string;
  handleMonthlyToggle: () => void;
  saleTargetTime: string;
  isMonthlyToggle: boolean;
  monthlyRef: RefObject<HTMLDivElement | null>;
  isDropdow?: boolean;
  type?: string;
};

export type ProductItemProps = {
  id: number;
  name: string;
  price: string;
  quantity: number;
  sold: number;
  image?: string;
  percentage?: number;
}

export type ProductDisplayProps = {
  id: number;
  name: React.ReactNode;
  price: string;
  quantity: number;
  sold: React.ReactNode;
  image?: string;
  percentage?: number;
};

export type ProductNameProps = {
  key: string;
  label: string;
};

export type Column<T> = {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

export type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};
