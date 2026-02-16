import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";

const IconWithHover = ({
  children,
  onToggle
}: {
  children: ReactNode,
  onToggle?: () => void
}) => {
  return (
    <div
      className="hover:bg-gray-200 p-1 rounded-full cursor-pointer"
      onClick={onToggle ? onToggle : () => {}}
    >
      {children}
    </div>
  )
}
export default function Topbar({
  onToggle
}: {
  onToggle: () => void
}) {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <IconWithHover onToggle={onToggle}>
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
        />
      </div>
    </header>
  );
}
