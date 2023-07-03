import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/index";
import {
  StyledButton,
  StyledHeaderDiv,
  StyledTechSection,
  StyledUserSection,
  StyledTechSectionContainer,
  StyledWorkSection,
  StyledWorkSectionContainer,
  StyledUl,
  StyledLi,
  StyledModal,
} from "./style";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { CreateTechForm } from "../CreateTechForm/CreateTechForm";
import plusSign from "../../assets/+.png";
import { EditTechForm } from "./../EditTechForm/index";
import { WorkContext } from "./../../contexts/WorkContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DashBoardProfile = ({}) => {
  const { user, userLogout } = useContext(UserContext);
  const { techList } = useContext(TechContext);
  const { workList } = useContext(WorkContext);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedTechId, setSelectedTechId] = useState(null);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const openEditModal = (techId) => {
    setIsEditModalOpen(true);
    setSelectedTechId(techId);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTechId(null);
  };

  return (
    <>
      <StyledHeaderDiv>
        <Logo />
        <StyledButton onClick={userLogout} to="/">
          Sair
        </StyledButton>
      </StyledHeaderDiv>

      <StyledUserSection>
        <h2>Olá, {user?.name}</h2>
        <p>Module: {user?.course_module}</p>
      </StyledUserSection>

      <StyledTechSectionContainer>
        <StyledTechSection>
          <h2>Tecnologias</h2>
          <button onClick={openCreateModal}>
            <img src={plusSign} alt="sinal de mais" />
          </button>
        </StyledTechSection>

        <ul>
          {techList.map((currentTech) => (
            <li
              key={currentTech.id}
              onClick={() => openEditModal(currentTech.id)}
            >
              <h3>{currentTech.title}</h3>
              <h3>{currentTech.status}</h3>
            </li>
          ))}
        </ul>
      </StyledTechSectionContainer>

      {/* api fora do ar ent eu criei a section de work pra testar a edit */}
      <StyledWorkSectionContainer>
        <StyledWorkSection>
          <h2>Trabalhos</h2>
          <button onClick={openCreateModal}>
            <img src={plusSign} alt="sinal de mais" />
          </button>
        </StyledWorkSection>

        <StyledUl>
          {workList.map((currentWork) => (
            <StyledLi
              key={currentWork.id}
              onClick={() => openEditModal(currentWork.id)}
            >
              <h3>{currentWork.title}</h3>
              <h3>{currentWork.description}</h3>
            </StyledLi>
          ))}
        </StyledUl>
      </StyledWorkSectionContainer>

      {isCreateModalOpen && (
        <StyledModal className="modal">
          <CreateTechForm closeModal={closeCreateModal} />
        </StyledModal>
      )}

      {isEditModalOpen && (
        <StyledModal className="modal">
          <EditTechForm techId={selectedTechId} closeModal={closeEditModal} />
        </StyledModal>
      )}

      <ToastContainer />
    </>
  );
};
