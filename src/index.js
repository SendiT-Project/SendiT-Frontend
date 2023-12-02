import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <SnackbarProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

