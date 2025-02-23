import React from 'react';
import { CustomFooter, CustomHeader } from './components';
import AppRoutes from './routes/index';
import { Layout } from 'antd';
const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <CustomHeader />
      <Content className="mt-14 px-0 sm:px-[48px] bg-white">
        <div className="p-4 sm:p-10 sm:pt-6 min-h-141">
          <AppRoutes />
        </div>
      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default App
