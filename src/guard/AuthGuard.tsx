'use client';

import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { useAuthStore } from 'store/authStore';

interface IAuthGuardProps {
   children?: React.ReactNode;
}

const AuthGuard: FC<IAuthGuardProps> = ({ children }) => {
   const { user, authenticated } = useAuthStore((state) => ({
      user: state.user,
      authenticated: state.authenticated,
   }));

   if (!authenticated && !user) {
      return redirect('/');
   }

   return <>{children}</>;
};

export default AuthGuard;
