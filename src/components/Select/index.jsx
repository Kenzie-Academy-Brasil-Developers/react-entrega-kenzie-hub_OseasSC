import { forwardRef } from "react";

export const Select = forwardRef(({ children, error, text, ...rest }, ref) => {
  return (
    <div>
      <label>{text}</label>
      <select ref={ref} {...rest}>
        {children}
      </select>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
