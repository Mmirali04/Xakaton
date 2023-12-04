import { useState } from "react";
import useDarkSide from "../../hook/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? false : true
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          className="relative left-3"
          checked={darkSide}
          onChange={toggleDarkMode}
          size={40}
          moonColor="yellow"
          sunColor="black"
        />
      </div>
    </>
  );
}
export default Switcher;