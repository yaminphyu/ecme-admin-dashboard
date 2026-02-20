import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import { useAuth } from '@/contexts/AuthContext';
import useNavbar from '@/hooks/useNavbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { collapsed, isProfileToggle, mobileOpen, handleToggle, handleProfileToggle, handleMobileToggle } = useNavbar();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [loading, user]);

  if (loading) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        handleMobileToggle={handleMobileToggle}
      />

      <div className="flex flex-col flex-1">
        <Topbar
          onToggle={handleToggle}
          handleProfileToggle={handleProfileToggle}
          isProfileToggle={isProfileToggle}
          handleMobileToggle={handleMobileToggle}
        />

        <main className="p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
