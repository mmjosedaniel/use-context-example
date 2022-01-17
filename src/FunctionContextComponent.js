import { Fragment } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  console.log(darkTheme);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <Fragment>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </Fragment>
  );
};

export default FunctionContextComponent;
