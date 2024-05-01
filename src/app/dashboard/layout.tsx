import AuthGuard from 'guard/AuthGuard';
import { DashboardWrapper } from 'layouts/DashboardWrapper';
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
         <DashboardWrapper>{children}</DashboardWrapper>
      </AuthGuard>
   );
};

export default DashboardLayout;
