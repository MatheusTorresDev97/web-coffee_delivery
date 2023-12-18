import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import CartContextProvider from "./contexts/CartContext";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <AppRoutes />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
