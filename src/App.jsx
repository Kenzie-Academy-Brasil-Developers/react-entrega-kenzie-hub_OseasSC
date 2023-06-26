import { AllRoutes } from "./routes/AllRoutes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { GlobalReset } from "./styles/GlobalReset";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalReset />
      <AllRoutes />
    </>
  );
};
