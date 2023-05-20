import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavBarBootStrap from "./sub-modules/shared/components/navbar/AppNavBarBootStrap";
import HomePage from "./sub-modules/shared/pages/HomePage";
import TicketsSearchPage from "./sub-modules/tickets/pages/TicketsSearchPage";
import TicketCreatePage from "./sub-modules/tickets/pages/TicketCreatePage";
import TicketsListPage from "./sub-modules/tickets/pages/TicketsListPage";

function App() {
  return (
    <BrowserRouter>
      <AppNavBarBootStrap />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tickets-search" element={<TicketsSearchPage />}></Route>
        <Route path="/ticket-create" element={<TicketCreatePage />}></Route>
        <Route path="/tickets-list" element={<TicketsListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
