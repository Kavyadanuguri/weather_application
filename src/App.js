import "./App.css";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleFun = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Home toggleFun={toggleFun} toggle={toggle} />
    </div>
  );
}

export default App;
