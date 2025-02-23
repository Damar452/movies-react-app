import React from 'react';
import { CustomFooter, CustomHeader } from './components';
import AppRoutes from './routes';
import { Layout } from 'antd';
const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <CustomHeader />
      <Content className="mt-14 px-0 sm:px-[48px] bg-white">
          <AppRoutes />
      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default App
