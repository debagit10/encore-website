import React from "react";

import { Routes, Route } from "react-router-dom";
import usePageLoader from "./utils/pageLoader";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const ExplorePage = React.lazy(() => import("./pages/ExplorePage"));
const View_Tool = React.lazy(() => import("./pages/View_Tool"));

const App = () => {
  usePageLoader();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/view/tool/:id" element={<View_Tool />} />
    </Routes>
  );
};

export default App;
