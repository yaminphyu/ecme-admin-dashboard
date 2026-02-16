import { FolderIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import { SidebarProps } from "./types";

export const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string;
export const FIREBASE_AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string;
export const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;

export const SIDE_BAR: SidebarProps[] = [
  { id: 1, label: 'Dashboard', icon: HomeIcon },
  { id: 1, label: 'Users', icon: UserIcon },
  { id: 1, label: 'Projects', icon: FolderIcon },
];
