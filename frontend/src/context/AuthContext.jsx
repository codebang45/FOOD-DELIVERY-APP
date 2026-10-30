import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("foodieUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const signup = async (email, password, name) => {
    const newUser = {
      email,
      name,
    };

    localStorage.setItem("foodieUser", JSON.stringify(newUser));
    setUser(newUser);

    return { error: null };
  };

  const login = async (email, password) => {
    const newUser = {
      email,
    };

    localStorage.setItem("foodieUser", JSON.stringify(newUser));
    setUser(newUser);

    return { error: null };
  };

  const logout = async () => {
    localStorage.removeItem("foodieUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;