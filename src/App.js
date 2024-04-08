import React from "react";
import MainMenuComponent from "./components/MainMenuComponent";
import SidebarComponent from "./components/SidebarComponent";
function App() {
  return (
    <React.Fragment>
      <SidebarComponent/>
      <MainMenuComponent/>
    </React.Fragment>
  );
}

export default App;
