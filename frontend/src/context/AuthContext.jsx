import { createContext, useContext, useState } from "react";

/* eslint-disable react-refresh/only-export-components */

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("chat-user");

  const [authUser, setAuthUser] = useState(
    storedUser ? JSON.parse(storedUser) : null,
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
