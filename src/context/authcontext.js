import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUser({ username, role: 'admin' });
    } else if (username === 'teacher' && password === 'teacher') {
      setUser({ username, role: 'teacher' });
    } else if (username === 'student' && password === 'student') {
      setUser({ username, role: 'student' });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
