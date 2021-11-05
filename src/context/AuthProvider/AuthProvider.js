import React, { createContext } from "react";
import useFirbase from "../../hooks/useFirebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContexts = useFirbase();
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
