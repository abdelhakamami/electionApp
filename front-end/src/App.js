import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import AdminRegister from "./pages/admin-register/AdminRegister";
import ProtectedRoute from "./utils/ProtectedRoute";
import ElectionDashboard from "./pages/election-dashboard/ElectionDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />}></Route>
        <Route path="/register" element={<AdminRegister />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AdminDashboard />}></Route>
          <Route
            path="/election/:id/overview"
            element={<ElectionDashboard />}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
