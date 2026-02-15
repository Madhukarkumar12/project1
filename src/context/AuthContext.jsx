import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticate");
    if (authStatus === "true") {
      setIsAuthenticate(true);
    }
    setLoading(false); 
  }, []);

  const login = () => {
    setIsAuthenticate(true);
    localStorage.setItem("isAuthenticate", "true");
  };

  const logout = () => {
    setIsAuthenticate(false);
    localStorage.removeItem("isAuthenticate");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticate, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };