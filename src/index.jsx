import React from "react";
import { createRoot } from "react-dom/client";
import RouterConfig from '@/config/RouterConfig'
import App from "./App";
import './index.less'

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterConfig />
  </React.StrictMode>
);
