import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useAuth } from '@/contexts/AuthContext';
import useNavbar from '@/hooks/useNavbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const {
    collapsed,
    isProfileToggle,
    mobileOpen,
    handleToggle,
    handleProfileToggle,
    handleMobileToggle,
    isSidebarItemToggle,
    handleRoute
  } = useNavbar();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, user, router]);

  if (loading) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        handleMobileToggle={handleMobileToggle}
        isSidebarItemToggle={isSidebarItemToggle}
        handleRoute={handleRoute}
      />

      <div className="flex flex-col flex-1">
        <Topbar
          onToggle={handleToggle}
          handleProfileToggle={handleProfileToggle}
          isProfileToggle={isProfileToggle}
          handleMobileToggle={handleMobileToggle}
          handleRoute={handleRoute}
        />

        <main className="p-8 overflow-y-auto">
          <div className='flex justify-between w-full gap-5 min-h-screen relative'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
