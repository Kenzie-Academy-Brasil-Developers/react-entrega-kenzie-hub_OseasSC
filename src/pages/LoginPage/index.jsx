import { LoginForm } from "../../components/LoginForm";
import { Logo } from "./../../components/Logo/index";
import { StyledDiv } from "./style";

export const LoginPage = () => {
  return (
    <div>
      <StyledDiv>
        <Logo />
      </StyledDiv>
      <LoginForm />
    </div>
  );
};
