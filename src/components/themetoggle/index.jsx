import { useEffect, useState } from "react";import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div
      className="nav_ac"
      style={{ borderBottomLeftRadius: " 20px", height: "71.68px" }}
      onClick={themetoggle}
    >
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
