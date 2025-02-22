import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";
const ApplicationShellContext = createContext<any>(null);

export const ApplicationShellProvider = ({ children }: any) => {
  const [expandedSidebar, setExpandedSidebar] = useLocalStorage(
    "expandedSidebar",
    true
  );

  return (
    <ApplicationShellContext.Provider
      value={{
        expandedSidebar,
        setExpandedSidebar,
      }}
    >
      {children}
    </ApplicationShellContext.Provider>
  );
};

export const useApplicationShell = () => {
  return useContext(ApplicationShellContext);
};

export default ApplicationShellContext;
