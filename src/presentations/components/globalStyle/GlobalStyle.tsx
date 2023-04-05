// External files
import React from "react";

// Internal files
// Styles
import "./GlobalStyle.module.scss";

interface GlobalStyleProps {
  children: JSX.Element;
}

const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  return children;
};

export default GlobalStyle;
