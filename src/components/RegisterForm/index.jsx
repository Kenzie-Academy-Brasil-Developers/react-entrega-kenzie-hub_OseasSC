import { useForm } from "react-hook-form";
import { api } from "./../../services/api";
import { useNavigate } from "react-router-dom";
import { Input } from "./../Input/index";
import { registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "./../Select/index";
import { Header } from "../Header";
import { StyledButton, StyledForm } from "./style";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const goToLogin = useNavigate();

  const userRegister = async (userData) => {
    try {
      const body = {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        bio: userData.bio,
        contact: userData.contact,
        course_module: userData.course_module,
      };
      await api.post("/users", body);
      goToLogin("/");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (userData) => {
    userRegister(userData);
  };

  return (
    <div>
      <div>
        <Header path="/" text="Voltar" />
      </div>

      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          type="name"
          placeholder="Digite seu nome"
          {...register("name")}
          error={errors.name}
          text="Nome"
        />
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
        <Input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirm")}
          error={errors.confirm}
          text="Confirmar senha"
        />
        <Input
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
          text="Bio"
        />
        <Input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
          error={errors.contact}
          text="Contato"
        />
        <Select
          {...register("course_module")}
          error={errors.course_module}
          text="Selecionar módulo"
        >
          <option value="Primeiro Modulo">Primeiro Modulo</option>
          <option value="Segundo Modulo">Segundo Modulo</option>
          <option value="Terceiro Modulo">Terceiro Modulo</option>
          <option value="Quarto Modulo">Quarto Modulo</option>
          <option value="Quinto Modulo">Quinto Modulo</option>
          <option value="Sexto Modulo">Sexto Modulo</option>
        </Select>

        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledForm>
    </div>
  );
};
