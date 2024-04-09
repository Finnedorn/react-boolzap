import React from "react";


const MainMenuComponent = () => {
    return (
        <div className="col-12 col-md-8 d-flex flex-column g-0 d-md-block" >
            <div  class="row flex-column h-100 g-0">
                <div class="bg-my-grey d-flex justify-content-between align-items-center chat-header">
                    <div class="d-flex align-items-center">
                        <div class="portrait ms-2">
                            <img src="selectedContacts.avatar" alt="selectedContacts.avatar"/>
                        </div>
                        <div>
                            <h5>
                                {}
                            </h5>
                            <small>
                                Ultimo accesso {}
                            </small>
                        </div>
                    </div>
                    <div class="d-flex">
                        <a href="#" >
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
    );
};

export default MainMenuComponent;