import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MenuItemProps, SidebarItemProps } from "@/types";

export const MenuItem = ({
  icon,
  item,
  cusCss,
  onClick,
  collapsed,
  isSidebarItemToggle,
}: MenuItemProps) => {

  const isActive =
    typeof window !== "undefined" &&
    item?.url === window.location.pathname;

  return (
    <div className="w-full relative group">
      
      {/* Parent Menu */}
      <div
        className={`
          flex items-center justify-between px-3 py-2 rounded-lg
          hover:bg-gray-100 transition-all duration-200 cursor-pointer
          ${isActive ? "bg-blue-50 text-blue-500 font-semibold" : "text-gray-700"}
          ${cusCss}
        `}
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          {icon}

          {!collapsed && (
            <span className="text-sm">
              {item?.label}
            </span>
          )}
        </div>

        {(item?.children ?? []).length > 0 && !collapsed && (
          <ChevronDownIcon
            className={`
              w-4 h-4 transition-transform duration-200
              ${isSidebarItemToggle ? "rotate-180" : ""}
            `}
          />
        )}
      </div>

      {/* Hover Children Box */}
      {(item?.children ?? []).length > 0 && collapsed && (
        <div
          className="
            absolute left-full top-0 ml-2
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-150
            flex flex-col
            bg-white shadow-lg border rounded-lg
            p-2 min-w-40 z-50
          "
        >
          {(item.children ?? []).map((child: SidebarItemProps, index: number) => {
            const isChildActive = window.location.pathname === child.url;
            return (
              <Link key={index} href={child.url}>
                <div
                  className={`
                    px-3 py-2 text-sm rounded-md
                    hover:bg-gray-100 whitespace-nowrap
                    transition-colors
                    ${isChildActive
                      ? "text-blue-500 font-semibold bg-blue-50"
                      : "text-gray-700"}
                  `}
                >
                  {child.label}
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {/* Children */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${isSidebarItemToggle ? "max-h-40 mt-1" : "max-h-0"}
        `}
      >
        {!collapsed && (
          <div className="ml-6 border-l border-gray-200 pl-3 flex flex-col gap-1">
            {(item?.children ?? []).map((child: SidebarItemProps, index: number) => {

              const childActive =
                typeof window !== "undefined" &&
                child.url === window.location.pathname;

              return (
                <Link key={index} href={child.url}>
                  <div
                    className={`
                      text-sm py-1.5 px-2 rounded-md transition-all
                      hover:bg-gray-100
                      ${childActive
                        ? "text-blue-500 font-semibold"
                        : "text-gray-600"}
                    `}
                  >
                    {child.label}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};