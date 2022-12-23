import "./App.css";
import React, { useState } from "react";
import Select from "react-select";

function App() {
  const colors = [
    {
      value: 1,
      label: "lime",
    },
    {
      value: 2,
      label: "orange",
    },
    {
      value: 3,
      label: "magenta",
    },
    {
      value: 4,
      label: "lawngreen",
    },
    {
      value: 5,
      label: "firebrick",
    },
    {
      value: 6,
      label: "ghostwhite",
    },
    {
      value: 7,
      label: "crimson",
    },
    {
      value: 5,
      label: "darkgray",
    },
  ];

  const [input, setinput] = useState(colors.label);
  function changeHandle(e) {
    setinput(e.label);
  }
  return (
    <div className="dropdownbar">
      <Select
        options={colors}
        onChange={changeHandle}
        className="option"
      ></Select>

      <center>
        <button style={{ backgroundColor: `${input}` }}></button>
      </center>
    </div>
  );
}

export default App;
