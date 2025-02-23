import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import '@ant-design/v5-patch-for-react-19';
import 'antd/dist/reset.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
