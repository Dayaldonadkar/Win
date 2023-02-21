import React, { useEffect, useState } from "react";
import Homepage from "./Components/Homepage";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

let da = <img src="./Dark.png" />;
let li = <img src="./Light.png" />;

const App = () => {
  const [theme, setheme] = useState("light");

  // const [button, setbutton] = useState("Light");
  const [button, setbutton] = useState(da);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleSwitch = () => {
    setheme("dark");
  };
  const handleSwitch1 = () => {
    setheme("light");
  };
  const handleSwitch2 = () => {
    setheme(theme === "dark" ? "light" : "dark");
  };
  const buttonChange = () => {
    if (theme === "dark") {
      // setbutton("Dark");
      setbutton(da);
    } else {
      setbutton(li);
    }
  };
  return (
    <div className="relative">
      <Homepage />
      <div className="fixed bottom-10 right-0 text-white bg-slate-400 px-4 rounded-full py-2 dark:bg-white">
        {/* <div>
          <button onClick={handleSwitch} className="border-r">
            <LightModeIcon fontSize="large" />
          </button>
          <button onClick={handleSwitch1}>
            <DarkModeIcon />
          </button>
        </div> */}
        <button
          className="w-10 text-white"
          onClick={() => {
            handleSwitch2();
            buttonChange();
          }}
          // onClick={handleSwitch}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default App;
