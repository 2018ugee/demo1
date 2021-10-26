import React from "react";
import "./app.css";
import Box from "./components/Box";

function App() {
  return (
    <div className="container">
      <div className="box1">
        <Box />
      </div>
      <div className="box2">
        <Box />
      </div>
      <div className="box3">
        <Box />
      </div>
    </div>
  );
}

export default App;
