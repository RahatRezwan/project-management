import { LoginPageView } from 'sections/login/view/login-view';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Login',
   description: 'Login to your account',
};

const LoginPage = () => {
   return <LoginPageView />;
};

export default LoginPage;
