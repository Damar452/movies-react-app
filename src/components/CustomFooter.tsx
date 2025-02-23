import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export const CustomFooter = () => {
  const date = new Date().getFullYear();
  return (
    <Footer className="flex justify-center items-center">
      <span className="text-center" >My Movie App ©{date} Created by Damar Hernández</span>
    </Footer>
  )
}