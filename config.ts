import { FolderIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { ProductItemProps, SalesTargetProps, SidebarProps } from "./types";

export const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string;
export const FIREBASE_AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string;
export const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;

export const SIDE_BAR: SidebarProps[] = [
  { id: 1, label: 'Dashboard', icon: HomeIcon },
  { id: 1, label: 'Users', icon: UserIcon },
  { id: 1, label: 'Projects', icon: FolderIcon },
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
    sold: 320,
    image: '/products/product-1.jpg',
    percentage: 30
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 320,
    image: '/products/product-1.jpg',
    percentage: 20
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 320,
    image: '/products/product-1.jpg',
    percentage: 20
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 320,
    image: '/products/product-1.jpg',
    percentage: 20
  },
  {
    id: 10001,
    name: 'Flörven',
    price: '252.00',
    quantity: 46,
    sold: 320,
    image: '/products/product-1.jpg',
    percentage: 20
  },
]