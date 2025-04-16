import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthRoute";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
