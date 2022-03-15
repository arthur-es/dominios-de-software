import { createContext, useContext, useState, useMemo, useEffect } from "react";

export const STATUS = {
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
  IDLE: "idle",
};

interface IValue {
  currentUser: any;
  status: string;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext({} as IValue);

export const useUser = (): IValue => useContext(UserContext);

const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const value = useMemo(() => {
    return {
      currentUser,
      setCurrentUser,
      status,
      setStatus,
    };
  }, [currentUser, setCurrentUser, status, setStatus]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
