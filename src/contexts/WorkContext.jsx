import { api } from "../services/api";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const WorkContext = createContext({});

export const WorkProvider = ({ children }) => {
  const [workList, setWorkList] = useState([]);
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("userSessionToken");

  useEffect(() => {
    const loadWorkList = async () => {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWorkList(data.works);
      } catch (error) {
        console.log(error);
      }
    };
    loadWorkList();
  }, []);

  const createWork = async (formData) => {
    try {
      const newWork = { ...formData };
      const { data } = await api.post("/users/works", newWork, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWorkList((workList) => [...workList, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWork = async (currentWorkID) => {
    try {
      await api.delete(`/users/works/${currentWorkID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWorkList((workList) =>
        workList.filter((currentWork) => currentWork.id !== currentWorkID)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editWork = async (formData, workId) => {
    try {
      const { data } = await api.put(`/users/workss/${workId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWorkList((workList) =>
        workList.map((work) => {
          if (work.id === workId) {
            return data;
          } else {
            return work;
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
    <WorkContext.Provider
      value={{ workList, createWork, deleteWork, editWork }}
    >
      {children}
    </WorkContext.Provider>
  );
};
