import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b1b1b";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        contact="Contact Me"
        mode={mode}
        toggleMode={toggleMode}
      />

      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;