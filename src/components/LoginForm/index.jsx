import { useForm } from "react-hook-form";
import { api } from "./../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./../Input/index";
import { loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  StyledButtonLogin,
  StyledButtonSignUp,
  StyledDiv,
  StyledForm,
  StyledH2,
  StyledP,
  StyledLink,
} from "./style";

export const LoginForm = () => {
  const goToDashboard = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const userLogin = async (userData) => {
    try {
      const body = {
        email: userData.email,
        password: userData.password,
      };
      const response = await api.post("/sessions", body);
      localStorage.setItem("userSessionToken", response.data.token);
      localStorage.setItem("userID", response.data.user.id);
      goToDashboard("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (userData) => {
    userLogin(userData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <StyledH2>Login</StyledH2>
      <StyledDiv>
        <Input
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
          error={errors.email}
          text="Email"
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password}
          text="Senha"
        />
      </StyledDiv>

      <StyledButtonLogin type="submit">Entrar</StyledButtonLogin>

      <StyledP>Ainda não possui uma conta?</StyledP>

      <StyledLink to="/register">
        <StyledButtonSignUp>Cadastre-se</StyledButtonSignUp>
      </StyledLink>
    </StyledForm>
  );
};
