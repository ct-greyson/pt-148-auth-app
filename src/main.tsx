import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-0d8ipbosrdbd86rr.us.auth0.com"
    clientId="gcr5mxMnLtmmO1G9A1K4KoV02pBh0aC8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
