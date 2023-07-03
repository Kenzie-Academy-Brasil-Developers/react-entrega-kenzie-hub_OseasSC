import React, { forwardRef } from "react";
import { StyledDiv, StyledInput, StyledLabel, StyledP } from "./style";

export const Input = forwardRef(({ error, text, ...rest }, ref) => {
  return (
    <StyledDiv>
      <StyledLabel>{text}</StyledLabel>
      <StyledInput ref={ref} {...rest} />
      {error ? <StyledP>{error.message}</StyledP> : null}
    </StyledDiv>
  );
});
