import AuthGuard from 'guard/AuthGuard';
import React, { FC } from 'react';

interface IDashboardLayoutProps {
   children: React.ReactNode;
}

const DashboardLayout: FC<IDashboardLayoutProps> = ({ children }) => {
   return (
      <AuthGuard>
         <div>Dashboard Layout</div>
         {children}
      </AuthGuard>
   );
};

export default DashboardLayout;
