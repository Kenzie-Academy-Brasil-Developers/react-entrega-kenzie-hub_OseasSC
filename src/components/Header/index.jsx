import logo from "../../assets/logo.png";
import { StyledButton, StyledDiv } from "./style";

export const Header = ({ text, path, ...rest }) => {
  return (
    <StyledDiv>
      <img src={logo} alt="logo da kenziehub escrito em rosa." />

      <StyledButton text={text} path={path} {...rest} />
    </StyledDiv>
  );
};
