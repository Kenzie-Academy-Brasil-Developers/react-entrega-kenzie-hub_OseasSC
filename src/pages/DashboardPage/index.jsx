import { TechProvider } from "../../contexts/TechContext";
import { WorkProvider } from "../../contexts/WorkContext";
import { DashBoardProfile } from "./../../components/DashboardProfile/index";
import { StyledDiv } from "./style";
export const DashboardPage = () => {
  return (
    <StyledDiv>
      <TechProvider>
        <WorkProvider>
          <DashBoardProfile />
        </WorkProvider>
      </TechProvider>
    </StyledDiv>
  );
};
