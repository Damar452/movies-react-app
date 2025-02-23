import React from 'react';
import { CustomFooter, CustomHeader } from './components';
import AppRoutes from './routes';
import { Layout } from 'antd';
import { FavoritesProvider } from './context/favorites';
const { Content } = Layout;

const App = () => {
  return (
    <FavoritesProvider>
    <Layout>
      <CustomHeader />
      <Content className="mt-14 px-0 sm:px-[48px] bg-white">
          <AppRoutes />
      </Content>
      <CustomFooter />
    </Layout>
    </FavoritesProvider>
  )
}

export default App
