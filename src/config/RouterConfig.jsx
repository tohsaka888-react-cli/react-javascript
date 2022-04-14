import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import HelloWorld from "../pages/HelloWorld";

function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="hello-world" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterConfig;
