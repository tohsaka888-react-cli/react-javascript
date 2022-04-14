import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.less";

function HelloWorld() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="text">HelloWorld</div>
      <div className="button" onClick={() => navigate(-1)}>Back Home</div>
    </div>
  );
}

export default HelloWorld;
