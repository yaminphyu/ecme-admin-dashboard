import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { getAuth } from "firebase/auth";
import { SidebarProps } from "@/types";

const IconWithHover = ({
  children,
  onToggle,
  cusCss
}: {
  children: ReactNode,
  onToggle?: () => void;
  cusCss?: string
}) => {
  return (
    <div
      className={`hover:bg-gray-300 p-1.5 rounded-full cursor-pointer ${cusCss}`}
      onClick={onToggle ? onToggle : () => {}}
    >
      {children}
    </div>
  )
}
export default function Topbar({
  onToggle,
  handleProfileToggle,
  isProfileToggle,
  handleMobileToggle,
  handleRoute
}: {
  onToggle: () => void,
  handleProfileToggle: () => void,
  isProfileToggle: boolean
  handleMobileToggle: () => void,
  handleRoute: (item: SidebarProps) => void,
}) {
  const auth = getAuth();
  const user = auth.currentUser;
  
  return (
    <>
    <header className="h-20 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <IconWithHover
          onToggle={handleMobileToggle}
          cusCss='lg:hidden'
        >
          <Bars3Icon className="w-6 h-6 text-black cursor-pointer" />
        </IconWithHover>
        <IconWithHover
          onToggle={onToggle}
          cusCss='hidden lg:block'
        >
          <Bars3Icon className="w-6 h-6 text-black cursor-pointer" />
        </IconWithHover>

        <IconWithHover>
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
        </IconWithHover>
      </div>

      <div className="flex items-center gap-5">
        <IconWithHover>
          <BellIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
        </IconWithHover>

        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full cursor-pointer"
          alt="profile"
          onClick={handleProfileToggle}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </div>
    </header>
    <ProfileDropdown
      isProfileToggle={isProfileToggle}
      user={user}
      onClose={handleProfileToggle}
      handleRoute={handleRoute}
    />
    </>
  );
}
