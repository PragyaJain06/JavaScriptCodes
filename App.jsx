import "./App.css";
import { AuthRoute, useAuth } from "./ProtectedRouteLogic/AuthRoute";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRouteLogic/ProtectedRoute";
const Home = () => <h2>Home Page (Public)</h2>;
const Dashboard = () => <h2>Dashboard (Protected)</h2>;
const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  console.log(isLoggedIn);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        setIsLoggedIn(true);
        navigate("/dashboard");
      }}
    >
      Login
    </button>
  );
};
function App() {
  return (
    <AuthRoute>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthRoute>
  );
}

export default App;
