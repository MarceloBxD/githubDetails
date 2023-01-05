import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { UserProps } from "../types/user";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [dataUser, setDataUser] = useState<any>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [buttonAppears, setButtonAppears] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");

  const githubApi = async (username: string) => {
    const req = await fetch(`https://api.github.com/users/${username}`);
    const json = await req.json();
    setDataUser(json);
  };

  const value = {
    user,
    setUser,
    dataUser,
    setDataUser,
    modalOpen,
    setModalOpen,
    buttonAppears,
    setButtonAppears,
    username,
    setUsername,
    githubApi,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
