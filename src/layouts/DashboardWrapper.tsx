'use client';

import React, { useState } from 'react';
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   UploadOutlined,
   UserOutlined,
   VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

interface IDashboardWrapperProps {
   children: React.ReactNode;
}

export const DashboardWrapper: React.FC<IDashboardWrapperProps> = ({ children }) => {
   const [collapsed, setCollapsed] = useState(false);

   return (
      <Layout>
         <Sider breakpoint='md' trigger={null} collapsible collapsed={collapsed}>
            <Menu
               // theme='dark'
               mode='inline'
               defaultSelectedKeys={['1']}
               items={[
                  {
                     key: '1',
                     icon: <UserOutlined />,
                     label: 'nav 1',
                  },
                  {
                     key: '2',
                     icon: <VideoCameraOutlined />,
                     label: 'nav 2',
                  },
                  {
                     key: '3',
                     icon: <UploadOutlined />,
                     label: 'nav 3',
                  },
               ]}
            />
         </Sider>
         <Layout>
            <Header style={{ padding: 0, background: 'transparent' }}>
               <Button
                  type='text'
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                     fontSize: '16px',
                     width: 64,
                     height: 64,
                  }}
               />
            </Header>
            <Content
               style={{
                  padding: 24,
                  minHeight: 'calc(100vh - 65px)',
               }}
            >
               {children}
            </Content>
         </Layout>
      </Layout>
   );
};
