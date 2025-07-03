// import Uno from "./components/Uno";
import React from "react";
// import Dos from "./components/Dos";
// import Uno from "./components/Uno";
import { Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
