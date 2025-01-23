import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import './styles/global.scss';
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'
import { store } from '@redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster position="bottom-center" />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
