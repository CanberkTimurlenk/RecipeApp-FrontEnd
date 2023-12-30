import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const PrivateRouteService = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRouteService;
