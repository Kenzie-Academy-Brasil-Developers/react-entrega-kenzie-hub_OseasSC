import React from "react";
import { Link } from "react-router-dom";

export const ButtonBlankText = ({ text, path, ...rest }) => {
  return (
    <div>
      <Link to={path}>
        <button {...rest}>{text}</button>
      </Link>
    </div>
  );
};
