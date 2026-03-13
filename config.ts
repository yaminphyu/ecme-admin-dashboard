import { ArrowRightStartOnRectangleIcon, FolderIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { ProductItemProps, SalesTargetProps, SidebarProps } from "./types";

export const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string;
export const FIREBASE_AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string;
export const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;

export const SIDE_BAR: SidebarProps[] = [
  { id: 1, label: 'Dashboard', icon: HomeIcon, url: '/' },
  {
    id: 1,
    label: 'Customers',
    icon: UserIcon,
    url: '/customers/customer-list',
    children: [
      { id: 1, label: 'Customer List', icon: UserIcon, url: '/customers/customer-list' },
      { id: 2, label: 'Customer Add', icon: UserIcon, url: '/customers/customer-add' },
    ]
  },
  { id: 1, label: 'Projects', icon: FolderIcon, url: '/projects' },
];

export const PROFILE_CIRCLE: SidebarProps[] = [
  { id: 1, label: 'Profile', icon: UserIcon, url: '/profile' },
  { id: 2, label: 'Profile', icon: UserIcon, url: '/profile' },
  { id: 3, label: 'Profile', icon: UserIcon, url: '/profile' },
  { id: 4, label: 'Sign Out', icon: ArrowRightStartOnRectangleIcon, url: '/sign-out' },
];

export const SALES_TARGET: SalesTargetProps[] = [
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
];

export const PRODUCT_LIST: ProductItemProps[] = [
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 100,
    image: '/products/product-1.jpg',
    percentage: 30
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 20,
    image: '/products/product-1.jpg',
    percentage: 20
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 30,
    image: '/products/product-1.jpg',
    percentage: 20
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 30,
    image: '/products/product-1.jpg',
    percentage: 20
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 20,
    image: '/products/product-1.jpg',
    percentage: 20
  },
];
