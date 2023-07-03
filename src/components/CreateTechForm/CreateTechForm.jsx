import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTechSchema } from "./createTechSchema";
import { StyledDivContainer } from "./style";

export const CreateTechForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTechSchema),
  });
  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
    closeModal();
  };

  return (
    <StyledDivContainer>
      <div>
        <h3>Cadastras Tecnologia</h3>
        <button onClick={closeModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title")}
          error={errors.title}
        />
        <select text="Selecionar status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Criar Tecnologia</button>
      </form>
    </StyledDivContainer>
  );
};
