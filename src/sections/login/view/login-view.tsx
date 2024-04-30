'use client';

import React, { FC } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
   username?: string;
   password?: string;
};

export const LoginPageView: FC = () => {
   const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      console.log('Success:', values);
   };

   const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <div className='flex flex-col justify-center items-center h-[100vh] bg-black text-white'>
         <h3 className='text-3xl mb-2 font-semibold'>Login</h3>
         <Form
            name='basic'
            layout='vertical'
            size='large'
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            className='w-full bg-gray-600 bg-opacity-30 rounded-lg p-5 max-w-[400px]'
            style={{ padding: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
         >
            <Form.Item<FieldType>
               label='Username'
               name='username'
               rules={[{ required: true, message: 'Please input your username!' }]}
            >
               <Input />
            </Form.Item>

            <Form.Item<FieldType>
               label='Password'
               name='password'
               rules={[{ required: true, message: 'Please input your password!' }]}
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
