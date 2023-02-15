import React from "react";

export const Themes = {
 light: {
  background: "#343434",
  textColor: "#eeeeee"
 },
 dark: {
  background: "#ffffff",
  textColor: "#222222"
 }
};

 const ThemeContext = React.createContext();
export default ThemeContext