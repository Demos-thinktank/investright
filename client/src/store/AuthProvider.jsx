import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { getFromStorage } from "../utils/storage";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
    loading: true,
  });
  const authData = { auth, setAuth };

  useEffect(() => {
    // app local storage naming convention for Investright key?
    const localStorageToken = getFromStorage("Investright");
    if (localStorageToken) {
      const config = {
        headers: { Authorization: `Bearer ${localStorageToken}` },
      };
      axios
        .get("/api/account/profile", config)
        .then((res) => {
          if (res.data) {
            // console.log("initial load auth", res.data);
            return setAuth((previous) => ({
              ...previous,
              isAuthenticated: true,
              // token: localStorageToken,
              loading: false,
              // user: res.data,
            }));
          } else {
            return setAuth((previous) => ({ ...previous, loading: false }));
          }
        })
        .catch(console.log);
    } else {
      return setAuth((previous) => ({ ...previous, loading: false }));
    }
  }, []);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
