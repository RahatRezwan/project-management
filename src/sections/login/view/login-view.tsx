'use client';

import React, { FC } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useAuthStore } from 'store/authStore';
import { IUser } from 'types/user.interface';

const demoAdmin = {
   email: 'kanbanadmin@gmail.com',
   password: 'admin@123',
};

export const LoginPageView: FC = () => {
   const [messageApi, messageHolder] = message.useMessage();
   const setUser = useAuthStore((sate) => sate.setUser);
   const router = useRouter();

   const onFinish: FormProps<IUser>['onFinish'] = (values: IUser) => {
      if (
         values.email?.toLocaleLowerCase() === demoAdmin.email?.toLocaleLowerCase() &&
         values.password === demoAdmin.password
      ) {
         messageApi.open({
            type: 'success',
            content: 'Login Success',
         });
         setUser(values);
         router.push('/dashboard');
      } else {
         messageApi.open({
            type: 'error',
            content: 'Login Failed',
         });
      }
   };

   const onFinishFailed: FormProps<IUser>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <div className='flex flex-col justify-center items-center h-[100vh] bg-black text-white'>
         {messageHolder}
         <h3 className='text-3xl mb-2 font-semibold'>Login</h3>
         <Form
            name='basic'
            layout='vertical'
            size='large'
            className='w-full bg-gray-600 border border-gray-500 shadow-sm shadow-gray-500 bg-opacity-30 rounded-lg p-5 max-w-[400px]'
            style={{ padding: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
         >
            <Form.Item
               label='Email'
               name='email'
               rules={[{ required: true, message: 'Please enter your email!' }]}
            >
               <Input type='email' />
            </Form.Item>

            <Form.Item
               label='Password'
               name='password'
               rules={[{ required: true, message: 'Please enter your password!' }]}
            >
               <Input.Password />
            </Form.Item>

            <Form.Item className='flex justify-center'>
               <Button
                  type='primary'
                  size='large'
                  htmlType='submit'
                  className='min-w-[200px] font-bold'
               >
                  Login
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};
