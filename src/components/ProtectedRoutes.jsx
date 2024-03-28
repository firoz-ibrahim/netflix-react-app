import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";
const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoutes;
