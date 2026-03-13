import { SIDE_BAR } from "@/config";
import { MenuListProps, SidebarProps } from "@/types";
import LogoIcon from "./UIComponents/LogoIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { route } from "@/route";
import { MenuItem } from "./MenuItem";

export default function Sidebar({
  collapsed,
  mobileOpen,
  handleMobileToggle,
  isSidebarItemToggle,
  handleRoute
}: {
  collapsed: boolean;
  mobileOpen: boolean;
  handleMobileToggle: () => void;
  isSidebarItemToggle: boolean;
  handleRoute: (item: SidebarProps) => void
}) {
  return (
    <>
      {
        mobileOpen && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" />
      }
      <aside
        className={`
          fixed lg:static z-50
          bg-white border-r h-full
          transition-all duration-300
          ${collapsed ? "lg:w-20" : "lg:w-70"}
          w-72
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Logo collapsed={collapsed} handleMobileToggle={handleMobileToggle} />
        <MenuList
          collapsed={collapsed}
          isSidebarItemToggle={isSidebarItemToggle}
          handleRoute={handleRoute}
        />
      </aside>
    </>
  );
}

const Logo = ({
  collapsed,
  handleMobileToggle,
}: {
  collapsed: boolean;
  handleMobileToggle: () => void;
}) => {
  const { HOME } = route;

  return (
    <div className="h-16 flex items-center justify-between lg:justify-start px-5">
        <Link href={HOME} className="font-bold text-lg text-black flex items-center gap-2">
          <LogoIcon />
          {!collapsed && "Ecme"}
        </Link>
      <div
        className="p-1.5 hover:bg-gray-300 rounded-full lg:hidden cursor-pointer"
        onClick={handleMobileToggle}
      >
        <XMarkIcon className="w-6 h-6 text-gray-700 hover:text-gray-800" />
      </div>
    </div>
  )
};

const MenuList = ({
  collapsed,
  isSidebarItemToggle,
  handleRoute,
}: MenuListProps) => {
  return (
    <nav className="p-4 space-y-2">
      {
        SIDE_BAR?.map((item: SidebarProps) => {
          const Icon = item.icon;
          return (
            <MenuItem
              key={item?.id}
              icon={<Icon className={`w-6 h-6 ${item.url === window.location.pathname ? "font-semibold text-blue-500" : "text-gray-600"}`} />}
              item={item}
              onClick={handleRoute.bind(null, item)}
              collapsed={collapsed}
              isSidebarItemToggle={isSidebarItemToggle}
            />
          )
        })
      }
    </nav>
  );
}