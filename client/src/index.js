import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const domain = process.env.REACT_APP_AUTH0_DOMAIN 
const clientId= process.env.REACT_APP_AUTH0_CLIENT_ID

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    
      <BrowserRouter>  
        <Auth0ProviderWithHistory>   
        <App />
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    
  </React.StrictMode>
);



