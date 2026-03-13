import { useState } from 'react';
import { SidebarProps } from '@/types';
import { useRouter } from 'next/router';

export default function useNavbar() {
  const router = useRouter();

  const [isProfileToggle, setIsProfileToggle] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarItemToggle, setIsSidebarItemToggle] = useState(false);

  const handleToggle = () => {
    setCollapsed(v => !v);
    setMobileOpen(false);
  };
  const handleMobileToggle = () => {
    setMobileOpen(v => !v);
    setCollapsed(false);
  };

  const handleProfileToggle = () => setIsProfileToggle(v => !v);

  const handleSidebarItemToggle = () => setIsSidebarItemToggle(v => !v);

  const handleRoute = (item: SidebarProps) => {
    const { url, children = [] } = item;

    if (collapsed && children?.length > 0) return;

    if (children?.length > 0) {
      handleSidebarItemToggle();
      return;
    }

    router.push(url);

    if (url !== window.location.pathname) handleSidebarItemToggle();
  };

  return {
    collapsed,
    isProfileToggle,
    mobileOpen,
    handleToggle,
    handleProfileToggle,
    handleMobileToggle,
    isSidebarItemToggle,
    handleSidebarItemToggle,
    handleRoute
  }
}
