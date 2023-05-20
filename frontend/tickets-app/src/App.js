import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppNavBarBootStrap from "./sub-modules/shared/components/navbar/AppNavBarBootStrap";

function App() {
  return (
    <BrowserRouter>
      <AppNavBarBootStrap />
    </BrowserRouter>
  );
}

export default App;
