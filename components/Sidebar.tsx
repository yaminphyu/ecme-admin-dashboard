import { SIDE_BAR } from "@/config";
import { MenuItemProps, MenuListProps, SidebarProps } from "@/types";
import LogoIcon from "./UIComponents/LogoIcon";

export default function Sidebar({
  collapsed
}: {
  collapsed: boolean
}) {
  return (
    <aside
      className={`
        bg-white border-r h-full
        transition-all duration-300
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      <Logo collapsed={collapsed} />
      <MenuList collapsed={collapsed} />
    </aside>
  );
}

const Logo = ({ collapsed }: MenuListProps) => {
  return (
    <div className="h-16 flex items-center justify-start px-5">
      <div className="font-bold text-lg text-black flex items-center gap-2">
        <LogoIcon />
        {!collapsed && "Ecme"}
      </div>
    </div>
  )
}
const MenuItem = ({
  icon,
  label,
  collapsed
}: MenuItemProps) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-black cursor-pointer">
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
}

const MenuList = ({ collapsed }: MenuListProps) => {
  return (
    <nav className="p-4 space-y-2">
      {
        SIDE_BAR?.map((item: SidebarProps) => {
          const Icon = item.icon;
          return (
            <MenuItem
              key={item?.id}
              icon={<Icon className="w-6 h-6" />}
              label={item?.label}
              collapsed={collapsed}
            />
          )
        })
      }
    </nav>
  );
}