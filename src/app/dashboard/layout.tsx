import AuthGuard from 'guard/AuthGuard';
import { Metadata } from 'next';
import React, { FC } from 'react';

interface IDashboardLayoutProps {
   children: React.ReactNode;
}

export const metadata: Metadata = {
   title: 'Dashboard',
   description: 'Management Dashboard',
};

const DashboardLayout: FC<IDashboardLayoutProps> = ({ children }) => {
   return (
      <AuthGuard>
         <div>Dashboard Layout</div>
         {children}
      </AuthGuard>
   );
};

export default DashboardLayout;
