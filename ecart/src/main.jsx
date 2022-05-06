import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import { SnackbarProvider } from 'notistack'
import {BrowserRouter} from 'react-router-dom';
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SnackbarProvider   iconVariant={{
        success: '✅',
        error: '✖️',
        warning: '⚠️',
        info: 'ℹ️',
    }}>
    <App />
    </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
)
