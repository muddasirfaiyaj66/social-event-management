import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import routes from "./Routes/Router";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProviders>
    <RouterProvider router={routes} />
    </AuthProviders>
    </HelmetProvider>
    
  </React.StrictMode>
);
