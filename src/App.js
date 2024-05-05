import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./pages/admin/adminPage";
import Login from "./pages/login/Login";
import Status from "./pages/status/Status";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/queue" element={<Login />} />
        <Route path="/window" element={<AdminPage />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;
