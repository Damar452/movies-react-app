import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export const CustomHeader = () => {
  return (
    <Header className="flex justify-center items-center fixed top-0 left-0 w-full z-50 shadow-md">
      <h1 className="text-white text-xl">
        🎬 My Movie App
      </h1>
    </Header>
  )
}