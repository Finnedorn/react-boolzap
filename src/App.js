import React from "react";
import contacts from "./assets/data/store";
function App() {
  let searchResults = "";
  let selectedIndex = 0;
  let newText = "";
  let newAnswer = "devo andare, ci sentiamo quando esco da palestra, a dopo";
  let loadingPg = true;
  let showChat = false;

  const sidebarClassName = !showChat ? "col col-md-4 g-0 d-md-block" : "col col-md-4 g-0 d-none";

  // const sidebar = document.getElementById("sidebar");
  // if(showChat) {
  //   this.sidebar.classList.add("d-none");
  // } else {
  //   this.sidebar.classList.remove("d-none");
  // }

  // function lastAccess(){
  //   function selectedContacts() {
  //     return contacts[selectedIndex];
  //   }
  //   const access = selectedContacts.message.lenght;
  //   if (access > 0) {
  //     return selectedContacts.message[access - 1].date;
  //   } else {
  //     return 'sconosciuto';
  //   }
  // };

  function chatSelector(indice) {
    console.log(indice);
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
          <div id="sidebar" className={sidebarClassName}>
            <div className="row flex-column h-100 g-0">
              <div className="col-12 bg-my-grey d-flex justify-content-between p-3 align-items-center border-end">
                <div className="d-flex align-items-center">
                  <div className="portrait">
                    <img src="img/avatar_io.jpg" alt="photo_avatar_of _mine" />
                  </div>
                  <h5>Sofia</h5>
                </div>
                <div className="d-flex align-items-center">
                  <a href="#">
                    <i className="fa-solid fa-circle-notch me-4"></i>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-message me-4"></i>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-ellipsis-vertical me-4"></i>
                  </a>
                </div>
              </div>
              <div className="col-12 bg-my-turquoise p-3">
                <div className="row ps-3 align-items-center">
                  <div className="bell text-center col-3">
                    <i className="fa-solid fa-bell-slash pt-3"></i>
                  </div>
                  <div className="col-9">
                    <h5>Ricevi le notifiche di nuovi messaggi</h5>
                    <a href="#" className="text-my-small-grey">
                      Attiva notifiche desktop
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 input-group p-3 bg-my-grey">
                <span className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="cerca..."
                  value={searchResults}
                  onKeyUp={() => {
                    contactFilter();
                  }}
                />
              </div>
              <div className="col-12 flex-grow-1 overflow-y-auto h0">
                <ul className="list-group list-group-flush overflow-auto">
                  {contacts.map((contact) => {
                    return (
                      <li key={contact.id} 
                      className={contact.visible ? "list-group-item" : "d-none" || contact.id === selectedIndex ? "list-group-item active" : "list-group-item"} 
                      onClick={chatSelector(contact.id)}>
                        <div className="row py-2 g-0">
                          <div className="portrait col-2">
                            <img src={contact.avatar} alt={`${contact.name}`} />
                          </div>
                          <div className="col">
                            <h5 className="mb-1">{contact.name}</h5>
                            <small className="text-my-small-grey">
                              {
                                contact.messages[contact.messages.length - 1]
                                  .message
                              }
                            </small>
                          </div>
                          <div className="col-2">
                            <small className="text-my-small-grey">
                              {
                                contact.messages[contact.messages.length - 1]
                                  .date
                              }
                            </small>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          


          
          <div className="col-12 col-md-8 d-flex flex-column g-0 d-md-block" >
            <div  class="row flex-column h-100 g-0">
                <div class="bg-my-grey d-flex justify-content-between align-items-center chat-header">
                    <div class="d-flex align-items-center">
                        <div class="portrait ms-2">
                            <img src={contacts[1].avatar} alt={contacts[1].name}/>
                        </div>
                        <div>
                            <h5>
                            
                              {/* {
                                contacts[selectedIndex].name
                              } */}
                            </h5>
                            <small>
                                {/* Ultimo accesso { contacts[selectedIndex].lastAccess } */}
                            </small>
                        </div>
                    </div>
                    <div class="d-flex">
                        <a href="#">
                            <i class="fa-solid fa-magnifying-glass me-4"></i>
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-paperclip me-4"></i>
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-ellipsis-vertical me-4"></i>
                        </a>
                    </div>
                </div>
                {/* chat */}
                <div class="flex-grow-1 overflow-y-auto bg-my-img p-5 h0">
                    <div class="p-2 rounded-4 mb-4 position-relative d-flex justify-content-between">
                        <div class="p-2">
                            <span>
                                {}
                            </span>
                            <small class="last-msg-preview position-absolute msg-date-position">
                                {}
                            </small>
                        </div>
                        {/* dropdown menù */}
                        <div class="btn-group msg-toggle-position pt-3">
                            <button type="button"
                            class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">
                                    Toggle Dropdown
                                </span>
                            </button>
                            <ul class="dropdown-menu rounded-3">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Info messaggio
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Cancella
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div v-else class="p-3 rounded-4 mb-4 text-center msg-none w-50 m-auto">
                        <span>
                            Non hai alcun messaggio con l'utente
                        </span>
                    </div>
            
                </div>
                {/* chatspot */}
                <div class="bg-my-grey d-flex justify-content-between align-items-center p-3">
                    <a href="#">
                        <i class="fa-regular fa-face-smile me-2"></i>
                    </a>
                    <input class="form-control rounded-5" type="text" placeholder="Scrivi un messaggio..." v-model="newText"/>
                    <a href="#">
                        <i class="fa-solid fa-microphone ms-2"></i>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
