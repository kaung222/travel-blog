import React, { useContext } from "react";
import { StateContext } from "../Context/StateContext";
import Rsidebar from "./Rsidebar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [mode, setMode] = useContext(StateContext);
  
  return (
    <>
      <div data-theme={`${mode ? "cupcake" : ""}`}>
        <Sidebar />
        {children}
        <Rsidebar />
      </div>
    </>
  );
};

export default Layout;
