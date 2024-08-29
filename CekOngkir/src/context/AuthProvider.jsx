import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "example@gmail.com" && password === "example123") {
      setUser({ email });
      navigate("/");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
