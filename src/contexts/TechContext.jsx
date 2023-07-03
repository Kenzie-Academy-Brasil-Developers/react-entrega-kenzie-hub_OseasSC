import { api } from "../services/api";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("userSessionToken");

  useEffect(() => {
    const loadTechList = async () => {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechList(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    loadTechList();
  }, []);

  const createTech = async (formData) => {
    try {
      const newTech = { ...formData };
      const { data } = await api.post("/users/techs", newTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList((techList) => [...techList, data]);
      toast.success("Tecnologia alterada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar a tecnologia. Por favor, tente novamente.");
    }
  };

  const deleteTech = async (currentTechID) => {
    try {
      await api.delete(`/users/techs/${currentTechID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList((techList) =>
        techList.filter((currentTech) => currentTech.id !== currentTechID)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editTech = async (formData, techId) => {
    try {
      const { data } = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechList((techList) =>
        techList.map((tech) => {
          if (tech.id === techId) {
            return data;
          } else {
            return tech;
          }
        })
      );

      toast.success("Tecnologia alterada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar a tecnologia. Por favor, tente novamente.");
    }
  };

  return (
    <TechContext.Provider
      value={{ techList, createTech, deleteTech, editTech }}
    >
      {children}
    </TechContext.Provider>
  );
};
