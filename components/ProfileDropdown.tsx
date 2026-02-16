import React, { useEffect, useRef } from 'react'
import { MenuItem } from './Sidebar'
import { ArrowRightStartOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import { logout } from '@/modules/auth/auth.service'

type ProfileDropdownProps = {
  isProfileToggle: boolean,
  user: any,
  onClose: () => void
}

export default function ProfileDropdown({
  isProfileToggle,
  user,
  onClose
}: ProfileDropdownProps) {
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isProfileToggle) return;
  
    const handleClickOutside = (event: MouseEvent) => {
      if (!profileRef.current) return;
  
      if (!profileRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileToggle, onClose]);
  

  if (!isProfileToggle) return <></>;

  return (
    <div
      ref={profileRef}
      className="w-54 h-auto bg-gray-100 absolute mt-16 rounded-md right-5 top-0 p-3 shadow-2xl"
    >
      <div className='border-b border-b-gray-400 flex justify-start items-center px-1 pt-1 pb-3 gap-2'>
        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full cursor-pointer"
          alt="profile"
        />
        <div className='flex flex-col justify-start'>
          <span className='text-gray-600 text-md'>admin</span>
          <span className='text-gray-400 text-sm'>{user?.email}</span>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-1 my-2'>
        <MenuItem
          icon={<UserIcon className="w-6 h-6" />}
          label='Profile'
          cusCss='hover:!bg-gray-300'
        />
        <MenuItem
          icon={<UserIcon className="w-6 h-6" />}
          label='Profile'
          cusCss='hover:!bg-gray-300'
        />
        <MenuItem
          icon={<UserIcon className="w-6 h-6" />}
          label='Profile'
          cusCss='hover:!bg-gray-300'
        />
      </div>
      <div className='border-t border-t-gray-400 flex justify-start items-center px-1 pb-1 pt-3 gap-2'>
        <MenuItem
          icon={<ArrowRightStartOnRectangleIcon className="w-6 h-6" />}
          label='Sign out'
          cusCss='hover:!bg-gray-300'
          onClick={logout}
        />
      </div>
    </div>
  )
}
