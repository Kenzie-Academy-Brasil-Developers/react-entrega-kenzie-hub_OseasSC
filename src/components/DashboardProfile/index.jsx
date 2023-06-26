import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/index";
import { getUserInformation } from "./../../services/getUser";
import { StyledButton, StyledDiv } from "./style";

export const DashBoardProfile = ({}) => {
  const [userName, setUserName] = useState("");
  const [userModule, setUserModule] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await getUserInformation();

        if (isMounted && response) {
          setUserName(response.name);
          setUserModule(response.course_module);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userSessionToken");
    localStorage.removeItem("userID");
    setUserName("");
    setUserModule("");
    setIsLoading(true);
  };

  return (
    <>
      <StyledDiv>
        <Logo />
        <Link onClick={handleLogout} to="/">
          <StyledButton onClick={handleLogout}>Sair</StyledButton>
        </Link>
      </StyledDiv>

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <section>
          <h2>Olá, {userName}</h2>
          <p>Module: {userModule}</p>
        </section>
      )}

      <section></section>
    </>
  );
};
