import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

const AppContext = createContext({});

export function AppProvider({ children }: any) {
  const [user, setUser] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonAppears, setButtonAppears] = useState(true);

  const value = {
    user,
    setUser,
    modalOpen,
    setModalOpen,
    buttonAppears,
    setButtonAppears,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
