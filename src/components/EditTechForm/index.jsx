import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTechSchema } from "./editTechSchema";
import { StyledDivContainer } from "./style";

export const EditTechForm = ({ techId, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editTechSchema),
  });
  const { editTech, deleteTech } = useContext(TechContext);

  const submit = (formData) => {
    editTech(formData, techId);
    closeModal();
  };

  return (
    <StyledDivContainer>
      <div>
        <h3>Alterar Tecnologia</h3>
        <button onClick={closeModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <select
          text="Selecionar status"
          {...register("status")}
          error={errors.status}
        >
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Salvar alterações</button>
        <button onClick={() => deleteTech(tech.id)}>Excluir</button>
      </form>
    </StyledDivContainer>
  );
};
