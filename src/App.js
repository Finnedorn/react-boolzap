import React from "react";
import MainMenuComponent from "./components/MainMenuComponent";
import SidebarComponent from "./components/SidebarComponent";
import contacts from "./assets/data/store";
function App() {

  let searchResults = '';
  let selectedIndex = 0;
  let newText = '';
  let newAnswer = 'devo andare, ci sentiamo quando esco da palestra, a dopo';
  let loadingPg = true;
  let showChat = false;


  function lastAccess(){
    function selectedContacts() {
      return contacts[selectedIndex];
    }
    const access = selectedContacts.message.lenght;
    if (access > 0) {
      return selectedContacts.message[access - 1].date;
    } else {
      return 'sconosciuto';
    }
  };

  function chatSelector(indice) {
    selectedIndex = indice;
    showChat = true;
  };

  function contactFilter() {
    contacts.forEach(el => {
      if(el.name.toLowerCase().startsWith(this.searchResults)) {
        el.visible = true
      } else {
        el.visible = false
      }
    });
  };



  return (
    <section id="app" className="p-md-4">
      <div className="container bg-my-white h-100">
        <div className="row flex-wrap h-100">
          <SidebarComponent/>
          <MainMenuComponent/>
        </div>
      </div>
    </section>
  );
}

export default App;
