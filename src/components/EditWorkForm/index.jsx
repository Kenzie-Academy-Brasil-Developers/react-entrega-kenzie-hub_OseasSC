import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WorkContext } from "./../../contexts/WorkContext";

export const EditWorkForm = ({ techId, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const { workTech, deleteWork } = useContext(WorkContextContext);

  const submit = (formData) => {
    editWork(formData, techId);
    closeModal();
  };

  return (
    <>
      <div>
        <h3>Alterar Tecnologia</h3>
        <button onClick={closeModal}>X</button>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Titulo do trabalho"
          {...register("title")}
        />
        <input
          type="text"
          placeholder="descrição do trabalho"
          {...register("description")}
        />
        <button type="submit">Salvar alterações</button>
        <button onClick={() => deleteWork(work.id)}>Excluir</button>
      </form>
    </>
  );
};
