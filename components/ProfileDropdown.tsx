import { useRef } from 'react'
import { logout } from '@/modules/auth/auth.service'
import Select from './UIComponents/Select'
import { MenuItem } from './MenuItem'
import { PROFILE_CIRCLE } from '@/config'
import { SidebarProps } from '@/types'

type ProfileDropdownProps = {
  isProfileToggle: boolean,
  user: any,
  onClose: () => void;
  handleRoute: (item: SidebarProps) => void
}

export default function ProfileDropdown({
  isProfileToggle,
  user,
  onClose,
  handleRoute
}: ProfileDropdownProps) {
  const profileRef = useRef<HTMLDivElement | null>(null);
  const singOutItem = PROFILE_CIRCLE[PROFILE_CIRCLE.length - 1];
  const SignOutIcon = singOutItem.icon;

  if (!isProfileToggle) return <></>;

  return (
    <Select
      cusRef={profileRef}
      cusCss='mt-16 top-0 z-20 w-54 right-5 bg-gray-100'
      isToggle={isProfileToggle}
      onClose={onClose}
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
        {
          PROFILE_CIRCLE?.map((item, index) => {
            const Icon = item.icon;
            if (index === PROFILE_CIRCLE.length - 1) return;
            return (
              <MenuItem
                key={index}
                icon={<Icon className="w-6 h-6" />}
                item={item}
                onClick={handleRoute.bind(null, item)}
                cusCss='hover:!bg-gray-300'
              />
            )
          })
        }
      </div>
      <div className='border-t border-t-gray-400 flex justify-start items-center px-1 pb-1 pt-3 gap-2'>
        <MenuItem
          icon={<SignOutIcon className="w-6 h-6" />}
          item={singOutItem}
          cusCss='hover:!bg-gray-300'
          onClick={logout}
        />
      </div>
    </Select>
  )
}
