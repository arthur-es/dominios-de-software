import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

export const STATUS = {
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
  IDLE: "idle",
};

interface IValue {
  currentUser: any;
  status: string;
  signOut: () => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext({} as IValue);

export const useUser = (): IValue => useContext(UserContext);

const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      typeof localStorage !== "undefined"
    ) {
      const user = localStorage.getItem("user");
      if (user) {
        setCurrentUser(JSON.parse(user));
        setStatus(STATUS.CONNECTED);
      } else {
        setStatus(STATUS.DISCONNECTED);
      }
    }
  }, []);

  useEffect(() => {
    if (
      typeof document !== "undefined" &&
      typeof localStorage !== "undefined"
    ) {
      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));

        setStatus(STATUS.CONNECTED);
      }
    }
  }, [currentUser]);

  const signOut = useCallback(() => {
    setCurrentUser(null);
    setStatus(STATUS.DISCONNECTED);

    if (
      typeof document !== "undefined" &&
      typeof localStorage !== "undefined"
    ) {
      localStorage.removeItem("user");
    }
  }, []);

  const value = useMemo(() => {
    return {
      currentUser,
      setCurrentUser,
      status,
      setStatus,
      signOut,
    };
  }, [currentUser, setCurrentUser, status, setStatus, signOut]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
