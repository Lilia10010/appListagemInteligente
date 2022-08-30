import React from "react";
/*import logo from "./logo.svg"; */
import { GlobalStyle } from "./styles/global";

import { Router } from "./routes";
import { Header } from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <GlobalStyle />
    </div>
  );
};

export default App;
