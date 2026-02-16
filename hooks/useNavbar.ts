import React, { useState } from 'react'

export default function useNavbar() {
  const [isProfileToggle, setIsProfileToggle] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggle = () => {
    setCollapsed(v => !v);
    setMobileOpen(false);
  };
  const handleMobileToggle = () => {
    setMobileOpen(v => !v);
    setCollapsed(false);
  }
  const handleProfileToggle = () => setIsProfileToggle(v => !v);

  return {
    collapsed,
    isProfileToggle,
    mobileOpen,
    handleToggle,
    handleProfileToggle,
    handleMobileToggle,
  }
}
