// import Uno from "./components/Uno";
import React from "react";
// import Dos from "./components/Dos";
// import Uno from "./components/Uno";
import { Routes, Route } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const ExplorePage = React.lazy(() => import("./pages/ExplorePage"));
const View_Tool = React.lazy(() => import("./pages/View_Tool"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/view/tool/:id" element={<View_Tool />} />
    </Routes>
  );
};

export default App;
