import React from "react";
import "./App.css";
import InputField from "./components/inputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="ab">Taskify</span>
      <InputField/>
    </div>
  );
};

export default App;
