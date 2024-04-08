import React from "react";
import MainMenuComponent from "./components/MainMenuComponent";
import SidebarComponent from "./components/SidebarComponent";
function App() {
  return (
    <section id="app" className="p-md-4">
      <div className="container bg-my-white h-100">
        <SidebarComponent/>
        <MainMenuComponent/>
      </div>
    </section>
  );
}

export default App;
