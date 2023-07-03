import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("userSessionToken");
    const id = localStorage.getItem("userID");

    const loadUser = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/users/${id}`);
        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("userSessionToken");
        localStorage.removeItem("userID");
      } finally {
        setLoading(false);
      }
    };

    if (token && id) {
      loadUser();
    }
  }, []);

  const navigate = useNavigate();

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
      console.log("cadastro efetuado");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (userData, setLoading) => {
    try {
      const { data } = await api.post("/sessions", userData);
      localStorage.setItem("userSessionToken", data.token);
      localStorage.setItem("userID", data.user.id);
      setUser(data.user);
      navigate("/dashboard");
      console.log("logou pelo context");
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const userLogout = () => {
    localStorage.removeItem("userSessionToken");
    localStorage.removeItem("userID");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, userRegister, userLogin, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
