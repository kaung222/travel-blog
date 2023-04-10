import React, { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  return (
    <StateContext.Provider value={[mode, setMode]}>
      {children}
    </StateContext.Provider>
  );
};
// export const useCustomContext = useContext(StateContext);
