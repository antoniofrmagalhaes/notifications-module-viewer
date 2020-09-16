import React from "react";
import GlobalStyles from "./styles";

import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <GlobalStyles />
    </>
  );
};

export default App;
