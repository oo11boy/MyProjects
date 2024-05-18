import React from "react";
import { Link, useRoutes } from "react-router-dom";
import { MyRoutes } from "./MyRoutes";
import "./App.css";
import { GetDataUserProvider } from "./ContextApi/P2Context/GetDataUser";
import SelectedSeatContextProvider from "./ContextApi/Project5/SelectedSeatContext";
import SocialPostContextProvider from "./ContextApi/P6Context/socialpostcontext";
import { ShopContextProvider } from "./Projects/Project7/Context/ShopContext";

export default function App() {
  const routers = useRoutes(MyRoutes);
  return (
    <ShopContextProvider>
      <SelectedSeatContextProvider>
        <SocialPostContextProvider>
          <GetDataUserProvider>
            <div style={{ width: "100%", height: "auto" }}>{routers}</div>
          </GetDataUserProvider>
        </SocialPostContextProvider>
      </SelectedSeatContextProvider>
    </ShopContextProvider>
  );
}
