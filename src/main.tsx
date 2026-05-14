import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const root = (window as any)._reactRoot || createRoot(container);
(window as any)._reactRoot = root;

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
