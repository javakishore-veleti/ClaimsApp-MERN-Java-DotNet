import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Claims from "./sub-modules/claims/pages/Claims";
import MainNavigation from "./sub-modules/shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact element={<Claims />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
